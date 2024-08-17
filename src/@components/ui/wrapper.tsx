import { ComponentProps } from '../../shared/protocols'

export function Wrapper(props: ComponentProps) {
  return (
    <div className="w-screen h-screen bg-banner bg-cover bg-right-bottom flex flex-col items-center justify-center">
      {props.children}
    </div>
  )
}
