import Venue from '#models/venue'

export default class VenueRepository {
  public async getVenues() {
    const allVenues = await Venue.all()
    return allVenues
  }
}
