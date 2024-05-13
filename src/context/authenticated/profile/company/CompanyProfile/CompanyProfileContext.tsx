import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  getData: Function
  savedSuccess: boolean
}

export const CompanyProfileContext = createContext<ContextType>({
  loading: true,
  data: {},
  getData: () => { },
  savedSuccess: false,
})
