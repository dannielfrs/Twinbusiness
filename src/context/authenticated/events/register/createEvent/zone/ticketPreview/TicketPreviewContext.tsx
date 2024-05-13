import { createContext } from 'react'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
}

export const TicketPreviewContext = createContext<ContextType>({
  loading: true,
  data: {}
})
