import { CheckEmailUseCase } from './usecases'
import { axiosInstance as httpClient } from '../../shared/libs'

class AuthenticationService implements CheckEmailUseCase {
  constructor() {}
  async checkEmail(email: string): Promise<any> {
    if (!email) throw new Error('The field email must be required')
    const params = {
      email,
    }
    const response = await httpClient.get('/users/checkeuser', {
      params: params,
    })
    if (response.status !== 200)
      throw new Error('Error, please try again later!')
  }
}

const authenticationService = new AuthenticationService()

export { authenticationService }
