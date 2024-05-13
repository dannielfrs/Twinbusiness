import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: any[]
  createItem: Function
  getItem: Function
  updateItem: Function
  deleteItem: Function
  validateTicket: Function
}

export const ZoneContext = createContext<ContextType>({
  loading: true,
  data: [],
  createItem: () => { },
  getItem: () => { },
  updateItem: () => { },
  deleteItem: () => { },
  validateTicket: () => { }
})
