import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Button,
  Loader,
} from '../../../@components/ui'
import { useState, useContext } from 'react'
import { Context } from '../context'

export function CodeValidation() {
  const {
    authenticate,
    loading: { loading },
  } = useContext(Context)
  const [value, setValue] = useState('')

  return (
    <div className="w-full flex flex-col ">
      <div className="my-4 flex  flex-col justify-center items-center">
        <strong className="text-sm my-2">
          Informe a código enviado no seu e-mail
        </strong>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        className=" bg-red-500 font-bold rounded-sm hover:bg-red-400"
        onClick={async () => await authenticate(value)}>
        {loading ? <Loader /> : 'Logar'}
      </Button>
    </div>
  )
}
