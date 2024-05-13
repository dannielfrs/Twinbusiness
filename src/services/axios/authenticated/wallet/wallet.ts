import { get, post } from '@/services/axios/api'

export const accountInformationService = async (formData: FormData) => {
  return await get('wallet/spei/account-information?type=personal', formData)
}
