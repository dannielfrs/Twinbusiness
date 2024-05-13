import { useContext, useEffect, useState } from 'react'
import { ModalWindowContext } from './ModalWindowContext'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
// import { formatTime } from '@/utilities/formatters'
// import { postCatalogsService } from '@/services/axios/authenticated/general/general'
import { getDataService } from '@/services/axios/authenticated/events/register/createEvent/zone/ticket'
import { setSponsorService, getMap, setMap, setColor, getZone, deleteZone, deleteSponsorService } from '@/services/axios/authenticated/events/register/createEvent/createEvent'
// import { backStepService } from '@/services/axios/authenticated/events/company'
// import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

export const ModalWindowProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // const { getStepEvent, setActiveStep } = useContext(EventStepContext)
  const [dataImgText, setDataImgText] = useState([])
  const [dataSponsor, setDataSponsor] = useState<any>([])
  const [dataTableZone, setDataTableZone] = useState<any[]>([])
  const [zonesData, setZonesData] = useState<any[]>([])
  const [ticketsData, setTicketsData] = useState<any[]>([])
  const [imgForm, setImgForm] = useState<any>()
  const [imgFormSaved, setImgFormSaved] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [eventTypeOptions, setEventTypeOptions] = useState([])
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false)
  const [savedError, setSavedError] = useState<boolean>(false)
  const [closeForm, setCloseForm] = useState<boolean>(false)
  const { uuidEvent } = useContext(EventStepContext)

  useEffect(() => {
    getTableMap()
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

  const setModalWindow = async () => {
    let answer = true
    dataSponsor.map((item: any, key: any) => {
      let form = new FormData()

      const sendInfo = async (item: any) => {
        form.append('name', item.name);
        form.append('number', key.toString());
        form.append('logo', item.multimedia.url);
        try {
          let response = await setSponsorService(form, uuidEvent)
          if (response?.status != 200) {
            return false;
          }
        } catch (error) {
          return false;
        }
      }
      if(typeof item.multimedia.url !== 'string' && item.name){
        let response = sendInfo(item)
        response.then((res) => {
          if (res == false) {
            answer = false;
            return false;
          }
        })
      }
    })
    return answer;
  }

  const setZoneColor = async (color: string, id: string) => {
    let response = true
    let form = new FormData()
    form.append('color', color);
    form.append('_method', 'put');
    try {
      let response = await setColor(form, id)
      if (response?.status != 200) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return response;
  }

  const eliminateZone = async (id: string) => {
    let response = true
    let form = new FormData()
    form.append('_method', 'delete');
    try {
      let response = await deleteZone(form, id)
      if (response?.status != 200) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return response;
  }

  const getTableMap = async () => {
    try {
      let form = new FormData()
      form.append('event', uuidEvent);
      const response = await getZone(form)
      let record = response.data.record
      setZonesData(record)
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const getfomrMap = async () => {
    try {
      let form = new FormData()
      form.append('event', uuidEvent);
      const response = await getMap(form)

      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      // setLoading(false)
    }
  }

  const saveInternalMap = async (zones = '1', img: any) => {
    try {
      const form = new FormData()
      form.append('event', uuidEvent)
      form.append('different_zones', zones)
      form.append('image', imgForm)
      const response = await setMap(form)
      setSavedSuccess(true)
      setTimeout(() => {
        setSavedSuccess(false)
        setCloseForm(true)
      }, 2000)
      return response.data.message
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteSponsor = async (id: string) => {
    try {
      let form = new FormData()
      form.append('id', id);
      form.append('_method', 'delete');
      const response = await deleteSponsorService(form, uuidEvent)
      // setLoading(false)
      // setTimeout(() => {
      //   setLoading(true)
      // }, 1);
      // getModalWindow()
      return response.data.record
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      // setLoading(false)
    }
  }

  const getTicketsData = async () => {
    try {
      let form = new FormData()
      form.append('event', uuidEvent)
      const response = await getDataService(form)
      setTicketsData(response.data.record.tickets)
      return response.data.record.tickets
    } catch (error: any) {
      alertError('Error', error)
    } finally {
      // setLoading(false)
    }
  }

  return (
    <ModalWindowContext.Provider value={{
      loading,
      dataImgText,
      setDataImgText,
      eventTypeOptions,
      setModalWindow,
      dataTableZone,
      getTableMap,
      getfomrMap,
      setZoneColor,
      deleteSponsor,
      eliminateZone,
      dataSponsor,
      saveInternalMap,
      imgForm,
      setImgForm,
      imgFormSaved,
      setImgFormSaved,
      setDataSponsor,
      savedSuccess,
      savedError,
      closeForm,
    }}>
      {children}
    </ModalWindowContext.Provider>
  )
}
