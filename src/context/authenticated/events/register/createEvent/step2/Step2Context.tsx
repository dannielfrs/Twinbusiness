import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  ticketTypeOptions: any[]
  setStep2: Function
}

export const Step2Context = createContext<ContextType>({
  loading: true,
  data: {},
  ticketTypeOptions: [],
  setStep2: () => { }
})
