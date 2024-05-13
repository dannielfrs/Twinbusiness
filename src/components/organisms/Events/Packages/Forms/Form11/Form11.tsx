'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './Form11.module.scss'
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import Button from '@/components/molecules/Button/Button/Button'
import InputText from '@/components/molecules/InputText/InputText'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import FileUpload from '@/components/molecules/FileUpload/FileUpload'
import ChargeImg from '@/components/molecules/ChargeImg/ChargeImg'
import Image from 'next/image'
import qr from '@/../public/images/icons/qr.png'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import BackBlackCss from '@/components/molecules/BackBlackCss/BackBlackCss'
import { Step11Context } from '@/context/authenticated/events/register/createEvent/step11/Step11Context'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

interface ComponentProps {
  onClickBack: () => void
}

const Form11: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data, setStep11 } = useContext(Step11Context)
  const methods = useForm()
  const { setActiveStep } = useContext(EventStepContext)
  const [type, setType] = useState('1')
  const [imageUrl, setImageUrl] = useState<string>()
  const [imageFile, setImageFile] = useState<File>()

  const onSubmit = () => {
    if (typeof imageFile == 'object') {
      setStep11(imageFile)
    } else if (typeof imageUrl == 'string') {
      setActiveStep(12)
    }
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      for (const propertyName in data.back) {
        methods.setValue(propertyName, data.back[propertyName])
      }
      setImageUrl(data.front.image?.url)
      methods.setValue('name', data.front.name)
      methods.setValue('start_date', data.front.date)
      methods.setValue('end_date', data.front.date)
      methods.setValue('start_time', data.front.start_time)
      methods.setValue('end_time', data.front.end_time)
    }
  }, [data])

  const inputFileID = {
    name: 'idfile',
    label: '',
    required: false,
    variant: 'black',
    label2: 'Subir excel'
  }

  const inputTextSede = {
    name: 'where_is',
    label: 'SEDE DEL EVENTO',
    placeholder: 'Sede del evento',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true
  }

  const inputTextAddress = {
    name: 'address',
    label: 'DIRECCION DEL EVENTO',
    placeholder: 'Dirección del evento',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const inputTextAccess = {
    name: 'port_int_zone',
    label: 'PUERTA DE INGRESO',
    placeholder: 'Puerta de ingreso',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const AssignedSeat = {
    name: 'seat',
    label: 'ASIENTO ASIGNADO',
    placeholder: 'Asiento asignado',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const Zone = {
    name: 'name_zone',
    label: 'ZONA',
    placeholder: 'Zona',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const TicketPrice = {
    name: 'price',
    label: 'PRECIO DEL BOLETO',
    placeholder: 'Precio del boleto',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const InputLink = {
    name: 'link',
    label: 'LINK DE STREAMING',
    placeholder: 'Link de streaming',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const FolioToken = {
    name: 'token_nft',
    label: 'FOLIO O TOKEN (NFT)',
    placeholder: 'Folio o token',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const InputEvent = {
    name: 'name',
    label: 'NOMBRE DEL EVENTO',
    placeholder: 'Nombre del evento',
    rules: { required: false },
    required: false,
    variant: 'tickets',
    disabled: true,
  }

  const InputDate = {
    name: 'start_date',
    label: 'FECHA',
    placeholder: 'Fecha de inicio',
    rules: { required: false },
    required: false,
    variant: 'input_mini',
    disabled: true,
  }

  const InputDateF = {
    name: 'end_date',
    placeholder: 'Fecha de finalización',
    required: false,
    rules: { required: false },
    variant: 'input_mini',
    disabled: true,
  }

  const InputHour = {
    name: 'start_time',
    label: 'HORA',
    placeholder: 'Hora de inicio',
    rules: { required: false },
    required: false,
    variant: 'input_mini',
    disabled: true,
  }

  const InputHourF = {
    name: 'end_time',
    placeholder: 'Hora de finalización',
    rules: { required: false },
    required: false,
    variant: 'input_mini',
    disabled: true,
  }

  const inputPassword = {
    name: 'password',
    label: 'STREAM KEY, ES SOLO PARA UN DISPOSITIVO',
    value: 'twin123456',
    placeholder: '*********',
    feedback: false,
    rules: { required: false },
    visible: true,
    icon: false,
    disabled: true,
    variant: 'primary'
  }

  return (
    <div className={styles.TicketEditor}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.contRight}>
            <div style={{ alignSelf: 'center' }}>
              <p className={styles.title}>Editor de boletos zona general</p>
              <div className={styles.bothRadio}>
                <div>¿Cómo desea subir sus boletos?</div>
                <RadioButton
                  name='ticket_type'
                  inputId='single_ticket'
                  value='single_ticket'
                  defaultValue='single_ticket'
                  label='Boleto unitario'
                  rules={{ required: false }}
                  variant='primary'
                />
              </div>
              <div className={styles.ticket} style={{ display: type === '1' ? 'flex' : 'none' }}>
                <div className={styles.front}>
                  <p className={styles.title_front}>FRENTE</p>
                  <div className={styles.ticketFront}>
                    <div>
                      <div className={styles.card}>
                        <ChargeImg
                          //@ts-ignore
                          setImg={setImageUrl}
                          setFile={setImageFile}
                          defaultImage={imageUrl}
                          multiple={false}
                          accept='image/png, image/jpg, image/jpeg'
                          message='Subir foto sin texto, ya que la descripción va en una segunda capa editable'
                          placeholder='Arrastra y suelta una imagen o video'
                          buttonLabel='Buscar en el dispositivo'
                          variant='primary'
                          width='100%'
                          height='505px'
                        />
                      </div>
                    </div>
                    <div className={styles.contBottom}>
                      <div className={styles.left}>
                        <div style={{ width: '203px' }}>
                          <InputText className={styles.inputEvent} height='25px' {...InputEvent} />
                        </div>
                        <div className={styles.startDate}>
                          <p className={styles.titleStart}>INICIA</p>
                          <InputText height='15px' {...InputDate} />
                          <InputText height='15px' {...InputHour} />
                        </div>
                        <div className={styles.startDate}>
                          <p className={styles.titleStart}>FINALIZA</p>
                          <InputText height='15px' {...InputDateF} />
                          <InputText height='15px' {...InputHourF} />
                        </div>
                      </div>
                      <div className={styles.ImageQR}>
                        <Image src={qr} alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.back}>
                  <p className={styles.title_back}>REVERSO</p>
                  <div className={styles.ticketBack}>
                    <div className={styles.bothButton}>
                      <div className={styles.buttonMap} style={{ width: '135px' }}>
                        <Button >MAPA INTERNO</Button>
                      </div>
                      <div className={styles.buttonMap} style={{ width: '135px' }}>
                        <Button >COMO LLEGAR</Button>
                      </div>
                    </div>
                    <div className={styles.inputs}>
                      <InputText {...inputTextSede} />
                      <InputText {...inputTextAddress} />
                      <InputText {...inputTextAccess} />
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <div style={{ width: '50%' }}>
                          <InputText {...AssignedSeat} />
                        </div>
                        <div style={{ width: '50%' }}>
                          <InputText {...Zone} />
                        </div>
                      </div>
                      <InputText {...TicketPrice} />
                      <InputText {...InputLink} />
                      <div className={styles.inputCode} style={{ height: '30px', marginTop: '10px', }}>
                        <InputPassword  {...inputPassword} />
                      </div>
                      <InputText height='30px' {...FolioToken} />
                    </div>
                    <div className={styles.contBottom}>
                      <div className={styles.input_text}>
                        <InputTextArea
                          name='restrictions'
                          label='RESTRICCIONES/AVISOS DEL EVENTO'
                          placeholder=''
                          disabled={true}
                        />
                      </div>
                      <div className={styles.ImageQR}>
                        <Image src={qr} alt='' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.excel} style={{ display: type === '2' ? 'block' : 'none' }}>
                <div className={styles.textClose}>
                  <p className={styles.formato}>Formato de carga masiva</p>
                  <p className={styles.close}>x</p>
                </div>
                <div className={styles.uploadexcel}>
                  <p style={{ fontSize: '14px', width: '50%' }}>Suba sus servicios con el botón <b>subir excel</b>. Si no tiene el formato, puede descargarlo con el botón <b>descargar formato</b>.</p>
                  <div style={{ width: '165px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    <Button variant='backGray' height='30px'>Descargar formato</Button>
                    <FileUpload {...inputFileID} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divButtons}>
            <div className={styles.divButtonsAbsolute}>
              <div className={styles.btns}>
                <Button
                  type='button'
                  variant="grayForm"
                  onClick={onClickBack}
                  height='10px'
                  borderRadius='10px'
                >
                  Regresar
                </Button>
              </div>
              <div className={styles.btns}>
                <p style={{ fontSize: '16px', textAlign: 'end' }}>Ir a la siguiente sección</p>
                <Button
                  variant="blackForm"
                  borderRadius='10px'
                >
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        </FormHookProvider>
      </BackBlackCss>
    </div>
  )
}

export default Form11