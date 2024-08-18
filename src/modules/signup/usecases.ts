export type AccountResponseData = {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}
export type AccountRequestData = {
  name: string
  email: string
}

export interface CreateAccount {
  createAccount(data: AccountRequestData): Promise<AccountRequestData>
}
