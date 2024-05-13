import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  setStep10: Function
  getStep10: Function
  editId: string
  setEditId: Function
}

export const Step10Context = createContext<ContextType>({
  loading: true,
  data: {},
  editId: '',
  setEditId: () => { },
  setStep10: () => { },
  getStep10: () => { },
})
