import { inject } from '@adonisjs/core'
import VenueRepository from '../repositories/VenueRepository.js'

@inject()
export default class VenueService {
  constructor(protected venueRepository: VenueRepository) {}

  public async getVenues() {
    return await this.venueRepository.getVenues()
  }
}
