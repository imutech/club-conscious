import { IAuthenticatedUser, IUser } from '#entities/interfaces/IUser'
import Report from '#models/report'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'

export default class UserRepository {
  public async create(user: Partial<IUser>) {
    const createdUser = await User.create({
      username: user.username,
      email: user.email,
      password: user.password,
    })
    return createdUser
  }

  public async authenticate(user: IAuthenticatedUser) {
    const authenticatedUser = await User.findByOrFail('username', user.username)
    if (await hash.verify(authenticatedUser.password, user.password)) {
      return authenticatedUser
    }
    throw new Error('Invalid credentials')
  }

  public async getTodaysReportForVenue(venueId: string, userId: string) {
    let reports = await Report.query().where('venue_id', venueId).where('user_id', userId)
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
      throw new Error('no report')
    }
    const report = reports[0].$attributes
    return report
  }
}
