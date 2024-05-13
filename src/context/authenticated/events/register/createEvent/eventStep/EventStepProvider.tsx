import { useContext, useEffect, useState } from 'react'
import { EventStepContext } from './EventStepContext'
import { alertError, alertLoading, alertSuccess, closeAlert } from '@/utilities/alerts'
import { getStepService, backStepService, } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { CompanyStepContext } from '@/context/authenticated/events/register/companyStep/CompanyStepContext'
import { useRouter } from 'next/navigation'

export const EventStepProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const { activeStepCompany, backStepCompany } = useContext(CompanyStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [activeStepEvent, setActiveStepEvent] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [from15, setFrom15] = useState<boolean>(false)
  const [uuidEvent, setUuidEvent] = useState<string>('')
  const [zoneId, setZoneId] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    if (activeStepCompany >= 5) {
      getStepEvent()
      if (activeStepCompany === 7) {
        backStepCompany()
        // alertSuccess('', 'Ya has creado tu evento se te redireccionará', false)
        // setTimeout(() => {
        //   router.push('/system/profile/personal')
        //   closeAlert()
        // }, 3000)
      }
    }
    else {
      setActiveStepEvent(null)
      setActiveStep(null)
    }
  }, [activeStepCompany])

  useEffect(() => {
    if (activeStepEvent === 0) setActiveStep(5)
    if (activeStepEvent === 1 && !from15) setActiveStep(6)
    else if (activeStepEvent === 1 && from15) setActiveStep(14)
    if (activeStepEvent === 2) setActiveStep(15)
  }, [activeStepEvent])

  const getStepEvent = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getStepService(form)
      setActiveStepEvent(response.data.records.step)
      setUuidEvent(response.data.records.uuid)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const backStepEvent = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await backStepService(form)
      getStepEvent()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const backStep = () => {
    setActiveStep(activeStep && activeStep - 1)
  }

  const backStep3 = () => {
    setActiveStep(activeStep && activeStep - 3)
  }

  return (
    <EventStepContext.Provider value={{
      loading,
      activeStep,
      setActiveStep,
      getStepEvent,
      backStepEvent,
      backStep3,
      uuidEvent,
      backStep,
      setFrom15,
      zoneId,
      setZoneId
    }}>
      {children}
    </EventStepContext.Provider>
  )
}
