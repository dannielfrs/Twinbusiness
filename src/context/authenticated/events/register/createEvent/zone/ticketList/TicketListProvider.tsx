import { useContext, useEffect, useState } from 'react'
import { TicketListContext } from './TicketListContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService, getTicketService } from '@/services/axios/authenticated/events/register/createEvent/zone/ticket'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const TicketListProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep, uuidEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event', uuidEvent)
      const response = await getDataService(form)
      setData(response.data.record)
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TicketListContext.Provider value={{
      loading,
      data
    }}>
      {children}
    </TicketListContext.Provider>
  )
}
