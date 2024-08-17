import { AxiosRequestConfig } from 'axios'

export type RequestData = {
  url: string
  params?: AxiosRequestConfig
  body?: any
}

export interface AxiosAdapter {
  get(data: RequestData): Promise<any | void>
  post(data: RequestData): Promise<any | void>
}
