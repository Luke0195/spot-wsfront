import { RequestData, AxiosAdapter } from './axios-adapter'

import { HttpClientAdapter } from './httpclientadapter'

class HttpClient implements AxiosAdapter {
  constructor(private readonly axiosAdapter: AxiosAdapter) {
    this.axiosAdapter = axiosAdapter
  }

  async post(data: RequestData): Promise<any | void> {
    return this.axiosAdapter.post(data)
  }

  async get(data: RequestData): Promise<any> {
    return await this.axiosAdapter.get(data)
  }
}

const httpClientAdapter = new HttpClientAdapter()
const httpClient = new HttpClient(httpClientAdapter)

export { httpClient }
