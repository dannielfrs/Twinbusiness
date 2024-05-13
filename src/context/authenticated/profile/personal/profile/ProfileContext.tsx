import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  getData: Function
  editData: Function
  savedSuccess: boolean
}

export const ProfileContext = createContext<ContextType>({
  loading: true,
  data: {},
  getData: () => { },
  editData: () => { },
  savedSuccess: false,
})
