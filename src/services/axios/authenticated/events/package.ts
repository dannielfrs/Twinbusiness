import { get, post } from '@/services/axios/api'

export const getDataService = async (formData: FormData) => {
  return await get('company/package', formData)
}

export const createItemService = async (formData: FormData) => {
  return await post('company/package', formData)
}

export const getItemService = async (formData: FormData, id: string) => {
  return await get(`company/package/${id}/edit`, formData)
}

export const updateItemService = async (formData: FormData, id: string) => {
  return await post(`company/package/${id}`, formData)
}

export const deleteItemService = async (formData: FormData, id: string) => {
  return await post(`company/package/${id}`, formData)
}
