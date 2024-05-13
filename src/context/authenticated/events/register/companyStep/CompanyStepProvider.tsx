import { useEffect, useState } from 'react'
import { CompanyStepContext } from './CompanyStepContext'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getStepService, backStepService, } from '@/services/axios/authenticated/events/company'

export const CompanyStepProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [activeStepCompany, setActiveStepCompany] = useState<number>(0)

  useEffect(() => {
    getStepCompany()
  }, [])

  const getStepCompany = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getStepService(form)
      setActiveStepCompany(response.data.records.step)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const backStepCompany = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await backStepService(form)
      getStepCompany()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const backToCompany = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      await backStepService(form)
      await backStepService(form)
      await backStepService(form)
      getStepCompany()
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CompanyStepContext.Provider value={{
      loading,
      activeStepCompany,
      getStepCompany,
      backStepCompany,
      backToCompany,
    }}>
      {children}
    </CompanyStepContext.Provider>
  )
}
