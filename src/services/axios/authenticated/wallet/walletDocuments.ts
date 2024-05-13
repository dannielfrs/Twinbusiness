import { get, post } from '@/services/axios/api'

export const verifyDataService = async (formData: FormData) => {
  return await get('wallet/verify', formData)
}

export const electronicSignatureService = async (formData: FormData) => {
  return await post('wallet/signature', formData)
}

export const saveDocumentService = async (formData: FormData) => {
  return await post('wallet/document', formData)
}

export const sendReviewService = async (formData: FormData) => {
  return await post('wallet/send-review', formData)
}
