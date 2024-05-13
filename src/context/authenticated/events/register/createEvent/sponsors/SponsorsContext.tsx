import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: any[]
  saveData: Function
  deleteItem: Function
  savedSuccess: boolean
  closeSponsors: boolean
}

export const SponsorsContext = createContext<ContextType>({
  loading: true,
  data: [],
  saveData: () => { },
  deleteItem: () => { },
  savedSuccess: false,
  closeSponsors: false,
})
