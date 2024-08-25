import {
  Loader,
  Button,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationNext,
  EmptyData,
} from '../../../../@components/ui'
import { CardItem } from './components/card-item'
import { useSpotHooks } from '../shared/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Ui() {
  const { loadSpots, loading, data } = useSpotHooks()
  const navigate = useNavigate()
  useEffect(() => {
    loadSpots({})
  }, [loadSpots])

  return (
    <div className="w-2/5 p-4 bg-white  flex flex-col items rounded-md ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="h-96 grid  grid-cols-3  gap-x-12">
            {data.length > 0 ? (
              data.map((item) => <CardItem spot={item} key={item.id} />)
            ) : (
              <EmptyData />
            )}
          </div>
          <div className="my-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <Button
            className="bg-red-600 hover:bg-red-400"
            onClick={() => navigate('/register')}>
            {' '}
            Criar Spot
          </Button>
        </>
      )}
    </div>
  )
}
