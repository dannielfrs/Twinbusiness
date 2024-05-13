import { useEffect, useRef, useState, memo, useContext } from "react"
import styles from './styles.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Button from "@/components/molecules/Button/Button/Button"
import InputText from '@/components/molecules/InputText/InputText'
import { GoogleMap, Marker, Autocomplete, useJsApiLoader } from "@react-google-maps/api"
import search from '@/../public/images/icons/search.svg'
import { LocationContext } from "@/context/authenticated/events/register/createEvent/location/LocationContext"

interface ComponentProps {
  onHide?: () => any
}

export const GoogleMaps: React.FC<ComponentProps> = ({ onHide }) => {

  const { loading, data, createItem } = useContext(LocationContext)
  const methods = useForm()
  const autocompleteRef = useRef<any>()
  const [address, setAddress] = useState<string>('')
  const [marker, setMarker] = useState<any>(null)
  const [center, setCenter] = useState<any>({ lat: 20.709952, lng: -103.347366 })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_GOOGLEMAPS as string,
    libraries: ["places"]
  })

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setAddress(data.address)
      setMarker({ lat: data.lat, lng: data.lng })
      setCenter({ lat: data.lat, lng: data.lng })
    }
  }, [data])

  const onClickMap = (e: google.maps.MapMouseEvent) => {
    setAddress('')
    setMarker({ lat: e.latLng?.lat(), lng: e.latLng?.lng() })
  }

  const handlePlaceChanged = () => {
    const autocompleteInstance = autocompleteRef.current
    if (autocompleteInstance !== null) {
      const selectedPlace = autocompleteInstance.getPlace()
      setAddress(selectedPlace.formatted_address)
      setMarker({ lat: selectedPlace.geometry.location.lat(), lng: selectedPlace.geometry.location.lng() })
      setCenter({ lat: selectedPlace.geometry.location.lat(), lng: selectedPlace.geometry.location.lng() })
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createItem(data.address, marker.lat, marker.lng)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.googlemaps}>
        {isLoaded &&
          <>
            <div className={styles.googlemaps_header}>
              <div className={styles.googlemaps_header_title}>
                <h2>SUBIR UBICACIÓN</h2>
                <Autocomplete
                  onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                  onPlaceChanged={handlePlaceChanged}
                >
                  <InputText
                    name='search'
                    placeholder='Buscar'
                    icon={search}
                    iconPosRight
                    variant='searchLeft'
                    height='40px'
                    rules={{ required: false }}
                  />
                </Autocomplete>
              </div>
              <div>
                <div style={{ width: '50%' }}>
                  <InputText
                    name='address'
                    placeholder='Dirección completa'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    variant='gray'
                    rules={{ required: true }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.googlemaps_body}>
              <GoogleMap
                mapContainerClassName={styles.googlemaps_frame}
                center={center}
                zoom={14}
                // version="weekly"
                onClick={onClickMap}
              >
                {marker && <Marker position={marker} />}
              </GoogleMap>
            </div>
            <div className={styles.googlemaps_footer}>
              <div className={styles.btndv}>
                <Button
                  type='button'
                  variant="grayForm"
                  onClick={onHide}
                  borderRadius="10px"
                  height="50px"
                >
                  Regresar
                </Button>
              </div>
              <div className={styles.btndv}>
                <Button
                  variant="blackForm"
                  borderRadius="10px"
                  height="50px"
                >
                  Guardar
                </Button>
              </div>
            </div>
          </>
        }
      </div>
    </FormHookProvider>
  )
}
