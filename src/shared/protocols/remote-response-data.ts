type SortData = {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

type PagableData = {
  pageNumber: number
  pageSize: number
  sort: SortData
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface RemoteResponseData<T> {
  totalPages: number
  totalElements: number
  pageable: PagableData
  size: number
  content: T[]
  number: number
  sort: SortData
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}
