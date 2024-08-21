import { CheckEmailUseCase } from './usecases'
import { httpClient, HttpClientAdapter } from '../../infra/http'

class AuthenticationService implements CheckEmailUseCase {
  constructor(private readonly httpClient: HttpClientAdapter) {
    this.httpClient = httpClient
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
