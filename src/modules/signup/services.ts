import { httpClient, HttpClientAdapter } from '../../infra/http'
import {
  AccountRequestData,
  CreateAccount,
  AccountResponseData,
} from './usecases'

class SignUpService implements CreateAccount {
  constructor(private readonly httpClient: HttpClientAdapter) {
    this.httpClient = httpClient
  }

  async createAccount(data: AccountRequestData): Promise<AccountResponseData> {
    const response = await this.httpClient.post<AccountResponseData>({
      url: '/users/register',
      params: {},
      body: data,
    })
    if (response.statusCode !== 201)
      throw new Error('Ocorreu um ao realizar essa ação!')

    return response.body as AccountResponseData
  }
}

const signupService = new SignUpService(httpClient)
export { signupService }
