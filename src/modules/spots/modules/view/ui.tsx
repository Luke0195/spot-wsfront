import { Loader } from '../../../../@components/ui'
import { CardItem } from './components/card-item'
import { useSpotHooks } from '../shared/hooks'
import { useEffect } from 'react'
export function Ui() {
  const { loadSpots, loading, data } = useSpotHooks()

  useEffect(() => {
    loadSpots({})
  }, [loadSpots])

  return (
    <div className="w-2/5 p-4 bg-white  flex flex-col items rounded-md ">
      {loading ? (
        <Loader />
      ) : (
        data.map((item) => <CardItem spot={item} key={item.id} />)
      )}
    </div>
  )
}
