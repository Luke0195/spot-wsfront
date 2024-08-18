import * as yup from 'yup'

const schema = () => {
  return yup.object({
    name: yup.string().required('O campo nome é obrigatório.'),
    email: yup
      .string()
      .email('Por favor informe um e-mail válido!')
      .required('O campo e-mail é obrigatório'),
  })
}
export { schema }
