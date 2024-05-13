import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface WalletContextType {
  loading: boolean
  accountInformation: { [key: string]: any }
}

export const WalletContext = createContext<WalletContextType>({
  loading: true,
  accountInformation: {},
})
