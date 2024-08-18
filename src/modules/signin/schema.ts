import * as yup from 'yup'

const schema = () => {
  return yup.object({
    email: yup
      .string()
      .email('Informe um e-mail válido')
      .required('O campo e-mail é obrigatório'),
  })
}

export { schema }
