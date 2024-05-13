import { useEffect, useState } from 'react'
import { HomeContext } from './HomeContext'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getProfileService } from '@/services/axios/authenticated/profile/profile'

export const HomeProvider = ({ children, }: { children: React.ReactNode }) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [dropdownOptions, setDropdownOptions] = useState({})
  const [accountType, setAccountType] = useState('')

  useEffect(() => {
    getDropdownOptions()
  }, [])

  useEffect(() => {
    if (accountType) getUserData()
  }, [accountType])

  const getDropdownOptions = async () => {
    try {
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'language')
      form.append('catalogs[1][name]', 'coin')
      form.append('catalogs[2][name]', 'account_type')
      const response = await postCatalogsService(form)
      setDropdownOptions({
        language: response.data.records.language,
        currency: response.data.records.coin
      })
      const [result] = response.data.records.account_type.filter((item: any) => item.text === 'Personal')
      if (result) setAccountType(result.id)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getUserData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('account_type', accountType)
      const response = await getProfileService(form)
      setData(response.data.records.user)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <HomeContext.Provider value={{
      loading,
      data,
      getUserData,
      dropdownOptions
    }}>
      {children}
    </HomeContext.Provider>
  )
}
