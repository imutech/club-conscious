export interface IVenue {
  venueId: string
  name: string
  address: string
  city: string
  province: string
  postal_code: string
  country: string
  description: string
  capacity: number,
  coverImage?: string,
  createdAt?: string
  updatedAt?: string
}
