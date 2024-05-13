import { post } from '@/services/axios/api'

export const loginService = async (formData: FormData) => {
  return await post('authenticate/login', formData)
}
