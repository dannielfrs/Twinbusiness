import { createContext } from 'react'
import { SubmitHandler, FieldValues } from 'react-hook-form'

interface AuthContextType {
  loading: boolean
  success: boolean
  getDataSelects: Function,
  handleLoginSubmit: SubmitHandler<FieldValues>
  handleRegisterSubmit: SubmitHandler<FieldValues>
  handleSkipValidationSubmit: SubmitHandler<FieldValues>
  handleVerifyCodeSubmit: SubmitHandler<FieldValues>
  handleChangePassword: SubmitHandler<FieldValues>
  onFreeMembershipSubmit: SubmitHandler<FieldValues>
  onTryMembershipSubmit: SubmitHandler<FieldValues>
  handleUpdateProfileSubmit: SubmitHandler<FieldValues>
  onLogOut: () => void
  getCurrentBranch: (e: any) => void
  handleResendCodeClick: () => void
  getDropdownOptions: Function
  dropdownOptions: { [key: string]: any }
}

export const AuthContext = createContext<AuthContextType>({
  loading: true,
  success: true,
  getDataSelects: () => { },
  handleLoginSubmit: () => { },
  handleRegisterSubmit: () => { },
  handleSkipValidationSubmit: () => { },
  handleVerifyCodeSubmit: () => { },
  handleChangePassword: () => { },
  onFreeMembershipSubmit: () => { },
  onTryMembershipSubmit: () => { },
  handleUpdateProfileSubmit: () => { },
  onLogOut: () => { },
  getCurrentBranch: () => { },
  handleResendCodeClick: () => { },
  getDropdownOptions: () => { },
  dropdownOptions: {},
})
