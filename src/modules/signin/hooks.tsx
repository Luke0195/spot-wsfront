import React from 'react'
import { schema, authenticationService, FormData } from './index'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'

type AuthenticationHookProps = {
  loading: {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
  showOptInput: {
    showOptInput: boolean
    setShowOptInput: React.Dispatch<React.SetStateAction<boolean>>
  }
  form: UseFormReturn<FormData, any, undefined>
  checkEmail: () => Promise<void>
}

export function useAuthenticationHook(): AuthenticationHookProps {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [showOptInput, setShowOptInput] = React.useState<boolean>(false)
  const form = useForm<FormData>({
    defaultValues: { email: '', code: '' },
    mode: 'onChange',
    resolver: yupResolver(schema()),
    reValidateMode: 'onBlur',
  })

  const checkEmail = async (): Promise<void> => {
    setLoading(true)
    try {
      const email = form.watch('email')
      await authenticationService.checkEmail(email)
      toast.success('Um código de autenticação foi enviado para o seu e-mail.')
      setShowOptInput(true)
    } catch (error: any) {
      console.log(error)
      toast.error(
        'Ocorreu um erro ao realizar essa operação, tente mais tarde!',
      )
    } finally {
      setLoading(false)
    }
  }

  return {
    loading: { loading, setLoading },
    form,
    showOptInput: { showOptInput, setShowOptInput },
    checkEmail,
  }
}
