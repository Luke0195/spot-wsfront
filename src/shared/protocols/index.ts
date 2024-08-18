import { PropsWithChildren } from 'react'

export type ComponentProps = PropsWithChildren

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>
