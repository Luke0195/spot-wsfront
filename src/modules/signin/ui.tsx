import logo from '../../assets/logo.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../@components/ui'
import { useAuthenticationHook, CodeValidation, Form } from './index'

export function Ui() {
  const { checkEmail, form, loading } = useAuthenticationHook()
  const { control, formState, handleSubmit } = form
  console.log(formState.errors.email?.message)
  return (
    <div className="w-screen h-screen bg-banner bg-cover bg-right-bottom flex flex-col items-center justify-center">
      <div className="w-2/5 flex flex-col items-center  ">
        <img src={logo} alt="aircnc logo" />
        <div className="w-3/4 rounded-md bg-white p-8 my-2 shadow-inner flex flex-col  justify-center">
          <p className="w-96 text-left">
            Ofereça <strong> spots</strong> para programadores e encontre{' '}
            <strong> talentos</strong> para sua empresa.
          </p>
          <Tabs defaultValue="register" className="   ">
            <TabsList className="my-4 w-full ">
              <TabsTrigger value="signin-email" className="flex-1">
                {' '}
                Validar E-mail
              </TabsTrigger>
              <TabsTrigger value="signin-password" className="flex-1">
                {' '}
                Autenticar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signin-email">
              <Form />
            </TabsContent>
            <TabsContent value="signin-password">
              <CodeValidation />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
