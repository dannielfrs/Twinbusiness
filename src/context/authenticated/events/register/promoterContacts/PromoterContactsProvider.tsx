import { useEffect, useState } from 'react'
import { PromoterContactsContext } from './PromoterContactsContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getDataService as getPhoneNumberService } from '@/services/axios/authenticated/events/phoneNumber'
import { getDataService as getEmailService } from '@/services/axios/authenticated/events/email'
import { getDataService as getWebPageService } from '@/services/axios/authenticated/events/webPage'
import { getDataService as getSocialMediaService } from '@/services/axios/authenticated/events/socialMedia'

export const PromoterContactsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({ phoneNumber: [], email: [], webPage: [], socialMedia: [], })

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response1 = await getPhoneNumberService(form)
      setData((prevState) => ({ ...prevState, phoneNumber: response1.data.records }))
      const response2 = await getEmailService(form)
      setData((prevState) => ({ ...prevState, email: response2.data.records }))
      const response3 = await getWebPageService(form)
      setData((prevState) => ({ ...prevState, webPage: response3.data.records }))
      const response4 = await getSocialMediaService(form)
      setData((prevState) => ({ ...prevState, socialMedia: response4.data.records }))
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PromoterContactsContext.Provider value={{
      loading,
      data,
      getData,
    }}>
      {children}
    </PromoterContactsContext.Provider>
  )
}
