import { Spot } from '../../../../../domain/spot'
import { Card, CardHeader, CardContent } from '../../../../../@components/ui'

type ComponentProps = {
  spot: Spot
}

export function CardItem(props: ComponentProps) {
  const { spot } = props
  return (
    <Card className="w-[190px] p-2 rounded-2xl">
      <CardHeader className="p-0 rounded-none">
        <img src={spot.thumbnail} alt="spot image" className="rounded-none" />
      </CardHeader>
      <CardContent className="flex flex-col p-2">
        <strong className="text-xs text-gray-600 ">
          {' '}
          Nome da companhia: <span className="">{spot.name}</span>
        </strong>
        <strong className="text-xs text-gray-600  my-1">
          Techs: <span>{spot.techs.toString()}</span>{' '}
        </strong>
        <strong className="text-xs text-gray-600 ">
          {' '}
          Preço: {spot.price > 0 ? `R$ ${spot.price.toFixed(2)}` : 'Free'}
        </strong>
      </CardContent>
    </Card>
  )
}
