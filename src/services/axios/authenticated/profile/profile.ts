import { get, post } from '@/services/axios/api'

export const getProfileService = async (formData: FormData) => {
  return await post('control-panel', formData)
}

export const setProfileService = async (formData: FormData) => {
  return await post('profile', formData)
}

export const getQrProfileService = async (formData: FormData) => {
  return await post('qr-profile', formData)
}
