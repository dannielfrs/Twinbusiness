import { useContext, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Map from "./Map/Map"
import Button from "@/components/molecules/Button/Button/Button"
import Modal from "@/components/layouts/Modal/Modal"
import Dates from "./Dates/Dates"
import ModalAlert from "@/components/layouts/ModalAlert/ModalAlert"
import styles from './styles.module.scss'
import { ModalWindowContext } from '@/context/authenticated/events/register/createEvent/modalWindow/ModalWindowContext'

interface ComponentProps {
  type?: string
  closeModal?: any
}

const ModalWindow: React.FC<ComponentProps> = ({ type, closeModal }) => {

  const { loading, setModalWindow } = useContext(ModalWindowContext)
  const methods = useForm()
  const [step, setStep] = useState(1)
  const [showInfo, setShowModalInfo] = useState(false)
  const [typeAlert, setTypeAlert] = useState('success')
  const [textAlert, setTextAlert] = useState('')
  const [textButton, setTextButton] = useState('')

  const onSubmit: SubmitHandler<FieldValues> = () => {
    let successMessage = '';
    let errorMessage = '';
    switch (type) {
      case 'map':
        setShowModalInfo(true);
        successMessage = '¡ Tu información se guardó con éxito';
        errorMessage = '¡OCURRIÓ UN ERROR AL GUARDAR EL MAPA!';
        setTextAlert(successMessage);
        break;
      case 'dates':
        setShowModalInfo(true);
        successMessage = '¡EVENTOS RECURRENTES GUARDADOS CON ÉXITO!';
        errorMessage = '¡OCURRIÓ UN ERROR AL GUARDAR LOS EVENTOS RECURRENTES!';
        setTextAlert(successMessage);
        break;
      case 'sponsor':
        let answer = setModalWindow()
        answer.then((res: any) => {
          setShowModalInfo(true); // abre el modal de se guardo con exito o de error, depende de los textos para que abra uno o el otro
          if (res) {
            // setTypeAlert('success')
            successMessage = 'PATROCINADORES GUARDADOS CON ÉXITO';
            setTextButton('OK')
            setTextAlert(successMessage);
            setTimeout(() => {
              closeModal('') //cierra el modal y te regresa a las opviones de creacion de mapa
            }, 2000)
    
          } else {
            // setTypeAlert('error')
            errorMessage = '¡OCURRIÓ UN ERROR AL GUARDAR LOS PATROCINADORES!';
            setTextAlert(errorMessage);
          }
        })
        break;
      default:
        setShowModalInfo(true);
        setTextAlert(errorMessage);
        setTypeAlert('error')
        setTextButton('Reintentar')
        break;
    }

    if (typeAlert !== 'success') {
      if (type != 'internalMapUpload') {
        setShowModalInfo(true);
        setTextAlert(successMessage);
        setTypeAlert('success')
        setTextButton('OK')
        setTimeout(() => {
          closeModal('')
        }, 2000)
      }
    } else {
      setTextAlert(errorMessage);
      setTypeAlert('error')
      setTextButton('Reintentar')
    }
  }

  return (
    <div className={styles.Modal}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={type === 'editmap2' ? styles.editMapContent : styles.modalconten}>
          {type === 'map' && <Map />}
          {type === 'dates' && <Dates />}
          {/* {type === 'sponsor' && <Sponsors />} */}
        </div>
        {/* {type === 'internalMapUpload' &&
          <Form15
            mode='internalMapUpload'
            setStep={setStep}
            selectZone={false}
          />
        }
        {type === 'internalMapSelect' &&
          <Form15
            mode='internalMapSelect'
            setStep={setStep}
            selectZone={true}
          />
        } */}
        <div className={type === 'editmap2' ? styles.editMapBtn : styles.divBtns} style={{ border: '1px solid red' }}>
          <div></div>
          <div className={styles.btndv}>
            <Button
              type='button'
              variant="grayForm"
              onClick={() => closeModal('')}
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
      </FormHookProvider>
      <Modal
        title=''
        content={<ModalAlert
          text={textAlert}
          buttonText={textButton}
          variant={typeAlert}
          closeModal={() => setShowModalInfo(false)} />}
        buttons={[]}
        show={showInfo}
        size="medium"
        variant="white"
      />
    </div>
  )
}

export default ModalWindow
