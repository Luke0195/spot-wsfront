import { useAuthenticationHook } from '../hooks'
import { Input, FieldError, Button, Loader } from '../../../@components/ui'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

export function Form() {
  const { form, checkEmail, loading: loadingObj } = useAuthenticationHook()
  const { handleSubmit, control } = form
  const { loading } = loadingObj
  return (
    <form onSubmit={handleSubmit(checkEmail)}>
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
          <span className="flex  items-center text-sm my-2 justify-center text-gray-500 font-medium hover:underline cursor-pointer ">
            {' '}
            Não possui conta <FiLogIn />{' '}
          </span>
        </Link>
      </div>

      <Button
        className="w-full bg-red-500 font-bold rounded-sm hover:bg-red-400"
        disabled={loading}>
        {loading ? <Loader /> : 'Entrar'}
      </Button>
    </form>
  )
}
