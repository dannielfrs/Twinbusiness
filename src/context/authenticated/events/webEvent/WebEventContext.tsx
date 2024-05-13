import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  dataSecondStep: { [key: string]: any }
  dataThirdStep: { [key: string]: any }
  dataFourthStep: { [key: string]: any }
  dataFifthStep: { [key: string]: any }
  setFirstStep: (membershipId: string) => any
  setSecondStep: SubmitHandler<FieldValues>
  setThirdStep: (data: any, companyId: string) => any
  setFourthStep: SubmitHandler<FieldValues>
  setFifthStep: (data: any, selectedOptions: any[]) => any
  saveDocument: (type: string, document: File) => any
  getCompanyType: () => any
  getCountryOptions: () => any
  getStateOptions: () => any
  getSaleOptions: () => any
}

export const WebEventContext = createContext<ContextType>({
  loading: true,
  dataSecondStep: {},
  dataThirdStep: {},
  dataFourthStep: {},
  dataFifthStep: {},
  setFirstStep: () => { },
  setSecondStep: () => { },
  setThirdStep: () => { },
  setFourthStep: () => { },
  setFifthStep: () => { },
  saveDocument: () => { },
  getCompanyType: () => { },
  getCountryOptions: () => { },
  getStateOptions: () => { },
  getSaleOptions: () => { },
})
