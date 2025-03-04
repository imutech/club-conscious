import { IReport } from '#entities/interfaces/IReport'
import { IStartReportInitData } from '#entities/interfaces/Shared'
import Report from '#models/report'
import { DateTime } from 'luxon'

export default class ReportRepository {
  public async startReport(initData: IStartReportInitData) {
    // check if user started a report for the same day
    const userReports = await Report.query()
      .where('user_id', initData.userId)
      .where('venue_id', initData.venueId)
    const today = DateTime.now().set({ hour: 0, minute: 0, second: 0 })
    const userAlreadyReporting = userReports.some((report) => {
      return report.createdAt.hasSame(today, 'day')
    })
    if (userAlreadyReporting) {
      throw new Error('User already reporting')
    }
    await Report.create({
      peopleCount: 0,
      maleCount: 0,
      femaleCount: 0,
      otherCount: 0,
      atmosphere: '',
      comments: '',

      tags: undefined,
      venueId: initData.venueId,
      userId: initData.userId,
    })
  }

  public async updateReport(report: IReport) {
    const reportToUpdate = await Report.findOrFail(report.reportId)
    if (!reportToUpdate) {
      throw new Error('Report not found')
    }
    await reportToUpdate.merge({ ...report, tags: JSON.stringify(report.tags) }).save()
  }

  public async getReport(venueId: string) {
    // Grab the report for the last 24 hours
    let reports = await Report.query().where('venue_id', venueId)
    reports = reports.filter((report) => {
      const reportDate = report.createdAt.toUTC()
      const today = DateTime.now().toUTC()
      // make sure report is within two AM of now and was created on the same day
      const twoAMNextDay = DateTime.now()
        .toUTC()
        .plus({ days: 1 })
        .set({ hour: 2, minute: 0, second: 0 })
      const sameDay = reportDate.hasSame(today, 'day')
      const younger = reportDate <= twoAMNextDay
      return sameDay && younger
    })
    if (!reports || reports.length === 0) {
      throw new Error('Reports not found')
    }
    const finalReport = reports[0].$attributes
    reports.forEach((report, index) => {
      if (index === 0) {
        return
      }
      finalReport.peopleCount += report.peopleCount
      finalReport.maleCount += report.maleCount
      finalReport.femaleCount += report.femaleCount
      finalReport.otherCount += report.otherCount
    })
    return finalReport
  }
}
