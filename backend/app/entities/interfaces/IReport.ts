export interface IReport {
  peopleCount?: number
  maleCount?: number
  femaleCount?: number
  otherCount?: number
  atmosphere?: string
  comments?: string
  tags?: Array<{
    name: string
    id: number
  }>
  venueId: string
  userId: string
  reportId: string
}
