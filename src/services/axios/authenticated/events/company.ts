import { get, post } from '@/services/axios/api'

export const setFirstStepService = async (formData: FormData) => {
  return await post('company/set-first-step', formData)
}

export const getSecondStepService = async (formData: FormData) => {
  return await get('company/get-second-step', formData)
}

export const setSecondStepService = async (formData: FormData) => {
  return await post('company/set-second-step', formData)
}

export const getThirdStepService = async (formData: FormData) => {
  return await get('company/get-third-step', formData)
}

export const setThirdStepService = async (formData: FormData) => {
  return await post('company/set-third-step', formData)
}

export const getFourthStepService = async (formData: FormData) => {
  return await get('company/get-fourth-step', formData)
}

export const setFourthStepService = async (formData: FormData) => {
  return await post('company/set-fourth-step', formData)
}

export const getFifthStepService = async (formData: FormData) => {
  return await get('company/get-fifth-step', formData)
}

export const setFifthStepService = async (formData: FormData) => {
  return await post('company/set-fifth-step', formData)
}

export const backStepService = async (formData: FormData) => {
  return await get('company/back', formData)
}

export const getStepService = async (formData: FormData) => {
  return await get('company/get-step', formData)
}
