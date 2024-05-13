import { createContext } from 'react'

interface ContextType {
  loading: boolean
  data: any[]
  saveData: Function
  savedSuccess: boolean
}

export const RowsContext = createContext<ContextType>({
  loading: true,
  data: [],
  saveData: () => { },
  savedSuccess: false
})
