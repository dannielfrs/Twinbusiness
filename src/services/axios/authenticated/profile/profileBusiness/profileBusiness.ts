import { get, post } from '@/services/axios/api'

export const getControlPanel = async (formData: FormData) => {
  return await post('control-panel', formData)
}
