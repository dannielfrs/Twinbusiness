import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface type {
  imageProfile?: string
  name?: string
  email?: string
  tel?: number
  profile?: string
  nationality?: string | StaticImport
  image?: string | StaticImport
  locationCompany?: string
  certification?: string
  setShowShareView?: any
  showShareView?: boolean
  showEditView?: boolean
  setShowEditView?: any
}
