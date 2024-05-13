import { useContext, useEffect, useState } from 'react'
import { Step16Context } from './Step16Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getStep16Service, setStep16Service } from '@/services/axios/authenticated/events/register/createEvent/createEvent'

interface Data {
  recharge_system: string;
  ticketing_system: string;
  review: string;
  terms: { id: string; title: string; description: string }[];
}

export const Step16Provider = ({ children }: { children: React.ReactNode }) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Data | undefined>()
  const [savingData, setSavingData] = useState<boolean>(false)
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const response = await getStep16Service()
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
      setSavingData(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('review', data.review ? '1' : '0')
      form.append('ticketing_system', data.ticketing_system ? '1' : '0')
      form.append('recharge_system', data.recharge_system ? '1' : '0')
      const response = await setStep16Service(form)
      setSavedSuccess(true)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setSavingData(false)
    }
  }

  return (
    <Step16Context.Provider value={{
      loading,
      data,
      setData,
      saveData,
      savingData,
      savedSuccess
    }}>
      {children}
    </Step16Context.Provider>
  )
}
