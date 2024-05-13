import { post } from '@/services/axios/api'

export async function sendCodeService (formData: FormData) {
  return await post('authenticate/recover/send-code', formData)
}
