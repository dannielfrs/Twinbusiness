import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { EventControlPanelContext } from './EventControlPanelContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getControlPanel } from '@/services/axios/authenticated/profile/profileBusiness/profileBusiness'
import { setProfileService } from '@/services/axios/authenticated/profile/profile'
import { formatTime } from '@/utilities/formatters'

export const EventControlPanelProvider = ({ children }: { children: React.ReactNode }) => {

  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [eventTypeOptions, setEventTypeOptions] = useState([])
  const [accountType, setAccountType] = useState('')

  useEffect(() => {
    getOptions()
  }, [])

  useEffect(() => {
    if (accountType) getData()
  }, [accountType])

  const getOptions = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'event_type')
      form.append('catalogs[3][name]', 'account_type')
      const response = await postCatalogsService(form)
      setEventTypeOptions(response.data.records.event_type)
      const [result] = response.data.records.account_type.filter((item: any) => item.text === 'Empresarial')
      if (result) setAccountType(result.id)
      return response
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
      form.append('event', id as string)
      const response = await getControlPanel(form)
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
      setLoading(true)
      const form = new FormData()
      form.append('account_type', accountType)
      form.append('event', id as string)
      form.append('date', data.date)
      form.append('start_time', formatTime(data.start_time))
      form.append('end_time', formatTime(data.end_time))
      form.append('name', data.name)
      if (data.address) form.append('address', data.address)
      if (data.where_is) form.append('where_is', data.where_is)
      if (data.type) form.append('event_type', data.type)
      const response = await setProfileService(form)
      getData()
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
    <EventControlPanelContext.Provider value={{
      loading,
      data,
      getData,
      eventTypeOptions,
      saveData,
      savedSuccess
    }}>
      {children}
    </EventControlPanelContext.Provider>
  )
}
