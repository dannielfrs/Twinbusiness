import { createContext } from 'react'

interface ContextType {
  loading: boolean
  ticketId: string
  data: { [key: string]: any }
  ticketTypeOptions: any[]
  setRefresh: Function
  setStep1: Function
}

export const TicketStep1Context = createContext<ContextType>({
  loading: true,
  ticketId: '',
  data: {},
  ticketTypeOptions: [],
  setRefresh: () => { },
  setStep1: () => { }
})
