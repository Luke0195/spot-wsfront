import logo from '../../../assets/logo.svg'
import {
  Input,
  Button,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  FieldError,
} from '../../../@components/ui'
import { useAuthenticationHook } from '../index'
import { Controller } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Ui() {
  const { checkEmail, form, loading, showOptInput } = useAuthenticationHook()

  const { control, formState, handleSubmit } = form
  console.log(formState.errors.email?.message)
  return (
    <div className="w-screen h-screen bg-banner bg-cover bg-right-bottom flex flex-col items-center justify-center">
      <div className="w-2/5 flex flex-col items-center  ">
        <img src={logo} alt="aircnc logo" />
        <div className="w-3/4 rounded-md bg-white p-8 my-2 shadow-inner flex flex-col  justify-center">
          <p className="w-96 text-left">
            Ofereça <strong> spots</strong> para programadores e encontre{' '}
            <strong> talentos</strong> para sua empresa.
          </p>
          <form onSubmit={handleSubmit(checkEmail)}>
            {showOptInput.showOptInput ? (
              <div className="my-4">
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            ) : (
              <div className="my-4">
                <label className="font-semibold text-sm py-2">E-mail*</label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <Input
                      placeholder="Informe o seu e-mail"
                      className={`h-10 border rounded-sm ${form.formState.errors.email?.message ? 'border-red-400' : 'border-gray-400'}`}
                      {...field}
                    />
                  )}
                />
                {form.formState.errors.email && (
                  <FieldError mesasge={form.formState.errors.email?.message} />
                )}
                <Link to={'/signup'}>
                  <span className="flex  items-center text-sm my-2 justify-center text-red-500 font-medium hover:underline cursor-pointer ">
                    {' '}
                    Não possui conta <FiLogIn />{' '}
                  </span>
                </Link>
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-red-500 font-bold rounded-sm hover:bg-red-400"
              disabled={loading.loading}>
              Entrar{' '}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
