import { useEffect, useState } from 'react'
import { RowsContext } from './RowsContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, saveDataService } from '@/services/axios/authenticated/events/register/createEvent/zone/rows'

export const RowsProvider = ({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any[]>([])
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false)

  useEffect(() => {
    getData(id)
  }, [])

  const getData = async (id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('zone', id)
      const response = await getDataService(form)
      setData(response.data.record)
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveData = async (rows: any[], id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('zone', id)
      rows.forEach((item: any, index: number) => {
        form.append(`line[${index}][name]`, item.name)
        form.append(`line[${index}][quantity]`, item.quantity)
      })
      const response = await saveDataService(form)
      setSavedSuccess(true)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <RowsContext.Provider value={{
      loading,
      data,
      saveData,
      savedSuccess
    }}>
      {children}
    </RowsContext.Provider>
  )
}
