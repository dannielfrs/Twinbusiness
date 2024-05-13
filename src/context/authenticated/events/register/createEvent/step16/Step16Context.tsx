import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface Data {
  recharge_system: string;
  ticketing_system: string;
  review: string;
  terms: { id: string; title: string; description: string }[];
}

interface ContextType {
  loading: boolean
  data: Data | undefined
  saveData: Function
  setData: Function
  savingData: boolean
  savedSuccess: boolean
}

export const Step16Context = createContext<ContextType>({
  loading: true,
  data: {
    recharge_system: '',
    ticketing_system: '',
    review: '',
    terms: []
  },
  setData: () => { },
  saveData: () => { },
  savingData: false,
  savedSuccess: false
})
