import { User } from '../../../../domain/user'

export type SpotApiResponse = {
  id: string | null
  name: string | null
  thumbnail: string | null
  techs: string[] | null
  user: User | null
  price: number | null
  created_at: string | null
  updated_at: string | null
}

export type FormData = {
  name: string
  thumbnail: string
  techs: string
  price: string
}
