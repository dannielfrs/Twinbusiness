import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  eventTypeOptions: any[]
  setStep8: Function
}

export const Step8Context = createContext<ContextType>({
  loading: true,
  data: {},
  eventTypeOptions: [],
  setStep8: () => { }
})
