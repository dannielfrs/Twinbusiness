import { useContext, useEffect, useState } from 'react'
import { Step15Context } from './Step15Context'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getStep15Service, setStep15Service, setStep15ServicePrev } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { CompanyStepContext } from '../../companyStep/CompanyStepContext'

export const Step15Provider = ({ children }: { children: React.ReactNode }) => {

  const { activeStepCompany } = useContext(CompanyStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [selectFont, setSelectFont] = useState<{ value: string; label: string }[]>([])
  const [selectSize, setSelectSize] = useState([])
  const [templateType, setTemplateType] = useState('')
  const [template, setTemplate] = useState('')

  useEffect(() => {
    getDropdownOptions()
  }, [])

  useEffect(() => {
    if (templateType) getData()
  }, [templateType])

  useEffect(() => {
    if (activeStepCompany === 5 && template) saveStep6Company()
  }, [template])

  const getDropdownOptions = async () => {
    try {
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'font_size')
      form.append('catalogs[1][name]', 'font_family')
      form.append('catalogs[2][name]', 'template_type')
      form.append('catalogs[3][name]', 'template')
      const response = await postCatalogsService(form)
      setSelectFont(response.data.records.font_family)
      setSelectSize(response.data.records.font_size)
      setTemplate(response.data.records.template[0].id)
      const [result] = response.data.records.template_type.filter((item: any) => item.text === 'Vitrina de eventos')
      if (result) setTemplateType(result.id)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('template_type', templateType)
      const response = await getStep15Service(form)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveData = async (data: any, file: File | null) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('template_type', templateType)
      Object.keys(data).forEach((item: any, index: number) => {
        if (data[item].text !== '' && data[item].text !== null) {
          form.append(`banner_data[${index}][type]`, item)
          form.append(`banner_data[${index}][text]`, data[item].text)
          form.append(`banner_data[${index}][family]`, data[item].font_family.id)
          form.append(`banner_data[${index}][size]`, data[item].font_size.id)
          form.append(`banner_data[${index}][color]`, data[item].font_color)
          if (data[item].background_color) form.append(`banner_data[${index}][background]`, data[item].background_color)
        }
      })
      if (file) form.append(`banner`, file)
      const response = setStep15Service(form)
      setSavedSuccess(true)
      setTimeout(() => {
        setSavedSuccess(false)
        getData()
      }, 2000)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveStep6Company = async () => {
    try {
      const form = new FormData()
      form.append('_method', 'put')
      form.append('template', template)
      const response = setStep15ServicePrev(form)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Step15Context.Provider value={{
      loading,
      data,
      selectFont,
      selectSize,
      saveData,
      getData,
      savedSuccess
    }}>
      {children}
    </Step15Context.Provider>
  )
}
