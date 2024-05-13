import { useContext, useEffect, useState } from 'react'
import { ProfileContext } from './ProfileContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getProfileService, setProfileService, getQrProfileService } from '@/services/axios/authenticated/profile/profile'
import { HomeContext } from '@/context/authenticated/home'

export const ProfileProvider = ({ children, }: { children: React.ReactNode }) => {

  const { getUserData } = useContext(HomeContext)
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
      const [result] = response.data.records.account_type.filter((item: any) => item.text === 'Personal')
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
      const response = await getProfileService(form)
      setData(response.data.records.user)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const editData = async (data: any, image?: File) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('account_type', accountType)
      if (data.name) form.append('name', data.name)
      if (data.last_name) form.append('last_name', data.last_name)
      form.append('email', data.email)
      form.append('phone_number', data.phone_number)
      if (image) form.append('image', image)
      const response = await setProfileService(form)
      getData()
      getUserData()
      setSavedSuccess(true)
      setTimeout(() => {
        setSavedSuccess(false)
      }, 2000)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProfileContext.Provider value={{
      loading,
      data,
      getData,
      editData,
      savedSuccess,
    }}>
      {children}
    </ProfileContext.Provider>
  )
}
