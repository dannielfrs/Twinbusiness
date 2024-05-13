import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  eventTypeOptions: any[]
  setStep1: Function
}

export const Step1Context = createContext<ContextType>({
  loading: true,
  data: {},
  eventTypeOptions: [],
  setStep1: () => { }
})
