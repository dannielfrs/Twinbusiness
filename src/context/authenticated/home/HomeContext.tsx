import { createContext } from 'react'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  getUserData: Function
  dropdownOptions: { [key: string]: any }
}

export const HomeContext = createContext<ContextType>({
  loading: true,
  data: {},
  getUserData: () => { },
  dropdownOptions: {},
})