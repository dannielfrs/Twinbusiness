import { useEffect, useReducer, useRef, useState } from 'react'
import { AuthContext } from './AuthContext'
import { decrypt, encrypt } from '@/utilities/encryption'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { AUTHENTICATED, AUTHENTICATED_USER, LOGGED_IN, TOKEN, RECOVERY_ADVERTISE, ACTUAL_BRANCH } from '@/utilities/authConstants'
import Cookies from 'js-cookie'
import { authReducer } from './authReducer'
import { authTypes } from '@/types/authTypes'
import { useRouter } from 'next/navigation'
import { post } from '@/services/axios/api'
import { loginService, registerService, resendCodeService, skipValidationService, verifyCodeService, getCalatogo } from '@/services/axios/guest/authenticate'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'

const initial = () => {
  const user = (Cookies.get(AUTHENTICATED_USER)) ? JSON.parse(decrypt(Cookies.get(AUTHENTICATED_USER))) : {}
  return {
    isLoggedIn: decrypt(Cookies.get(AUTHENTICATED)) === LOGGED_IN,
    user
  }
}

const prefix = '/system'

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [authState, dispatch] = useReducer(authReducer, {}, initial)
  const router = useRouter()
  const sweetLoadingRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [currentBranch, setCurrentBranch] = useState(null)
  const [dropdownOptions, setDropdownOptions] = useState({})

  useEffect(() => {
    const getOptions = async () => {
      const response = await getDropdownOptions('language')
      setDropdownOptions((prevState) => ({ ...prevState, language: response.language }))
      const resp = await getDropdownOptions('coin')
      setDropdownOptions((prevState) => ({ ...prevState, currency: resp.coin }))
    }
    getOptions()
  }, [])

  const getDataSelects = async () => {
    try {
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'gender')
      form.append('catalogs[1][name]', 'profession')
      const response = await getCalatogo(form)
      return response.data.records
    } catch (error: any) {
      alertError('', error)
    } finally {
      setLoading(false)
    }

  }

  const handleLoginSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('email', data.email)
      form.append('password', data.password)
      const response = await loginService(form)
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(response.data.user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(response.data.user.token.access_token))
      Cookies.set(RECOVERY_ADVERTISE, 'true')
      const action = {
        type: authTypes.login,
        payload: {
          user: response.data.user
        }
      }
      dispatch(action)
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        // const route = user.full_record ? `${prefix}/home` : '/register'
        router.replace(`${prefix}/home`)
      }, 2000)
    } catch (error: any) {
      alertError('', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRegisterSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('name', data.name)
      form.append('last_name', data.last_name)
      form.append('phone_number', data.phone_number)
      form.append('email', data.email)
      form.append('password', data.password)
      form.append('password_confirmation', data.password_confirmation)
      form.append('birthdate', data.birthdate)
      // form.append('gender', data.gender)
      form.append('gender', data.gender)
      // form.append('profession', data.profession)
      form.append('profession', data.profession)
      form.append('terms', '1')
      const response = await registerService(form)
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(response.data.user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(response.data.user.token.access_token))
      Cookies.set(RECOVERY_ADVERTISE, 'true')
      Cookies.set(ACTUAL_BRANCH, 'true')
      const action = {
        type: authTypes.login,
        payload: {
          user: response.data.user
        }
      }
      dispatch(action)
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        router.replace(`${prefix}/home`)
      }, 3000)
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSkipValidationSubmit: SubmitHandler<FieldValues> = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      const response = await skipValidationService(form)
      const { data: { user, token: { access_token: accessToken } } } = response
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(accessToken))
      Cookies.set(RECOVERY_ADVERTISE, 'true')
      Cookies.set(ACTUAL_BRANCH, 'true')
      const action = {
        type: authTypes.login,
        payload: {
          user
        }
      }
      // dispatch(action)
      router.replace('/register/membership')
    } catch (error: any) {
      alertError('', error)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyCodeSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const form = new FormData()
      form.append('code', `${data.codeone}${data.codetwo}${data.codethree}${data.codefour}${data.codefive}`)
      setLoading(true)
      const response = await verifyCodeService(form)
      const { data: { user, token: { access_token: accessToken } } } = response
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(accessToken))
      Cookies.set(RECOVERY_ADVERTISE, 'true')
      Cookies.set(ACTUAL_BRANCH, 'true')
      const action = {
        type: authTypes.login,
        payload: {
          user
        }
      }
      // dispatch(action)
      router.replace('/register/membership')
    } catch (error: any) {
      alertError('', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
    // try {
    //   const form = new FormData()
    //   const response = await changePasswordAsync(form)
    //   const { data: { user, token: { access_token: accessToken } } } = response
    //   Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
    //   Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
    //   Cookies.set(TOKEN, encrypt(accessToken))
    //   Cookies.set(RECOVERY_ADVERTISE, 'true')
    //   Cookies.set(ACTUAL_BRANCH, 'true')
    //   const action = {
    //     type: authTypes.login,
    //     payload: {
    //       user
    //     }
    //   }
    //   dispatch(action)
    //   router.replace(`${prefix}/dashboard`)
    // } catch (error: any) {
    //   alertError('', error)
    // }
  }

  const onFreeMembershipSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // sweetLoadingRef.current = alertLoading('', 'Estamos procesando tu solicitud de adquisición de membresía. ')
      const form = new FormData()
      const response = await post(`user/register/membership/${form}/free`)
      const { data: { user, token: { access_token: accessToken } } } = response
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(accessToken))
      Cookies.set(RECOVERY_ADVERTISE, 'true')
      Cookies.set(ACTUAL_BRANCH, 'true')
      const action = {
        type: authTypes.login,
        payload: {
          user
        }
      }
      // dispatch(action)
      router.replace(`${prefix}/dashboard`)
    } catch (error: any) {
      alertError('', error)
    } finally {
      // sweetLoadingRef.current.close()
      sweetLoadingRef.current = null
    }
  }

  const onTryMembershipSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // sweetLoadingRef.current = alertLoading('', 'Estamos procesando tu solicitud de adquisición de membresía. ')
      const form = new FormData()
      const response = await post(`user/register/membership/${form}/try`)
      const { data: { user, token: { access_token: accessToken } } } = response
      Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
      Cookies.set(AUTHENTICATED, encrypt(LOGGED_IN))
      Cookies.set(TOKEN, encrypt(accessToken))
      Cookies.set(RECOVERY_ADVERTISE, 'true')
      Cookies.set(ACTUAL_BRANCH, 'true')
      const action = {
        type: authTypes.login,
        payload: {
          user
        }
      }
      // dispatch(action)
      router.replace(`${prefix}/dashboard`)
    } catch (error: any) {
      alertError('', error)
    } finally {
      // sweetLoadingRef.current.close()
      sweetLoadingRef.current = null
    }
  }

  const handleUpdateProfileSubmit: SubmitHandler<FieldValues> = async (data) => {
    // try {
    //   sweetLoadingRef.current = alertLoading('', 'Estamos actualizando tu perfil. ')
    //   const form = new FormData()
    //   const response = await updateAsync(form)
    //   const { data: { record: user } } = response
    //   Cookies.set(AUTHENTICATED_USER, encrypt(JSON.stringify(user)))
    //   const action = {
    //     type: authTypes.login,
    //     payload: {
    //       user
    //     }
    //   }
    //   dispatch(action)
    //   router.push('/system/my-account/profile')
    // } catch (error: any) {
    //   alertError('', error)
    // } finally {
    //   sweetLoadingRef.current.close()
    //   sweetLoadingRef.current = null
    // }
  }

  const onLogOut = () => {
    const action = {
      type: authTypes.logout,
      payload: {}
    }
    dispatch(action)
    router.push('/')
    window.location.reload();
  }

  const getCurrentBranch = (e: any) => {
    const { id } = e.value
    setCurrentBranch(id)
    Cookies.set(ACTUAL_BRANCH, JSON.stringify(e.value))
  }

  const handleResendCodeClick = async () => {
    try {
      setLoading(true)
      // sweetLoadingRef.current = alertLoading('', 'Estamos procesando tu solicitud de reenvió de código...')
      const form = new FormData()
      const response = await resendCodeService(form)
      const { data: { message } } = response
      alertSuccess(message)
    } catch (error: any) {
      alertError('', error)
    } finally {
      setLoading(false)
      // sweetLoadingRef.current.close()
      sweetLoadingRef.current = null
    }
  }

  const getDropdownOptions = async (name: string) => {
    try {
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', name)
      const response = await postCatalogsService(form)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      loading,
      success,
      getDataSelects,
      handleLoginSubmit,
      handleRegisterSubmit,
      handleSkipValidationSubmit,
      handleVerifyCodeSubmit,
      handleChangePassword,
      onFreeMembershipSubmit,
      onTryMembershipSubmit,
      handleUpdateProfileSubmit,
      onLogOut,
      getCurrentBranch,
      handleResendCodeClick,
      getDropdownOptions,
      dropdownOptions
    }}>
      {children}
    </AuthContext.Provider>
  )
}
