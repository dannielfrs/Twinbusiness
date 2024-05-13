import { get, post } from '@/services/axios/api'

export const createItemService = async (formData: FormData) => {
  return await post('company/event/location', formData)
}

export const getItemService = async (formData: FormData) => {
  return await get('company/event/location', formData)
}
