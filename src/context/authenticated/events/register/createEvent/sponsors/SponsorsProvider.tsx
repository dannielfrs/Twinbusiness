import { useContext, useEffect, useState } from 'react'
import { SponsorsContext } from './SponsorsContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import { getSponsorService, setSponsorService, deleteSponsorService } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const SponsorsProvider = ({ children }: { children: React.ReactNode }) => {

  const { uuidEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any[]>([])
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [closeSponsors, setCloseSponsors] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const response = await getSponsorService(uuidEvent)
      setData(response.data.records)
      return response.data.records
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveData = async (sponsorsData: any[]) => {
    sponsorsData.forEach(item => {
      if (item.id === '' && item.logo) {
        const createItem = async () => {
          try {
            let form = new FormData()
            form.append('name', item.name)
            form.append('number', item.number)
            form.append('logo', item.logo)
            const response = await setSponsorService(form, uuidEvent)
            getData()
            setSavedSuccess(true)
            setTimeout(() => {
              setSavedSuccess(false)
              setCloseSponsors(true)
            }, 2000)
          } catch (error: any) {
            alertError('Error', error)
          }
        }
        createItem()
      } else if (item.id && (item.logo || item.name)) {
        const updateItem = async () => {
          try {
            let form = new FormData()
            form.append('_method', 'put')
            form.append('id', item.id)
            form.append('number', item.number)
            form.append('name', item.name)
            if (item.logo) form.append('logo', item.logo)
            const response = await setSponsorService(form, uuidEvent)
            getData()
            setSavedSuccess(true)
            setTimeout(() => {
              setSavedSuccess(false)
              setCloseSponsors(true)
            }, 2000)
          } catch (error: any) {
            alertError('Error', error)
          }
        }
        updateItem()
      }
    })
  }

  const deleteItem = async (id: string) => {
    try {
      let form = new FormData()
      form.append('_method', 'delete')
      form.append('id', id)
      const response = await deleteSponsorService(form, uuidEvent)
      getData()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SponsorsContext.Provider value={{
      loading,
      data,
      saveData,
      deleteItem,
      savedSuccess,
      closeSponsors,
    }}>
      {children}
    </SponsorsContext.Provider>
  )
}
