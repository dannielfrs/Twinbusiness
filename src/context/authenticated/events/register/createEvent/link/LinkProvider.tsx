import { useEffect, useState } from 'react'
import { LinkContext } from './LinkContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, createItemService, updateItemService, deleteItemService } from '@/services/axios/authenticated/events/register/createEvent/link'

export const LinkProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const eventId = 'a53a8129-fe96-4039-bba4-068239f24064'

  const getData = async (type: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event', eventId)
      const response = await getDataService(form, type)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const createItem = async (url: string, type: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('type', type)
      form.append('url', url)
      const response = await createItemService(form)
      getData(type)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const updateItem = async (url: string, id: string, type: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('url', url)
      const response = await updateItemService(form, id)
      getData(type)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteItem = async (id: string, type: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'delete')
      const response = await deleteItemService(form, id)
      getData(type)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LinkContext.Provider value={{
      loading,
      data,
      getData,
      createItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </LinkContext.Provider>
  )
}
