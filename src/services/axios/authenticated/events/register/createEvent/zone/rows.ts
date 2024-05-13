import { get, post } from '@/services/axios/api'

export const getDataService = async (formData: FormData) => {
  return await post('company/event/zone/line/data-table', formData)
}

export const saveDataService = async (formData: FormData) => {
  return await post('company/event/zone/line', formData)
}
