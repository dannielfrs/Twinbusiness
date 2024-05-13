import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  saveData: Function
  createItem: Function
  deleteItem: Function
  savedSuccess: boolean
}

export const DateContext = createContext<ContextType>({
  loading: true,
  data: {},
  saveData: () => { },
  createItem: () => { },
  deleteItem: () => { },
  savedSuccess: false
})
