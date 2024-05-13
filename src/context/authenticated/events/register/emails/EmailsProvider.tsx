import { useEffect, useState } from 'react'
import { EmailsContext } from './EmailsContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, createItemService, getItemService, updateItemService, deleteItemService } from '@/services/axios/authenticated/events/email'

export const EmailsProvider = ({
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

  const createItem = async (email: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('email', email)
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

  const updateItem = async (email: string, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('email', email)
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
    <EmailsContext.Provider value={{
      loading,
      data,
      savedSuccess,
      createItem,
      getItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </EmailsContext.Provider>
  )
}
