import { cleanFormData } from '@/utilities/utilities'
import { AUTHENTICATED, LOGGED_IN, RECOVERY_PASSWORD, TOKEN } from '@/utilities/authConstants'
import { decrypt } from '@/utilities/encryption'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

api.interceptors.request.use(function (config) {
  const token = decrypt(Cookies.get(TOKEN))
  const auth = [LOGGED_IN, RECOVERY_PASSWORD]
  config.baseURL = auth.includes(decrypt(Cookies.get(AUTHENTICATED))) ? process.env.NEXT_PUBLIC_API_AUTHENTICATED_URL : process.env.NEXT_PUBLIC_API_URL
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const post = async (url, data = {}) => {
  return new Promise((resolve, reject) => {
    api.post(url, data)
      .then(response => resolve(response.data))
      .catch(error => {
        const errorMessage = (error?.response?.data?.error) ? error.response.data.error : error.message
        reject(errorMessage)
      })
  })
}

export const get = async (url, data = {}) => {
  return new Promise((resolve, reject) => {
    api.get(url, { params: data })
      .then(response => resolve(response.data))
      .catch(error => {
        const errorMessage = (error?.response?.data?.error) ? error.response.data.error : error.message
        reject(errorMessage)
      })
  })
}
