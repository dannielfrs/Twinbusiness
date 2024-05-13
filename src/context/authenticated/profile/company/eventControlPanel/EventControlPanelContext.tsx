import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  getData: Function
  eventTypeOptions: any[]
  saveData: Function
  savedSuccess: boolean
}

export const EventControlPanelContext = createContext<ContextType>({
  loading: true,
  data: {},
  getData: () => { },
  eventTypeOptions: [],
  saveData: () => { },
  savedSuccess: false,
})
