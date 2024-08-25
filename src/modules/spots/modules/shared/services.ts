import {
  httpClient,
  HttpClientAdapter,
  ResponseData,
} from '../../../../infra/http'
import { RemoteResponseData } from '../../../../shared/protocols/remote-response-data'
import { SpotApiResponse, FormData } from './interface'
import { ListSpotsUseCase, CreateSpotUseCase } from './usecases'
import { parsedToPersist } from './mappers'

class SpotService implements ListSpotsUseCase, CreateSpotUseCase {
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

  async createSpot(data: FormData): Promise<ResponseData<void>> {
    const payload = parsedToPersist(data)
    const response = await this.httpClient.post<ResponseData<any>>({
      url: '/spots',
      body: payload,
    })
    return {
      statusCode: response.statusCode,
    }
  }
}

const spotService = new SpotService(httpClient)

export { spotService }
