import { get, post } from '@/services/axios/api'

export const getCatalogsService = async (formData: FormData) => {
  return await get('general/catalogs', formData)
}

export const postCatalogsService = async (formData: FormData) => {
  return await post('general/catalogs', formData)
}
