import axios, { AxiosResponse } from 'axios'
import { alertError } from '@/utilities/alerts'

export const getTokenGuestService = async () => {
  try {
    const baseURL: string = process.env.NEXT_PUBLIC_API_PASSPORT_URL as string
    const formData = new FormData()
    formData.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID as string)
    formData.append('client_secret', process.env.NEXT_PUBLIC_CLIENT_SECRET as string)
    formData.append('grant_type', 'client_credentials')
    formData.append('scope', 'web')
    const response: AxiosResponse = await axios.post(`${baseURL}oauth/token`, formData)
    return response.data.access_token as string
  } catch (error: any) {
    alertError('Error', error)
  }
}