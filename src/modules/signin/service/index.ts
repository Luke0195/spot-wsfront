import { CheckEmailUseCase } from '../usecases'

class AuthenticationService implements CheckEmailUseCase {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async checkEmail(email: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
