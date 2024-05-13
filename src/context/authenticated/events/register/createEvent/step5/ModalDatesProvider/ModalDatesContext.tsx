import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  ticketTypeOptions: any[]
  setModalDates: Function
}

export const ModalDatesContext = createContext<ContextType>({
  loading: true,
  data: {},
  ticketTypeOptions: [],
  setModalDates: () => { }
})
