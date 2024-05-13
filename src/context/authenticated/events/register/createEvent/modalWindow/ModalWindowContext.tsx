import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface ContextType {
  loading: boolean
  eventTypeOptions: any[]
  dataImgText: any[]
  setModalWindow: Function
  setZoneColor: Function
  setDataImgText: Function
  eliminateZone: Function
  dataTableZone: any[]
  getTableMap: Function
  deleteSponsor: Function
  getfomrMap: Function
  saveInternalMap: Function
  dataSponsor: any[]
  setDataSponsor: Function
  setImgFormSaved: Function
  imgFormSaved: any
  setImgForm: Function
  imgForm: any
  savedSuccess: boolean
  savedError: boolean
  closeForm: boolean
}

export const ModalWindowContext = createContext<ContextType>({
  loading: true,
  dataImgText: [],
  eventTypeOptions: [],
  setDataImgText: () => { },
  setModalWindow: () => { },
  dataTableZone: [],
  getTableMap: () => { },
  getfomrMap: () => { },
  saveInternalMap: () => { },
  eliminateZone: () => { },
  deleteSponsor: () => { },
  setZoneColor: () => { },
  dataSponsor: [],
  setDataSponsor: () => { },
  setImgFormSaved: () => { },
  imgFormSaved: '',
  setImgForm: () => { },
  imgForm: '',
  savedSuccess: false,
  savedError: false,
  closeForm: false,
})
