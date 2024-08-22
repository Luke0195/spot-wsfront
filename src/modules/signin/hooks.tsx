import React from 'react'
import {
  schema,
  authenticationService,
  FormData,
  MfaAuthenticationParams,
} from './index'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { SetStateAction } from '../../shared/protocols'

export interface AuthenticationHookProps {
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
  authenticate: (code: string) => Promise<any>
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
      setSelectedTab('signin-password')
      toast.success('Um código de autenticação foi enviado para o seu e-mail.')
      localStorage.setItem('aircnc@mail', email)
    } catch (error: any) {
      console.log(error)
      toast.error(
        'Ocorreu um erro ao realizar essa operação, tente mais tarde!',
      )
    } finally {
      setLoading(false)
      console.log(selectedTab)
    }
  }
  const authenticate = async (code: string): Promise<any> => {
    const email =
      localStorage.getItem('aircnc@mail') !== null
        ? (localStorage.getItem('aircnc@mail') as string)
        : ''
    try {
      const payload: MfaAuthenticationParams = {
        code,
        email,
      }
      const response = await authenticationService.auth(payload)
      console.log(response)
    } catch (error) {
      console.log(error)
      toast.error('Ocorreu um erro ao realizar a autenticação')
    }
  }

  return {
    form,
    loading: { loading, setLoading },
    selectedTab: { selectedTab, setSelectedTab },
    checkEmail,
    authenticate,
  }
}
