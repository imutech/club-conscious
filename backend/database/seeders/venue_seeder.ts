import Venue from '#models/venue'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Venue.createMany([
      {
        name: 'Room 104',
        address: '104 Clarence St.',
        city: 'Ottawa',
        province: 'ON',
        postal_code: 'K1N 5P6',
        country: 'Canada',
        description: '1980s designed bar in Byward Market',
      },
      {
        name: 'The Show',
        address: '104 Clarence St.',
        city: 'Ottawa',
        province: 'ON',
        postal_code: 'K1N 5P5',
        country: 'Canada',
        description: 'High end bar in Byward Market',
      },
    ])
  }
}
