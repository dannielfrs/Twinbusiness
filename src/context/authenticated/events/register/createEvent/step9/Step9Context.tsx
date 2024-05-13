import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  paymentMethodOptions: any[]
  setStep9: Function
}

export const Step9Context = createContext<ContextType>({
  loading: true,
  data: {},
  paymentMethodOptions: [],
  setStep9: () => { }
})
