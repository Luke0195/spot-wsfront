type FieldErrorProps = {
  mesasge?: string
}

export function FieldError(props: FieldErrorProps) {
  return (
    <span className="block my-1 text-red-500 text-sm"> {props.mesasge}</span>
  )
}
