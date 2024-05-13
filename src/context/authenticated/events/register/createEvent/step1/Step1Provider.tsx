import { useContext, useEffect, useState } from 'react'
import { Step1Context } from './Step1Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { formatTime } from '@/utilities/formatters'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getStep1Service, setStep1Service } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const Step1Provider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { getStepEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [eventTypeOptions, setEventTypeOptions] = useState([])

  useEffect(() => {
    getEventTypeOptions()
    getStep1()
  }, [])

  const getEventTypeOptions = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'event_type')
      const response = await postCatalogsService(form)
      setEventTypeOptions(response.data.records.event_type)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getStep1 = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getStep1Service(form)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setStep1 = async (data: any) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event_type', data.type)
      form.append('name', data.name)
      form.append('is_in_person', data.is_in_person ? '1' : '0')
      form.append('is_virtual', data.is_virtual ? '1' : '0')
      form.append('where_is', data.place)
      form.append('date', data.date)
      form.append('start_time', formatTime(data.start_time))
      form.append('end_time', formatTime(data.end_time))
      form.append('is_unique', data.is_unique)
      const response = await setStep1Service(form)
      getStepEvent()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Step1Context.Provider value={{
      loading,
      data,
      eventTypeOptions,
      setStep1
    }}>
      {children}
    </Step1Context.Provider>
  )
}
