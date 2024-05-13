import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  saveItem: Function
}

export const SalesPhaseContext = createContext<ContextType>({
  loading: true,
  data: {},
  saveItem: () => { }
})
