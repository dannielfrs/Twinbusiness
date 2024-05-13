import { createContext } from 'react'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  saveData: Function
}

export const MapSponsorsContext = createContext<ContextType>({
  loading: true,
  data: {},
  saveData: () => { }
})
