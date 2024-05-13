import { get, post } from '@/services/axios/api'

export const salesPhaseService = async (formData: FormData) => {
  return await post('company/event/sale-phase', formData)
}
