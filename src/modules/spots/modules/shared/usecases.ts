import { RemoteResponseData } from '../../../../shared/protocols/remote-response-data'
import { SpotApiResponse } from './interface'

export interface ListSpotsUseCase {
  getSpots(params: any): Promise<RemoteResponseData<SpotApiResponse>>
}
