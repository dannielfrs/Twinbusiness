import { useEffect, useState } from 'react'
import { PackageContext } from './PackageContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, createItemService, getItemService, updateItemService, deleteItemService } from '@/services/axios/authenticated/events/package'

export const PackageProvider = ({
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

  const createItem = async (name: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('name', name)
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

  const updateItem = async (name: string, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('name', name)
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
    <PackageContext.Provider value={{
      loading,
      data,
      savedSuccess,
      createItem,
      getItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </PackageContext.Provider>
  )
}
