import { useContext, useEffect, useState } from 'react'
import { InternalMapContext } from './InternalMapContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess, closeAlert } from '@/utilities/alerts'
import { getDataService } from '@/services/axios/authenticated/events/register/createEvent/zone/ticket'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { getMap, setMap, setColor, getZone } from '@/services/axios/authenticated/events/register/createEvent/createEvent'

export const InternalMapProvider = ({ children }: { children: React.ReactNode }) => {

  const { uuidEvent } = useContext(EventStepContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState({})
  const [zonesData, setZonesData] = useState<any[]>([])
  const [ticketsData, setTicketsData] = useState<any[]>([])
  const [dataTableZone, setDataTableZone] = useState<any[]>([])
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [closeForm, setCloseForm] = useState<boolean>(false)

  useEffect(() => {
    getData()
    getZonesData()
    getTicketsData()
  }, [])

  useEffect(() => {
    const zonesDataArray: any[] = [...zonesData]
    zonesDataArray.forEach((item: any, index: number) => {
      const [result] = ticketsData.filter(element => element.number === item.number)
      if (result) zonesDataArray[index] = { ...item, image: result.image }
    })
    setDataTableZone(zonesDataArray)
  }, [ticketsData, zonesData])

  const getData = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('event', uuidEvent)
      const response = await getMap(form)
      setData((prevState) => ({ ...prevState, ...response.data.record }))
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getZonesData = async () => {
    try {
      const form = new FormData()
      form.append('event', uuidEvent)
      const response = await getZone(form)
      setZonesData(response.data.record)
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getTicketsData = async () => {
    try {
      const form = new FormData()
      form.append('event', uuidEvent)
      const response = await getDataService(form)
      setTicketsData(response.data.record.tickets)
      setData((prevState) => ({ ...prevState, tickets: response.data.record.total }))
      return response.data.record.tickets
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveZoneColor = async (color: string, id: string) => {
    try {
      const form = new FormData()
      form.append('_method', 'put')
      form.append('color', color)
      const response = await setColor(form, id)
      getZonesData()
      return response
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const saveInternalMap = async (imageFile: any, zones: string = '1') => {
    try {
      const form = new FormData()
      form.append('event', uuidEvent)
      form.append('different_zones', zones)
      if (imageFile) form.append('image', imageFile)
      const response = await setMap(form)
      setSavedSuccess(true)
      setTimeout(() => {
        setSavedSuccess(false)
        setCloseForm(true)
        closeAlert()
      }, 2000)
      return response.data.message
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <InternalMapContext.Provider value={{
      loading,
      data,
      dataTableZone,
      saveZoneColor,
      saveInternalMap,
      savedSuccess,
      closeForm,
    }}>
      {children}
    </InternalMapContext.Provider>
  )
}
