export interface CheckEmailUseCase {
  checkEmail(email: string): Promise<any>
}
