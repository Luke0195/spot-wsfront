export interface CheckEmailUseCase {
  checkEmail(email: string): Promise<void>
}
