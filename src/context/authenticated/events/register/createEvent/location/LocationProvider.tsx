import { useEffect, useState } from 'react'
import { LocationContext } from './LocationContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { createItemService, getItemService } from '@/services/axios/authenticated/events/register/createEvent/location'

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false)
  const [savedError, setSavedError] = useState<boolean>(false)

  useEffect(() => {
    getItem()
  }, [])

  const createItem = async (address: string, lat: string, lng: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('address', address)
      form.append('lat', lat)
      form.append('lng', lng)
      const response = await createItemService(form)
      setSavedSuccess(true)
      return response.data
    } catch (error: any) {
      setSavedError(true)
      // alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getItem = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getItemService(form)
      setData(response.data.record)
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LocationContext.Provider value={{
      loading,
      data,
      createItem,
      savedSuccess,
      savedError,
      setSavedError
    }}>
      {children}
    </LocationContext.Provider>
  )
}
