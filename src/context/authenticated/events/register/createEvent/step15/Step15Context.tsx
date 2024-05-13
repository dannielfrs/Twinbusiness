import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  selectFont: any[]
  selectSize: any[]
  saveData: Function
  getData: Function
  savedSuccess: boolean
}

export const Step15Context = createContext<ContextType>({
  loading: true,
  data: {},
  selectFont: [],
  selectSize: [],
  saveData: () => { },
  getData: () => { },
  savedSuccess: false,
})
