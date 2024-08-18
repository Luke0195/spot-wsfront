import { axiosInstance } from '../../shared/libs/axios'
import { RequestData, ResponseData, AxiosAdapter } from './'

export class HttpClientAdapter implements AxiosAdapter {
  async post<T>(data: RequestData): Promise<ResponseData<T>> {
    const response = await axiosInstance.post(`${data.url}`, data.body, {
      params: data.params,
    })

    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  async get<T>(data: RequestData): Promise<ResponseData<T | void>> {
    const response = await axiosInstance.get(`${data.url}`, {
      params: data.params,
    })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
