import { useContext, useEffect, useState } from 'react'
import { Step9Context } from './Step9Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getStep9Service, setStep9Service } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

interface table {
  id: string
  text: string
  selected: boolean
}

export const Step9Provider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { setActiveStep } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [paymentMethodOptions, setPaymentMethodOptions] = useState([])

  useEffect(() => {
    getOptions()
    getStep9()
  }, [])

  const getOptions = async () => {
    try {
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'paymenth_method')
      const response = await postCatalogsService(form)
      setPaymentMethodOptions(response.data.records.paymenth_method)
      return response.data
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getStep9 = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'paymenth_method')
      const response1 = await postCatalogsService(form)
      const response2 = await getStep9Service(form)
      const dataArray: Array<table> = [];
      let flag = false
      // @ts-ignore 
      response1.data.records.paymenth_method.map((item1) => {
        flag = false
        // @ts-ignore 
        response2.data.event.map((item2) => {
          if (item1.id == item2.id) {
            dataArray.push(item2)
            flag = true;
          }
          if (flag)
            return
        })
        if (flag)
          return
        dataArray.push(item1)
      })
      setData(dataArray)
      return dataArray
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setStep9 = async (selectedOptions: any[]) => {
    try {
      setLoading(true)
      const form = new FormData()
      selectedOptions.forEach((item, index) => {
        form.append(`payment_method[${index}][id]`, item)
      })
      const response = await setStep9Service(form)
      setActiveStep(7)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Step9Context.Provider value={{
      loading,
      data,
      paymentMethodOptions,
      setStep9
    }}>
      {children}
    </Step9Context.Provider>
  )
}
