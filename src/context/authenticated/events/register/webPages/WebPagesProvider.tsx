import { useEffect, useState } from 'react'
import { WebPagesContext } from './WebPagesContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, createItemService, getItemService, updateItemService, deleteItemService } from '@/services/axios/authenticated/events/webPage'

export const WebPagesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])
  const [savedSuccess, setSavedSuccess] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getDataService(form)
      setData(response.data.records)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const createItem = async (web: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('web', web)
      const response = await createItemService(form)
      setSavedSuccess(true)
      getData()
      setTimeout(() => {
        setSavedSuccess(false)
      }, 2000)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getItem = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getItemService(form, id)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const updateItem = async (web: string, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('web', web)
      const response = await updateItemService(form, id)
      setSavedSuccess(true)
      getData()
      setTimeout(() => {
        setSavedSuccess(false)
      }, 2000)
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
    <WebPagesContext.Provider value={{
      loading,
      data,
      savedSuccess,
      createItem,
      getItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </WebPagesContext.Provider>
  )
}
