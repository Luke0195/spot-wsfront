import { ComponentProps } from '../../shared/protocols'

export function Content(props: ComponentProps) {
  return (
    <div className="w-1/4 p-6 bg-white  flex flex-col items-center items rounded-md ">
      {props.children}
    </div>
  )
}
