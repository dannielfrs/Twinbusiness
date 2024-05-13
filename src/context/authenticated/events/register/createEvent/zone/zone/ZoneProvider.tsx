import { useContext, useEffect, useState } from 'react'
import { ZoneContext } from './ZoneContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess, closeAlert } from '@/utilities/alerts'
import { getDataService, createItemService, getItemService, updateItemService, deleteItemService, validateTicketService } from '@/services/axios/authenticated/events/register/createEvent/zone/zone'
import { deleteZone } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const ZoneProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { setActiveStep, uuidEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])

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

  const createItem = async (data: any, color: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event', uuidEvent)
      form.append('name', data.name)
      form.append('color', '#' + color)
      form.append('quota', data.quota)
      form.append('number', data.number)
      form.append('port_int', data.port_int)
      form.append('event_type', data.event_type)
      form.append('include', data.include)
      form.append('price', data.price)
      const response = await createItemService(form)
      getData()
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

  const updateItem = async (data: any, color: string, id: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('name', data.name)
      form.append('color', '#' + color)
      form.append('quota', data.quota)
      form.append('number', data.number)
      form.append('port_int', data.port_int)
      form.append('event_type', data.event_type)
      form.append('include', data.include)
      form.append('price', data.price)
      const response = await updateItemService(form, id)
      getData()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteItem = async (id: string) => {
    try {
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

  const validateTicket = async () => {
    try {
      const form = new FormData()
      const response = await validateTicketService(form)
      if (response.data.record) setActiveStep(10)
      else {
        alertError('', 'La zona debe tener al menos un boleto')
        setTimeout(() => {
          closeAlert()
        }, 2000)
      }
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ZoneContext.Provider value={{
      loading,
      data,
      createItem,
      getItem,
      updateItem,
      deleteItem,
      validateTicket
    }}>
      {children}
    </ZoneContext.Provider>
  )
}
