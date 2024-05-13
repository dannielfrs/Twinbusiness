import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  activeStepCompany: number
  getStepCompany: () => any
  backStepCompany: () => any
  backToCompany: () => any
}

export const CompanyStepContext = createContext<ContextType>({
  loading: true,
  activeStepCompany: 0,
  getStepCompany: () => { },
  backStepCompany: () => { },
  backToCompany: () => { },
})
