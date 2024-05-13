import { post } from '@/services/axios/api'

export async function registerService(formData: FormData) {
  return await post('authenticate/register', formData)
}

export async function verifyCodeService(formData: FormData) {
  return await post('user/register/verify-code', formData)
}

export async function skipValidationService(formData: FormData) {
  return await post('user/register/skip-validation', formData)
}

export async function resendCodeService(formData: FormData) {
  return await post('user/register/resend-code', formData)
}

export async function getCalatogo(formData: FormData) {
  return await post('general/catalogs', formData)
}
