import { useState } from 'react'
import { SalesPhaseContext } from './SalesPhaseContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { salesPhaseService } from '@/services/axios/authenticated/events/register/createEvent/salesPhase'
import { formatDateToMiddleDash } from '@/utilities/formatters'

export const SalesPhaseProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})

  const saveItem = async (data: any, dates: any[]) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('start_time', data.start_time)
      form.append('end_time', data.end_time)
      if (dates[1] === null) {
        form.append('start_date', formatDateToMiddleDash(dates[0]))
        form.append('end_date', formatDateToMiddleDash(dates[0]))
      } else {
        form.append('start_date', formatDateToMiddleDash(dates[0]))
        form.append('end_date', formatDateToMiddleDash(dates[1]))
      }
      const response = await salesPhaseService(form)
      return response.data
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SalesPhaseContext.Provider value={{
      loading,
      data,
      saveItem
    }}>
      {children}
    </SalesPhaseContext.Provider>
  )
}
