import { useContext, useEffect, useState } from 'react'
import { Step11Context } from './Step11Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getStep11Service, setStep11Service } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { Step10Context } from '../step10/Step10Context'

export const Step11Provider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep } = useContext(EventStepContext)
  const { editId } = useContext(Step10Context)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [eventTypeOptions, setEventTypeOptions] = useState([])

  useEffect(() => {
    // getEventTypeOptions()
    getStep11()
  }, [])

  // const getEventTypeOptions = async () => {
  //   try {
  //     setLoading(true)
  //     const form = new FormData()
  //     form.append('style', 'select')
  //     form.append('ticket', 'b115c308e-4726-450c-8116f-6d38503b6044')
  //     const response = await postCatalogsService(form)
  //     setEventTypeOptions(response.data.records.event_type)
  //     return response
  //   } catch (error: any) {
  //     alertError('Error', error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const getStep11 = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('ticket', editId)
      const response = await getStep11Service(form)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setStep11 = async (file: any) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('ticket', editId)
      form.append('image', file)
      const response = await setStep11Service(form)
      setActiveStep(12)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Step11Context.Provider value={{
      loading,
      data,
      eventTypeOptions,
      setStep11
    }}>
      {children}
    </Step11Context.Provider>
  )
}
