import { Controller } from 'react-hook-form'
import { Content, FieldError, Input, Button } from '../../../../@components/ui'
import { useSpotHooks } from '../shared/hooks'

export function Ui() {
  const { form, createSpot } = useSpotHooks()
  const { control, handleSubmit } = form
  return (
    <Content>
      <h1 className="font-semibold text-xl my-2">
        {' '}
        Preencha os campos para criar um spot
      </h1>
      <div className="w-96">
        <form onSubmit={handleSubmit(createSpot)}>
          <div className="my-2">
            <label className="font-semibold text-sm py-2">Thumbnail*</label>
            <Controller
              control={control}
              name="thumbnail"
              render={({ field }) => (
                <Input
                  placeholder="Informe  a thubmnail do spot"
                  className={`h-10 border rounded-sm ${form.formState.errors.thumbnail?.message ? 'border-red-400' : 'border-gray-400'}`}
                  {...field}
                />
              )}
            />
            {form.formState.errors.name && (
              <FieldError mesasge={form.formState.errors.thumbnail?.message} />
            )}
          </div>
          <div className="my-2">
            <label className="font-semibold text-sm py-2">Companhia*</label>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  placeholder="Informe o nome da companhia"
                  className={`h-10 border rounded-sm ${form.formState.errors.name?.message ? 'border-red-400' : 'border-gray-400'}`}
                  {...field}
                />
              )}
            />
            {form.formState.errors.name && (
              <FieldError mesasge={form.formState.errors.name?.message} />
            )}
          </div>
          <div className="my-2">
            <label className="font-semibold text-sm py-2">Techs*</label>
            <Controller
              control={control}
              name="techs"
              render={({ field }) => (
                <Input
                  placeholder="Informe as techs separadas por virgula"
                  className={`h-10 border rounded-sm ${form.formState.errors.techs?.message ? 'border-red-400' : 'border-gray-400'}`}
                  {...field}
                />
              )}
            />
            {form.formState.errors.name && (
              <FieldError mesasge={form.formState.errors.techs?.message} />
            )}
          </div>
          <div className="my-2">
            <label className="font-semibold text-sm py-2">Preço*</label>
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <Input
                  placeholder="Informe o seu preço"
                  className={`h-10 border rounded-sm ${form.formState.errors.price?.message ? 'border-red-400' : 'border-gray-400'}`}
                  {...field}
                />
              )}
            />
            {form.formState.errors.price && (
              <FieldError mesasge={form.formState.errors.price?.message} />
            )}
          </div>
          <Button className="w-96 bg-red-600 hover:bg-red-400 my-2">
            Salvar
          </Button>
        </form>
      </div>
    </Content>
  )
}
