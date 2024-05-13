import { useContext, useEffect, useState } from 'react'
import { TicketStep1Context } from './TicketStep1Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getStep1Service, setStep1Service } from '@/services/axios/authenticated/events/register/createEvent/zone/ticket'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const TicketStep1Provider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep, zoneId } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [ticketTypeOptions, setTicketTypeOptions] = useState([])
  const [ticketId, setTicketId] = useState('')
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    getTicketTypeOptions()
    if (ticketId !== '')
      getStep1()
  }, [refresh])

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

  const getStep1 = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('ticket', ticketId)
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
      form.append('zone', zoneId)
      form.append('ticket_type', data.ticket_type)
      form.append('name', data.name)
      form.append('include', data.include)
      form.append('restrictions', data.restrictions)
      const response = await setStep1Service(form)
      setTicketId(response.data.records.uuid)
      setActiveStep(9)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TicketStep1Context.Provider value={{
      loading,
      data,
      ticketTypeOptions,
      ticketId,
      setRefresh,
      setStep1
    }}>
      {children}
    </TicketStep1Context.Provider>
  )
}
