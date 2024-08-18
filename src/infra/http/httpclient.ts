import { AxiosAdapter } from './axios-adapter'
import { RequestData, ResponseData } from './interfaces'

import { HttpClientAdapter } from './httpclientadapter'

class HttpClient implements HttpClientAdapter {
  constructor(private readonly axiosAdapter: AxiosAdapter) {
    this.axiosAdapter = axiosAdapter
  }

  async post<T>(data: RequestData): Promise<ResponseData<T>> {
    return this.axiosAdapter.post(data)
  }

  async get<T>(data: RequestData): Promise<ResponseData<T | void>> {
    return await this.axiosAdapter.get(data)
  }
}

const httpClientAdapter = new HttpClientAdapter()
const httpClient = new HttpClient(httpClientAdapter)

export { httpClient }
