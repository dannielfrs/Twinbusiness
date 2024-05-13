import { get, post } from '@/services/axios/api'

export const getBanner = async (formData: FormData) => {
  return await post('company/section/banner/get', formData)
}

export const setBanner = async (formData: FormData) => {
  return await post('company/section/banner/set', formData)
}

