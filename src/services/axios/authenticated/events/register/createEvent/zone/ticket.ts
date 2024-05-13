import { get, post } from '@/services/axios/api'

export const getDataService = async (formData: FormData) => {
  return await post('company/event/zone/ticket/data-table', formData)
}

export const getStep1Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/get-first-step', formData)
}

export const setStep1Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/set-first-step', formData)
}

export const getStep2Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/get-second-step', formData)
}

export const setStep2Service = async (formData: FormData) => {
  return await post('company/event/zone/ticket/set-second-step', formData)
}

export const getTicketService = async (formData: FormData) => {
  return await post('company/event/zone/ticket/get-ticket', formData)
}

export const multimediaService = async (formData: FormData) => {
  return await post('company/event/zone/ticket/multimedia', formData)
}
