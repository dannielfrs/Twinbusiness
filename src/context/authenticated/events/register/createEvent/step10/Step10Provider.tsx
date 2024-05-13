import { useContext, useEffect, useState } from 'react'
import { Step10Context } from './Step10Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess, closeAlert } from '@/utilities/alerts'
import { getStep10Service, setStep10Service, getImageValidation } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const Step10Provider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep, uuidEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [editId, setEditId] = useState('')

  useEffect(() => {
    getStep10()
  }, [])

  const getStep10 = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event', uuidEvent)
      const response = await getStep10Service(form)
      setData(response.data.record)
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setStep10 = async () => {
    try {
      alertLoading('')
      const response = await getImageValidation()
      if (response.data.record) {
        setActiveStep(13)
        closeAlert()
      }
      else alertError('Error', 'Todos los boletos deben tener imagen')
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Step10Context.Provider value={{
      loading,
      data,
      editId,
      setEditId,
      getStep10,
      setStep10,
    }}>
      {children}
    </Step10Context.Provider>
  )
}
