export interface IVenue {
  venueId: string
  name: string
  address: string
  city: string
  province: string
  postal_code: string
  country: string
  description: string
  capacity: number
  coverImage?: string
  // reports: Report[];
  createdAt?: string
  updatedAt?: string
}
