import { AxiosAdapter, RequestData } from './axios-adapter'
import { axiosInstance } from '../../shared/libs/axios'

export class HttpClientAdapter implements AxiosAdapter {
  async post(data: RequestData): Promise<any | void> {
    const response = await axiosInstance.post(`${data.url}`, data.body, {
      params: data.params,
    })

    return response
  }

  async get(data: RequestData): Promise<any> {
    const response = await axiosInstance.get(`${data.url}`, {
      params: data.params,
    })
    return response.data
  }
}
