import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: any[]
  savedSuccess: boolean
  createItem: Function
  getItem: Function
  updateItem: Function
  deleteItem: Function
}

export const PhoneNumberContext = createContext<ContextType>({
  loading: true,
  data: [],
  savedSuccess: false,
  createItem: () => { },
  getItem: () => { },
  updateItem: () => { },
  deleteItem: () => { }
})
