import { CheckEmailUseCase, MfaAUthenticationUseCase } from './usecases'
import { httpClient, HttpClientAdapter } from '../../infra/http'

class AuthenticationService
  implements CheckEmailUseCase, MfaAUthenticationUseCase
{
  constructor(private readonly httpClient: HttpClientAdapter) {
    this.httpClient = httpClient
  }
  async auth(params: { email: string; code: string }): Promise<any> {
    if (!params.email || !params.code)
      throw new Error(
        'É necessário que os campos e-mail e código sejam preenchidos corretamento!',
      )
    const response = await this.httpClient.post<any>({
      url: '/auth',
      body: params,
    })
    return response.body
  }

  async checkEmail(email: string): Promise<void> {
    if (!email) throw new Error('The field email must be required')
    const response = await this.httpClient.get<void>({
      url: `/users/checkuser?email=${email}`,
    })
    if (response.statusCode !== 200)
      throw new Error('Error, please try again later!')
  }
}

const authenticationService = new AuthenticationService(httpClient)

export { authenticationService }
