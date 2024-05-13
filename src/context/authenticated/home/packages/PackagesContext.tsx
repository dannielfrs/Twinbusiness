import { createContext } from 'react'

interface PackagesContextType {
  loading: boolean
  memberships: any[]
}

export const PackagesContext = createContext<PackagesContextType>({
  loading: true,
  memberships: [],
})
