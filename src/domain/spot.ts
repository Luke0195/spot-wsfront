import { User } from './user'

export type Spot = {
  id: string
  name: string
  thumbnail: string
  techs: string[]
  user: User
  price: number
  createdAt: string
  updatedAt: string
}
