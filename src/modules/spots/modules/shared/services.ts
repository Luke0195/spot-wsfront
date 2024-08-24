import { httpClient, HttpClientAdapter } from '../../../../infra/http'
import { RemoteResponseData } from '../../../../shared/protocols/remote-response-data'
import { SpotApiResponse } from './interface'
import { ListSpotsUseCase } from './usecases'

class SpotService implements ListSpotsUseCase {
  constructor(private readonly httpClient: HttpClientAdapter) {
    this.httpClient = httpClient
  }
  async getSpots(params: any): Promise<RemoteResponseData<SpotApiResponse>> {
    const response = await this.httpClient.get<
      RemoteResponseData<SpotApiResponse>
    >({ url: '/spots', params: params })
    if (response.statusCode !== 200)
      throw new Error('Ocorreu um erro ao carregar a lista.')
    return response.body as RemoteResponseData<SpotApiResponse>
  }
}

const spotService = new SpotService(httpClient)

export { spotService }
