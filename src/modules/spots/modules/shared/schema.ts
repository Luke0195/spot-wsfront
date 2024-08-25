import * as yup from 'yup'

const schema = () => {
  return yup.object({
    name: yup.string().required('O campo nome é obrigatório'),
    thumbnail: yup.string().required('O campo thumbnail é obrigatório'),
    techs: yup.string().required('O campo techs é obrigatório'),
    price: yup.string().required('O campo preco é obrigatório'),
  })
}

export { schema }
