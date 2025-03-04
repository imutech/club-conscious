import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import VenueService from '#services/VenueService'

@inject()
export default class VenuesController {
  constructor(protected venueService: VenueService) {}

  public async getVenues({ response }: HttpContext) {
    try {
      const venues = await this.venueService.getVenues()
      response.json(venues)
    } catch (error) {
      console.log(error)
    }
  }
}
