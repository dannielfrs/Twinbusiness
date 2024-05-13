import { useContext, useEffect, useState } from 'react'
import { TicketPreviewContext } from './TicketPreviewContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getTicketService } from '@/services/axios/authenticated/events/register/createEvent/zone/ticket'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { Step10Context } from '../../step10/Step10Context'

export const TicketPreviewProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(true)
  const { editId } = useContext(Step10Context)
  const [data, setData] = useState({})

  useEffect(() => {
    getTicket()
  }, [])

  const getTicket = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('ticket', editId)
      const response = await getTicketService(form)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TicketPreviewContext.Provider value={{
      loading,
      data
    }}>
      {children}
    </TicketPreviewContext.Provider>
  )
}
