export type RequestData = {
  url: string
  params?: any
  body?: any
}

export type ResponseData<T> = {
  statusCode: number
  body?: T
}
