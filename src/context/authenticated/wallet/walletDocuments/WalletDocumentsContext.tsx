import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface WalletContextType {
  loading: boolean
  data: { [key: string]: any }
  documentTypesList: any[]
  successSignature: boolean
  errorSignature: boolean
  idOptions: any[]
  selfieOptions: any[]
  addressProofOptions: any[]
  successDocument: boolean
  errorDocument: boolean
  verifyData: () => void
  createElectronicSignature: (signature: string[], signatureConfirmation: string[]) => void
  saveDocument: (validationDocument: string, document: File, back: string) => any
  identificationCompleted: boolean
  setIdentificationCompleted: (value: boolean) => void
  selfieCompleted: boolean
  setSelfieCompleted: (value: boolean) => void
  addressProofCompleted: boolean
  setAddressProofCompleted: (value: boolean) => void
  sendReview: () => void
  sendReviewCompleted: boolean
  sendReviewFailed: boolean
}

export const WalletDocumentsContext = createContext<WalletContextType>({
  loading: true,
  data: {},
  documentTypesList: [],
  successSignature: false,
  errorSignature: false,
  idOptions: [],
  selfieOptions: [],
  addressProofOptions: [],
  successDocument: false,
  errorDocument: false,
  verifyData: () => { },
  createElectronicSignature: () => { },
  saveDocument: () => { },
  identificationCompleted: false,
  setIdentificationCompleted: () => { },
  selfieCompleted: false,
  setSelfieCompleted: () => { },
  addressProofCompleted: false,
  setAddressProofCompleted: () => { },
  sendReview: () => { },
  sendReviewCompleted: false,
  sendReviewFailed: false
})
