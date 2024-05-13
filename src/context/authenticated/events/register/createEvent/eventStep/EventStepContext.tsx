import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  setFrom15: (value: boolean) => any
  activeStep: number | null
  uuidEvent: string
  setActiveStep: (value: number) => void
  getStepEvent: () => any
  backStepEvent: () => any
  backStep3: () => any
  backStep: () => any
  zoneId: string
  setZoneId: Function
}

export const EventStepContext = createContext<ContextType>({
  loading: true,
  setFrom15: () => { },
  activeStep: null,
  uuidEvent: '',
  setActiveStep: () => { },
  getStepEvent: () => { },
  backStepEvent: () => { },
  backStep3: () => { },
  backStep: () => { },
  zoneId: '',
  setZoneId: () => { }
})
