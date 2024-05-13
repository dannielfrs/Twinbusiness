import { useContext, useEffect, useState } from 'react'
import { Step8Context } from './Step8Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { formatTime } from '@/utilities/formatters'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getStep8Service, setStep8Service } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { TicketStep1Context } from '../zone/ticket/TicketStep1Context'

interface table {
  id: string;
  text: string;
  selected: boolean;
}

export const Step8Provider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { getStepEvent, setActiveStep } = useContext(EventStepContext)
  const { ticketId } = useContext(TicketStep1Context)
  
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [eventTypeOptions, setEventTypeOptions] = useState([])

  useEffect(() => {
    if(ticketId !== '')
      getStep8()
  }, [])

  const getStep8 = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('ticket', ticketId)
      const response = await getStep8Service(form)
      const form1 = new FormData()
      form1.append('style', 'select')
      form1.append('catalogs[0][name]', 'sale_point')
      let response1 = await postCatalogsService(form1)
      
      const dataArray: Array<table> = [];
      let flag = false
      // @ts-ignore 
      response1.data.records.sale_point.map((item1) => {
        flag = false
        
        // @ts-ignore 
        response.data.records.salePoints.map((item2) => {
          if(item1.id == item2.id){
            dataArray.push(item2)
            flag = true;
          }
          if(flag)
            return
        })
        if(flag)
          return
        dataArray.push(item1)
      })
      response.data.records.salePoints = dataArray;
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setStep8 = async (data: any, pay: string, free: string, vip: string, payId: string, freeId: string, vipId: string) => {
      try {
        let aux = 0;
        setLoading(true)
        const form = new FormData()
        form.append('ticket', ticketId)
        form.append('buy_maximum', data.buy_maximum)
        form.append('buy_minimum', data.buy_minimum)
        form.append('number_issued', data.number_issued)
        if(pay){
          form.append(`sale_point[${aux}][id]`, payId )
          aux ++
        }
        if(free){
          form.append(`sale_point[${aux}][id]`, freeId )
          aux ++
        }
        if(vip){
          form.append(`sale_point[${aux}][id]`, vipId )
        }
        const response = await setStep8Service(form)
        // getStepEvent()
        setActiveStep(7)
        return response
      } catch (error: any) {
        alertError('Error', error)
      } finally {
        setLoading(false)
      }
    }

  return (
    <Step8Context.Provider value={{
      loading,
      data,
      eventTypeOptions,
      setStep8
    }}>
      {children}
    </Step8Context.Provider>
  )
}
