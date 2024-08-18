import { SetStateAction } from '../../shared/protocols'
import { FormData, schema, signupService } from './'
import { useState } from 'react'
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

type UseCreateAccountHook = {
  loading: {
    loading: boolean
    setLoading: SetStateAction<boolean>
  }
  form: UseFormReturn<FormData, any, undefined>
  onSubmit: SubmitHandler<FormData>
}

export function useCreateAccountHook(): UseCreateAccountHook {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<FormData>({
    defaultValues: { name: '', email: '' },
    reValidateMode: 'onChange',
    mode: 'onBlur',
    resolver: yupResolver(schema()),
  })

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setLoading(true)
    try {
      await signupService.createAccount(data)
      toast.success('Ação realizada com sucesso!')
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('Ocorreu um erro ao realizar essa ação!')
    } finally {
      setLoading(false)
    }
  }

  return { loading: { loading, setLoading }, onSubmit, form }
}
