import { inject } from '@adonisjs/core'
import UserRepository from '../repositories/UserRepository.js'
import { IAuthenticatedUser, IUser } from '#entities/interfaces/IUser'
@inject()
export default class UserService {
  constructor(protected userRepository: UserRepository) {}

  public async create(user: Partial<IUser>) {
    return this.userRepository.create(user)
  }

    
  public async authenticate (user: IAuthenticatedUser) {
    return this.userRepository.authenticate(user)
  }

  public async getTodaysReportForVenue (venueId: string, userId: string) {
    return this.userRepository.getTodaysReportForVenue(venueId , userId)
  }

}
