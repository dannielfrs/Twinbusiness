import { createContext } from 'react'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
}

export const TicketListContext = createContext<ContextType>({
  loading: true,
  data: {}
})
