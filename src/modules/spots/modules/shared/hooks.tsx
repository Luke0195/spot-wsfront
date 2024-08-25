import { useState, useCallback } from 'react'
import { spotService, schema, SpotApiResponse, FormData, mapToDomain } from './'
import { Spot } from '../../../../domain/spot'
import { useForm, UseFormReturn } from 'react-hook-form'
import { toast } from 'sonner'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

export interface UseSpotHook {
  loading: boolean
  data: Spot[]
  loadSpots(params: any): Promise<void>
  form: UseFormReturn<FormData, any, undefined>
  createSpot(data: FormData): Promise<void>
}

export function useSpotHooks(): UseSpotHook {
  const navigation = useNavigate()
  const [data, setData] = useState<Spot[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<FormData>({
    defaultValues: { name: '', techs: '', thumbnail: '', price: '' },
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema()),
  })

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

  const createSpot = async (data: FormData): Promise<void> => {
    setLoading(true)
    try {
      const response = await spotService.createSpot(data)
      if (response.statusCode === 201) {
        toast.success('Spot criado com sucesso')
        form.reset()
        navigation('/dashboard')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    data,
    loadSpots,
    form,
    createSpot,
  }
}
