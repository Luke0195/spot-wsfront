import { User } from '../../domain/user'

export interface CheckEmailUseCase {
  checkEmail(email: string): Promise<void>
}

export type MfaAuthenticationParams = {
  code: string
  email: string
}
export interface MfaAUthenticationUseCase {
  auth(params: MfaAuthenticationParams): Promise<User>
}
