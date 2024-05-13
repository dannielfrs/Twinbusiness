import { useEffect, useState } from 'react'
import { WalletContext } from './WalletContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { accountInformationService } from '@/services/axios/authenticated/wallet/wallet'

export const WalletProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [accountInformation, setAccountInformation] = useState({})

  useEffect(() => {
    getAccountInformation()
  }, [])

  const getAccountInformation = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await accountInformationService(form)
      setAccountInformation(response.data.record)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <WalletContext.Provider value={{
      loading,
      accountInformation,
    }}>
      {children}
    </WalletContext.Provider>
  )
}
