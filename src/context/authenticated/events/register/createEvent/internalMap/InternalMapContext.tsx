import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  data: { [key: string]: any }
  dataTableZone: any[]
  saveZoneColor: Function
  saveInternalMap: Function
  savedSuccess: boolean
  closeForm: boolean
}

export const InternalMapContext = createContext<ContextType>({
  loading: true,
  data: {},
  dataTableZone: [],
  saveZoneColor: () => { },
  saveInternalMap: () => { },
  savedSuccess: false,
  closeForm: false,
})
