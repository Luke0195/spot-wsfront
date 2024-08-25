import { ResponseData } from '../../../../infra/http'
import { RemoteResponseData } from '../../../../shared/protocols/remote-response-data'
import { SpotApiResponse, FormData } from './interface'

export interface ListSpotsUseCase {
  getSpots(params: any): Promise<RemoteResponseData<SpotApiResponse>>
}

export interface CreateSpotUseCase {
  createSpot(data: FormData): Promise<ResponseData<void>>
}
