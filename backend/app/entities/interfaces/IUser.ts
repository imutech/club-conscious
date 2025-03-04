export interface IUser {
  userId: string
  username: string
  email: string
  password: string
  createdAt?: string
  updatedAt?: string
}

export interface IAuthenticatedUser {
  username: string
  password: string
}
