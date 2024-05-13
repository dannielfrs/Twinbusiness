import { useEffect, useState } from 'react'
import { DateContext } from './DateContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, createItemService, deleteItemService } from '@/services/axios/authenticated/events/register/createEvent/date'

export const DateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [savedSuccess, setsavedSuccess] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getDataService(form)
      setData(response.data.record.dates)
      return response.data.record.dates
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveData = async (data: any) => {
    try {
      data.forEach(async (item: any) => {
        try {
          if (item.start_date && item.end_date && item.start_time && item.end_time && item.id === '') {
            await createItem(item)
            setsavedSuccess(true)
          }
        } catch (error: any) {
          throw new Error(error)
        }
      })
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const createItem = async (data: any) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('start_date', data.start_date)
      form.append('start_time', data.start_time)
      form.append('end_date', data.end_date)
      form.append('end_time', data.end_time)
      const response = await createItemService(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteItem = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'delete')
      const response = await deleteItemService(form, id)
      getData()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DateContext.Provider value={{
      loading,
      data,
      saveData,
      createItem,
      deleteItem,
      savedSuccess
    }}>
      {children}
    </DateContext.Provider>
  )
}
