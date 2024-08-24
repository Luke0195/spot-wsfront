import { FiLogOut } from 'react-icons/fi'
import { Wrapper, Input, Button, FieldError } from '../../@components/ui'
import { useCreateAccountHook } from './'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'

export function Ui() {
  const { loading, form, onSubmit } = useCreateAccountHook()
  const { control, handleSubmit } = form
  return (
    <Wrapper>
      <div className="w-2/5 rounded-md bg-white p-8 my-2 shadow-inner flex flex-col  justify-center ">
        <h2 className="text-gray-700 font-bold text-center">
          Preencha os campos para realizar seu cadastro no aircnc
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <label className="font-semibold text-sm py-2">Nome*</label>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  placeholder="Informe o seu nome"
                  className={`h-10 border rounded-sm ${form.formState.errors.name?.message ? 'border-red-400' : 'border-gray-400'}`}
                  {...field}
                />
              )}
            />
            {form.formState.errors.name && (
              <FieldError mesasge={form.formState.errors.name?.message} />
            )}
          </div>
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
          </div>
          <Link to={'/'}>
            <span className="flex  items-center text-sm my-2 justify-center text-gray-500 font-medium hover:underline cursor-pointer gap-x-2 ">
              {' '}
              Já possui conta <FiLogOut />{' '}
            </span>
          </Link>
          <Button
            type="submit"
            className="w-full bg-red-500 font-bold rounded-sm hover:bg-red-400"
            disabled={loading.loading || !form.formState.isValid}>
            {loading.loading ? 'Executando...' : 'Salvar'}
          </Button>
        </form>
      </div>
    </Wrapper>
  )
}
