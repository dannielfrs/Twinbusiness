import { useContext, useEffect, useState } from 'react'
import { MapSponsorsContext } from './MapSponsorsContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getStep2Service, setStep2Service } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
      
export const MapSponsorsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep, getStepEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getStep2Service(form)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveData = async (data: any) => {
    try {
      const form = new FormData()
      form.append('map', data.map)
      form.append('sponsor', data.sponsor)
      if (data.restriction_age) form.append('restriction_age', data.restriction_age)
      if (data.additional_details) form.append('additional_details', data.additional_details)
      const response = await setStep2Service(form)
      // setActiveStep(15)
      getStepEvent()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <MapSponsorsContext.Provider value={{
      loading,
      data,
      saveData
    }}>
      {children}
    </MapSponsorsContext.Provider>
  )
}
