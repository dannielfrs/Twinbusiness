import { get, post } from '@/services/axios/api'

export const getStep1Service = async (formData: FormData) => {
  return await get('company/event/get-first-step', formData)
}

export const setStep1Service = async (formData: FormData) => {
  return await post('company/event/set-first-step', formData)
}

export const getStep2Service = async (formData: FormData) => {
  return await get('company/event/get-second-step', formData)
}

export const setStep2Service = async (formData: FormData) => {
  return await post('company/event/set-second-step', formData)
}

export const getStepService = async (formData: FormData) => {
  return await get('company/event/get-step', formData)
}

export const backStepService = async (formData: FormData) => {
  return await get('company/event/back', formData)
}

export const getStep8Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/get-second-step', formData)
}

export const setStep8Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/set-second-step', formData)
}

export const getStep9Service = async (formData: FormData) => {
  return await post('company/event/payment-method/get', formData)
}

export const setStep9Service = async (formData: FormData) => {
  return await post('company/event/payment-method/set', formData)
}

export const getStep10Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/data-table', formData)
}

export const setStep10Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/set-second-step', formData)
}

export const getImageValidation = async () => {
  return await post('company/event/zone/validate-image')
}

export const getStep11Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/get-ticket', formData)
}

export const setStep11Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/multimedia', formData)
}

export const getStep15ServicePrev = async () => {
  return await post('company/get-sixth-step')
}

export const setStep15ServicePrev = async (formData: FormData) => {
  return await post('company/set-sixth-step', formData)
}

export const getStep15Service = async (formData: FormData) => {
  return await post('company/section/banner/get', formData)
}

export const setStep15Service = async (formData: FormData) => {
  return await post('company/section/banner/set', formData)
}

export const getStep16Service = async () => {
  return await get('company/get-seventh-step')
}

export const setStep16Service = async (formData: FormData) => {
  return await post('company/set-seventh-step', formData)
}

export const getSponsorService = async (id: string) => {
  return await get(`company/event/${id}/sponsor/data-table`)
}

export const setSponsorService = async (formData: FormData, id:string) => {
  return await post(`company/event/${id}/sponsor`, formData)
}

export const deleteSponsorService = async (formData: FormData, id:string) => {
  return await post(`company/event/${id}/sponsor`, formData)
}

export const getMap = async (formData: FormData) => {
  return await post('company/event/map/get', formData)
}

export const setMap = async (formData: FormData) => {
  return await post('company/event/map/set', formData)
}

export const setColor = async (formData: FormData, id: string) => {
  return await post(`company/event/zone/${id}/color`, formData)
}

export const getZone = async (formData: FormData) => {
  return await post('company/event/zone/data-table', formData)
}

export const deleteZone = async (formData: FormData, id: string) => {
  return await post(`company/event/zone/${id}`, formData)
}
