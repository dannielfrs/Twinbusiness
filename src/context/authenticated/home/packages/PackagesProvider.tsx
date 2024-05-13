import { useEffect, useState } from 'react'
import { PackagesContext } from './PackagesContext'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { postCatalogsService } from '@/services/axios/authenticated/general/general'

export const PackagesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [memberships, setmemberships] = useState([])

  useEffect(() => {
    getMemberships()
  }, [])

  const getMemberships = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('style', 'select')
      form.append('catalogs[0][name]', 'membership')
      const response = await postCatalogsService(form)
      setmemberships(response.data.records.membership)
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PackagesContext.Provider value={{
      loading,
      memberships
    }}>
      {children}
    </PackagesContext.Provider>
  )
}
