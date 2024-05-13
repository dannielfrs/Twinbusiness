import { get, post } from '@/services/axios/api'

export const getDataService = async (formData: FormData) => {
  return await post('company/event/zone/data-table', formData)
}

export const createItemService = async (formData: FormData) => {
  return await post('company/event/zone', formData)
}

export const getItemService = async (formData: FormData, id: string) => {
  return await get(`company/event/zone/${id}/edit`, formData)
}

export const updateItemService = async (formData: FormData, id: string) => {
  return await post(`company/event/zone/${id}`, formData)
}

export const deleteItemService = async (formData: FormData, id: string) => {
  return await post(`company/event/zone/${id}`, formData)
}

export const validateTicketService = async (formData: FormData) => {
  return await post('company/event/zone/validate-ticket', formData)
}
