import { ComponentProps } from '../../shared/protocols'
import logo from '../../assets/logo.svg'
export function Wrapper(props: ComponentProps) {
  return (
    <div className="w-screen h-screen bg-banner bg-cover bg-right-bottom flex flex-col items-center justify-center">
      <div className="my-2">
        <img src={logo} alt="aircnc logo" />
      </div>
      {props.children}
    </div>
  )
}
