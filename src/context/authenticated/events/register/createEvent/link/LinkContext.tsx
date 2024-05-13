import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  getData: Function
  createItem: Function
  updateItem: Function
  deleteItem: Function
}

export const LinkContext = createContext<ContextType>({
  loading: true,
  data: {},
  getData: () => { },
  createItem: () => { },
  updateItem: () => { },
  deleteItem: () => { }
})
