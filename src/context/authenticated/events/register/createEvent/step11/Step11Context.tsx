import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  eventTypeOptions: any[]
  setStep11: Function
}

export const Step11Context = createContext<ContextType>({
  loading: true,
  data: {},
  eventTypeOptions: [],
  setStep11: () => { }
})
