import { useEffect, useState } from 'react'
import { WalletDocumentsContext } from './WalletDocumentsContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { verifyDataService, electronicSignatureService, saveDocumentService, sendReviewService } from '@/services/axios/authenticated/wallet/walletDocuments'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'

export const WalletDocumentsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [successSignature, setSuccessSignature] = useState<boolean>(false)
  const [errorSignature, setErrorSignature] = useState<boolean>(false)
  const [successDocument, setSuccessDocument] = useState<boolean>(false)
  const [errorDocument, setErrorDocument] = useState<boolean>(false)
  const [documentTypesList, setdocumentTypesList] = useState([])
  const [idOptions, setIdOptions] = useState([])
  const [selfieOptions, setSelfieOptions] = useState([])
  const [addressProofOptions, setAddressProofOptions] = useState([])
  const [identificationCompleted, setIdentificationCompleted] = useState<boolean>(false)
  const [selfieCompleted, setSelfieCompleted] = useState<boolean>(false)
  const [addressProofCompleted, setAddressProofCompleted] = useState<boolean>(false)
  const [sendReviewCompleted, setSendReviewCompleted] = useState<boolean>(false)
  const [sendReviewFailed, setSendReviewFailed] = useState<boolean>(false)

  useEffect(() => {
    verifyData()
    getDocumentTypes()
  }, [])

  useEffect(() => {
    if (documentTypesList.length > 0) {
      getIdOptions()
      getSelfieOptions()
      getAddressProofOptions()
    }
  }, [documentTypesList])

  const verifyData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await verifyDataService(form)
      setData(response.data.record)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const createElectronicSignature = async (signature: string[], signatureConfirmation: string[]) => {
    try {
      setLoading(true)
      setSuccessSignature(false)
      setErrorSignature(false)
      const form = new FormData()
      form.append('signature', `${signature[0]}${signature[1]}${signature[2]}${signature[3]}${signature[4]}${signature[5]}`)
      form.append('signature_confirmation', `${signatureConfirmation[0]}${signatureConfirmation[1]}${signatureConfirmation[2]}${signatureConfirmation[3]}${signatureConfirmation[4]}${signatureConfirmation[5]}`)
      await electronicSignatureService(form)
      setSuccessSignature(true)
    } catch (error: any) {
      setErrorSignature(true)
      // alertError('', error)
    } finally {
      setLoading(false)
    }
  }

  const getDocumentTypes = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'validation_document_type')
      const response = await postCatalogsService(form)
      setdocumentTypesList(response.data.records.validation_document_type)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getIdOptions = async () => {
    try {
      setLoading(true)
      const [ident]: any[] = documentTypesList.filter((item: any) => item.text === 'Identificación')
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'validation_document')
      form.append('catalogs[0][parent]', ident.id)
      const response = await postCatalogsService(form)
      setIdOptions(response.data.records.validation_document)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getSelfieOptions = async () => {
    try {
      setLoading(true)
      const [item]: any[] = documentTypesList.filter((item: any) => item.text === 'Selfie')
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'validation_document')
      form.append('catalogs[0][parent]', item.id)
      const response = await postCatalogsService(form)
      setSelfieOptions(response.data.records.validation_document)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getAddressProofOptions = async () => {
    try {
      setLoading(true)
      const [item]: any[] = documentTypesList.filter((item: any) => item.text === 'Comprobante de domicilio')
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'validation_document')
      form.append('catalogs[0][parent]', item.id)
      const response = await postCatalogsService(form)
      setAddressProofOptions(response.data.records.validation_document)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveDocument = async (validationDocument: string, document: File, back: string) => {
    try {
      setLoading(true)
      setSuccessDocument(false)
      setErrorDocument(false)
      const form = new FormData()
      form.append('validation_document', validationDocument)
      form.append('document', document)
      form.append('back', back)
      const response = await saveDocumentService(form)
      verifyData()
      setSuccessDocument(true)
      setTimeout(() => {
        // setSuccessDocument(false)
      }, 3000)
    } catch (error: any) {
      alertError('Error', error)
      setErrorDocument(true)
    } finally {
      setLoading(false)
    }
  }

  const sendReview = async () => {
    try {
      setLoading(true)
      setSendReviewCompleted(false)
      setSendReviewFailed(false)
      const form = new FormData()
      const response = await sendReviewService(form)
      setSendReviewCompleted(true)
    } catch (error: any) {
      // alertError('Error', error)
      setSendReviewFailed(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <WalletDocumentsContext.Provider value={{
      loading,
      data,
      documentTypesList,
      successSignature,
      errorSignature,
      idOptions,
      selfieOptions,
      addressProofOptions,
      successDocument,
      errorDocument,
      verifyData,
      createElectronicSignature,
      saveDocument,
      identificationCompleted,
      setIdentificationCompleted,
      selfieCompleted,
      setSelfieCompleted,
      addressProofCompleted,
      setAddressProofCompleted,
      sendReview,
      sendReviewCompleted,
      sendReviewFailed
    }}>
      {children}
    </WalletDocumentsContext.Provider>
  )
}
