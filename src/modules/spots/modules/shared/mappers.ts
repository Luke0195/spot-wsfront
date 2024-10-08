import { Spot } from '../../../../domain/spot'
import { SpotApiResponse, FormData } from './interface'

export const mapToDomain = (data: SpotApiResponse[]): Spot[] => {
  return data.map((item) => {
    const parsedItem: Spot = {
      id: item.id !== null ? item.id : '-',
      name: item.name !== null ? item.name : '-',
      thumbnail: item.thumbnail !== null ? item.thumbnail : '-',
      price: item.price !== null ? item.price : 0,
      createdAt: item.created_at !== null ? item.created_at : '-',
      updatedAt: item.updated_at !== null ? item.updated_at : '-',
      techs: item.techs !== null ? item.techs : [],
      user: {
        id: item.user !== null ? item.user?.id : '-',
        name: item.user !== null ? item.user?.id : '-',
        email: item.user !== null ? item.user?.email : '-',
        createdAt: item.user !== null ? item.user?.createdAt : '-',
        updatedAt: item.user !== null ? item.user?.updatedAt : '-',
      },
    }
    return parsedItem
  })
}

type PayloadData = {
  name: string
  thumbnail: string
  techs: string[]
  user_id: string
  price: number
}

export function parsedToPersist({
  name,
  thumbnail,
  techs,
  price,
}: FormData): PayloadData {
  const {
    user: { id },
  } = JSON.parse(localStorage.getItem('aircnc@user') as any)

  const payload = {
    name,
    user_id: id as string,
    thumbnail,
    techs: techs.split(','),
    price: Number(price),
  }
  return payload
}
