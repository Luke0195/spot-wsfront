import React from 'react'
import { schema, authenticationService, FormData } from './index'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { SetStateAction } from '../../shared/protocols'

type AuthenticationHookProps = {
  loading: {
    loading: boolean
    setLoading: SetStateAction<boolean>
  }
  selectedTab: {
    selectedTab: string
    setSelectedTab: SetStateAction<string>
  }
  form: UseFormReturn<FormData, any, undefined>
  checkEmail: () => Promise<void>
}

export function useAuthenticationHook(): AuthenticationHookProps {
  const [selectedTab, setSelectedTab] = React.useState<string>('signin-email')
  const [loading, setLoading] = React.useState<boolean>(false)
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
      setSelectedTab('signin-password')
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
    form,
    loading: { loading, setLoading },
    selectedTab: { selectedTab, setSelectedTab },
    checkEmail,
  }
}
