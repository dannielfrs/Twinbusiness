import { get, post } from '@/services/axios/api'

export const getDataService = async (formData: FormData) => {
  return await post('company/event/date/data-table', formData)
}

export const createItemService = async (formData: FormData) => {
  return await post('company/event/date', formData)
}

export const deleteItemService = async (formData: FormData, id: string) => {
  return await post(`company/event/date/${id}`, formData)
}
