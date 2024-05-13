import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  createItem: Function
  savedSuccess: boolean
  savedError: boolean
  setSavedError: (value: boolean) => void
}

export const LocationContext = createContext<ContextType>({
  loading: true,
  data: {},
  createItem: () => { },
  savedSuccess: false,
  savedError: false,
  setSavedError: () => { },
})
