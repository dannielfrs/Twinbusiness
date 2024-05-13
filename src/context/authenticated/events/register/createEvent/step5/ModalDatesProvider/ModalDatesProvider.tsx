import { useContext, useEffect, useState } from 'react'
import { ModalDatesContext } from './ModalDatesContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
// import { getModalDatesService, setModalDatesService } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const ModalDatesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { getStepEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [ticketTypeOptions, setTicketTypeOptions] = useState([])

  useEffect(() => {
    getTicketTypeOptions()
    getModalDates()
  }, [])

  const getTicketTypeOptions = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'ticket_type')
      const response = await postCatalogsService(form)
      setTicketTypeOptions(response.data.records.ticket_type)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getModalDates = async () => {
    // try {
      // setLoading(true)
      // const form = new FormData()
      // const response = await getModalDatesService(form)
      // setData(response.data.records)
      // return response.data.records
    // } catch (error: any) {
    //   alertError('Error', error)
    // } finally {
    //   setLoading(false)
    // }
  }

  const setModalDates = async (data: any) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event_type', data.event_type)
      form.append('name', data.name)
      form.append('is_in_person', data.is_in_person ? '1' : '0')
      form.append('is_virtual', data.is_virtual ? '1' : '0')
      form.append('where_is', data.where_is)
      form.append('date', data.date)
      form.append('start_time', data.start_time)
      form.append('end_time', data.end_time)
      form.append('is_unique', data.is_unique)
      // const response = await setModalDatesService(form)
      // getStepEvent()
      // return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ModalDatesContext.Provider value={{
      loading,
      data,
      ticketTypeOptions,
      setModalDates
    }}>
      {children}
    </ModalDatesContext.Provider>
  )
}
