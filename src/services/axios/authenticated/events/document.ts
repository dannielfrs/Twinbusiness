import { post } from '@/services/axios/api'

export const saveDocumentService = async (formData: FormData) => {
  return await post('company/document', formData)
}
