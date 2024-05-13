import { useContext, useEffect, useState } from 'react'
import { WebEventContext } from './WebEventContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { saveDocumentService } from '@/services/axios/authenticated/events/document'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { CompanyStepContext } from '@/context/authenticated/events/register/companyStep/CompanyStepContext'
import {
  setFirstStepService,
  getSecondStepService,
  setSecondStepService,
  getThirdStepService,
  setThirdStepService,
  getFourthStepService,
  setFourthStepService,
  getFifthStepService,
  setFifthStepService
} from '@/services/axios/authenticated/events/company'

export const WebEventProvider = ({ children, }: { children: React.ReactNode }) => {

  const { activeStepCompany, getStepCompany } = useContext(CompanyStepContext)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [dataSecondStep, setdataSecondStep] = useState({})
  const [dataThirdStep, setdataThirdStep] = useState({})
  const [dataFourthStep, setdataFourthStep] = useState({})
  const [dataFifthStep, setdataFifthStep] = useState({})

  useEffect(() => {
    if (activeStepCompany === 1) getSecondStep()
    if (activeStepCompany === 2) getThirdStep()
    if (activeStepCompany === 3) getFourthStep()
    if (activeStepCompany === 4) getFifthStep()
  }, [activeStepCompany])

  const setFirstStep = async (membershipId: string) => {
    if (activeStepCompany > 0) {
      router.push('/system/events/register')
    } else {
      try {
        setLoading(true)
        const form = new FormData()
        form.append('_method', 'put')
        form.append('membership', membershipId)
        const response = await setFirstStepService(form)
        getStepCompany()
        router.push('/system/events/register')
        return response
      } catch (error: any) {
        alertError('Error', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const getSecondStep = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getSecondStepService(form)
      setdataSecondStep(response.data.records)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setSecondStep: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('terms', data.terms ? '1' : '0')
      form.append('policy', data.policy ? '1' : '0')
      const response = await setSecondStepService(form)
      getStepCompany()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getThirdStep = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getThirdStepService(form)
      setdataThirdStep(response.data.records)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setThirdStep = async (data: any, companyId: string) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('company_type', companyId)
      form.append('company_name', data.company_name)
      form.append('tax_identification_number', data.tax_identification_number)
      form.append('name_legal_representative', data.name_legal_representative)
      form.append('have_more_branches', data.have_more_branches)
      const response = await setThirdStepService(form)
      getStepCompany()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getFourthStep = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getFourthStepService(form)
      setdataFourthStep(response.data.records)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setFourthStep: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('tradename', data.tradename)
      form.append('street', data.street)
      form.append('number', data.number)
      form.append('colony', data.colony)
      form.append('postal_code', data.postal_code)
      form.append('state', data.state)
      if (data.continuous_operating_hours_start && data.continuous_operating_hours_start !== 'Invalid Date') form.append('continuous_operating_hours_start', data.continuous_operating_hours_start)
      if (data.continuous_operating_hours_end && data.continuous_operating_hours_end !== 'Invalid Date') form.append('continuous_operating_hours_end', data.continuous_operating_hours_end)
      if (data.intermittent_operating_hours_first_start && data.intermittent_operating_hours_first_start !== 'Invalid Date') form.append('intermittent_operating_hours_first_start', data.intermittent_operating_hours_first_start)
      if (data.intermittent_operating_hours_first_end && data.intermittent_operating_hours_first_end !== 'Invalid Date') form.append('intermittent_operating_hours_first_end', data.intermittent_operating_hours_first_end)
      if (data.intermittent_operating_hours_second_start && data.intermittent_operating_hours_second_start !== 'Invalid Date') form.append('intermittent_operating_hours_second_start', data.intermittent_operating_hours_second_start)
      if (data.intermittent_operating_hours_second_end && data.intermittent_operating_hours_second_end !== 'Invalid Date') form.append('intermittent_operating_hours_second_end', data.intermittent_operating_hours_second_end)
      const response = await setFourthStepService(form)
      getStepCompany()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getFifthStep = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await getFifthStepService(form)
      setdataFifthStep(response.data.records)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const setFifthStep = async (data: any, selectedOptions: any[]) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('_method', 'put')
      form.append('promoter_type', data.promoter_type)
      form.append('send_packages', data.send_packages)
      selectedOptions.forEach((item, index) => {
        form.append(`sale_option[${index}][id]`, selectedOptions[index])
      })
      const response = await setFifthStepService(form)
      getStepCompany()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveDocument = async (type: string, document: File) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('type', type)
      form.append('document', document)
      const response = await saveDocumentService(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getCompanyType = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'company_type')
      const response = await postCatalogsService(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getCountryOptions = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'country')
      const response = await postCatalogsService(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getStateOptions = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'state')
      const response = await postCatalogsService(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getSaleOptions = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'sale_option')
      const response = await postCatalogsService(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <WebEventContext.Provider value={{
      loading,
      dataSecondStep,
      dataThirdStep,
      dataFourthStep,
      dataFifthStep,
      setFirstStep,
      setSecondStep,
      setThirdStep,
      setFourthStep,
      setFifthStep,
      saveDocument,
      getCompanyType,
      getCountryOptions,
      getStateOptions,
      getSaleOptions,
    }}>
      {children}
    </WebEventContext.Provider>
  )
}
