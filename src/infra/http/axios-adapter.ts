import { RequestData, ResponseData } from './interfaces'
export interface AxiosAdapter {
  get<T>(data: RequestData): Promise<ResponseData<T | void>>
  post<T>(data: RequestData): Promise<ResponseData<T>>
}
