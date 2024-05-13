import { useContext } from "react"
import styles from './styles.module.scss'
import { ModalLarge } from "@/components/molecules/ModalLarge/ModalLarge"
import { GoogleMaps } from "@/components/molecules/GoogleMaps/GoogleMaps"
import { Alert4 } from '@/components/molecules/Alert4/Alert4'
import { LocationContext } from "@/context/authenticated/events/register/createEvent/location/LocationContext"

interface ComponentProps {
  onHide?: () => any
}

export const ModalLocation: React.FC<ComponentProps> = ({ onHide = () => { } }) => {

  const { savedSuccess, savedError, setSavedError } = useContext(LocationContext)

  return (
    <>
      <ModalLarge>
        <GoogleMaps
          onHide={onHide}
        />
      </ModalLarge>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='UBICACIÓN GUARDADA CON ÉXITO'
        labelButton='Ok'
        onClickButton={() => onHide()}
      />
      <Alert4
        visible={savedError}
        icon='error'
        title='¡OCURRIÓ UN ERROR AL GUARDAR LA UBICACIÓN!'
        labelButton='Reintentar'
        onClickButton={() => setSavedError(false)}
      />
    </>
  )
}
