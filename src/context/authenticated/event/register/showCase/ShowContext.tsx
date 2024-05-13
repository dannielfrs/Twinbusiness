import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ShowContextType {
  data: { [key: string]: any }
  getReview: () => void,
  setReview: (value: File) => void,
}

export const ShowContext = createContext<ShowContextType>({
  data: {},
  getReview: () => { },
  setReview: () => { },
})
