import { inject } from '@adonisjs/core'
import ReportRepository from '../repositories/ReportRepository.js'
import { IStartReportInitData } from '#entities/interfaces/Shared'
import { IReport } from '#entities/interfaces/IReport'

@inject()
export default class ReportService {
  constructor(private readonly reportRepository: ReportRepository) {}

  public async startReport(initData: IStartReportInitData) {
    await this.reportRepository.startReport(initData)
  }

  public async updateReport(report: IReport) {
    await this.reportRepository.updateReport(report)
  }

  public async getReport(venueId: string) {
    return await this.reportRepository.getReport(venueId)
  }
}
