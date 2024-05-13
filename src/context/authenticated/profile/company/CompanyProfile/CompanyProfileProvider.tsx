import { useEffect, useState } from 'react'
import { CompanyProfileContext } from './CompanyProfileContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getControlPanel } from '@/services/axios/authenticated/profile/profileBusiness/profileBusiness'

export const CompanyProfileProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [accountType, setAccountType] = useState('')

  useEffect(() => {
    getOptions()
  }, [])

  useEffect(() => {
    if (accountType) getData()
  }, [accountType])

  const getOptions = async () => {
    try {
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[3][name]', 'account_type')
      const response = await postCatalogsService(form)
      const [result] = response.data.records.account_type.filter((item: any) => item.text === 'Empresarial')
      if (result) setAccountType(result.id)
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
      form.append('account_type', accountType)
      const response = await getControlPanel(form)
      const [companyData] = response.data.records.company
      if (companyData) setData(companyData)
      return companyData
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CompanyProfileContext.Provider value={{
      loading,
      data,
      getData,
      savedSuccess
    }}>
      {children}
    </CompanyProfileContext.Provider>
  )
}
