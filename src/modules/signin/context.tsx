import { createContext } from 'react'
import { AuthenticationHookProps } from './hooks'

const Context = createContext({} as AuthenticationHookProps)

export { Context }
