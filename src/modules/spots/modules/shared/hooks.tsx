import { useState, useCallback } from 'react'
import { spotService } from '../shared/services'
import { mapToDomain } from './mappers'
import { Spot } from '../../../../domain/spot'
import { SpotApiResponse } from './interface'

interface UseSpotHook {
  loading: boolean
  data: Spot[]
  loadSpots(params: any): Promise<void>
}

export function useSpotHooks(): UseSpotHook {
  const [data, setData] = useState<Spot[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const loadSpots = useCallback(async () => {
    setLoading(true)
    try {
      const { content } = await spotService.getSpots({})
      setData(mapToDomain(content as SpotApiResponse[]))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    data,
    loadSpots,
  }
}
