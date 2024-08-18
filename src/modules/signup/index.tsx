import { Wrapper } from '../../@components/ui/wrapper'
export function Ui() {
  return (
    <Wrapper>
      <div className="w-2/5 rounded-md bg-white p-8 my-2 shadow-inner flex flex-col  justify-center ">
        <h2 className="text-gray-700 font-bold text-center">
          Preencha os campos para realizar seu cadastro
        </h2>
        <form>
          <div className="my-4">
            <label className="font-semibold text-sm py-2">E-mail*</label>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
