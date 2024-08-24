import { Wrapper } from '../../@components/ui'

export function PageNotFound() {
  return (
    <Wrapper>
      <div className="w-96 bg-white p-20 rounded-md">
        <h2 className="font-bold"> Página não encontrada {':('}</h2>
      </div>
    </Wrapper>
  )
}
