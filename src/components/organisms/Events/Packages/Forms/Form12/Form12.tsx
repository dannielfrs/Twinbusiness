'use client'

import { useContext, useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import styles from './Form12.module.scss'
import BackBlackCss from '@/components/molecules/BackBlackCss/BackBlackCss'
import Button from '@/components/molecules/Button/Button/Button'
import Ticket from '../Ticket/Ticket'
import InputText from '@/components/molecules/InputText/InputText'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import Image from 'next/image'
import qr from '@/../public/images/icons/qr.png'
import mexico from '@/../public/images/icons/Peso Mexicano.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { TicketPreviewContext } from '@/context/authenticated/events/register/createEvent/zone/ticketPreview/TicketPreviewContext'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { Step10Context } from '@/context/authenticated/events/register/createEvent/step10/Step10Context'

interface ComponentProps {
  onClickBack: () => void
}

const Form12: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { getStep10 } = useContext(Step10Context)
  const { loading, data } = useContext(TicketPreviewContext)
  const { setActiveStep } = useContext(EventStepContext)
  const methods = useForm()

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      for (const propertyName in data.back) {
        methods.setValue(propertyName, data.back[propertyName])
      }
    }
  }, [data])

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setActiveStep(10)
    getStep10()
  }

  const inputTextSede = {
    name: 'where_is',
    label: 'SEDE DEL EVENTO',
    readOnly: true,
    placeholder: '',
    required: false,
    variant: 'tickets'
  }

  const inputTextAddress = {
    name: 'address',
    label: 'DIRECCION DEL EVENTO',
    placeholder: '',
    readOnly: true,
    required: false,
    variant: 'tickets'
  }

  const inputTextAccess = {
    name: 'port_int_zone',
    label: 'PUERTA DE INGRESO',
    placeholder: '',
    required: false,
    variant: 'tickets',
    readOnly: true
  }

  const AssignedSeat = {
    name: 'seat',
    label: 'ASIENTO ASIGNADO',
    placeholder: '',
    required: false,
    readOnly: true,
    variant: 'tickets',
  }

  const TicketPrice = {
    name: 'price',
    label: 'PRECIO DEL BOLETO',
    placeholder: '',
    required: false,
    readOnly: true,
    variant: 'tickets',
  }

  const InputLink = {
    name: 'link',
    label: 'LINK DE STREAMING',
    readOnly: true,
    placeholder: '',
    required: false,
    variant: 'tickets',
  }

  const FolioToken = {
    name: 'token_nft',
    label: 'FOLIO O TOKEN (NFT)',
    readOnly: true,
    placeholder: '',
    required: false,
    variant: 'tickets'
  }

  const Zone = {
    name: 'name_zone',
    label: 'ZONA',
    readOnly: true,
    placeholder: '',
    required: false,
    variant: 'tickets'
  }

  const inputPassword = {
    name: 'password',
    label: 'STREAM KEY, ES SOLO PARA UN DISPOSITIVO',
    placeholder: '*********',
    feedback: false,
    readOnly: true,
    visible: true,
    icon: false,
    variant: 'primary'
  }

  return (
    <div className={styles.TicketPreview}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.ContRight}>
            <p className={styles.title}>Vista previa de boletos zona general</p>
            <div className={styles.ticket} style={{ display: 'flex' }}>
              <div className={styles.front}>
                <p className={styles.title_front}>FRENTE</p>
                <Ticket
                  title={data.front?.name}
                  date={data.front?.date}
                  door={data.front?.port_int_zone}
                  zone={data.front?.name_zone}
                  hourStart={data.front?.start_time}
                  endHour={data.front?.end_time}
                  image={data.front?.image.url}
                  dateEnd={data.front?.date}
                  dateStart={data.front?.date}
                />
              </div>
              <div className={styles.back}>
                <p className={styles.title_back}>REVERSO</p>
                <div className={styles.ticketBack}>
                  <div className={styles.bothButton}>
                    <div className={styles.buttonMap} style={{ width: '135px' }}>
                      <Button>MAPA INTERNO</Button>
                    </div>
                    <div className={styles.buttonMap} style={{ width: '135px' }}>
                      <Button >COMO LLEGAR</Button>
                    </div>
                  </div>
                  <div className={styles.inputs}>
                    <InputText height='20px' {...inputTextSede} />
                    <InputText height='20px' {...inputTextAddress} />
                    <InputText height='20px' {...inputTextAccess} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ width: '50%' }}>
                        <InputText height='20px' {...AssignedSeat} />
                      </div>
                      <div style={{ width: '50%' }}>
                        <InputText height='20px' {...Zone} />
                      </div>
                    </div>
                    <InputText height='20px' {...TicketPrice} />
                    <InputText height='20px' {...InputLink} />
                    <div className={styles.inputCode} style={{ height: '20px' }}>
                      <InputPassword  {...inputPassword} />
                    </div>
                    <div className={styles.bothinput} style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ width: '50%' }}>
                        <InputText height='20px' {...FolioToken} />
                      </div>
                      <div className={styles.bothcity}>
                        <p className={styles.text}>Adquirido en:</p>
                        <div className={styles.city}>
                          <Image alt='flag' src={mexico} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.circle}></div>
                  <div className={styles.circleRight}></div>
                  <div className={styles.contBottom}>
                    <div className={styles.contLeft}>
                      <div className={styles.input_text}>
                        <InputTextArea
                          name='restrictions'
                          label='Restricciones del evento'
                          placeholder=''
                          defaultValue='NO BEBIDAS NO CAMARAS NO NIÑOS'
                          readOnly
                        />
                      </div>
                      <div className={styles.date}>
                        <div className={styles.left}>
                          <p className={styles.textDate}>FECHA</p>
                          <div className={styles.start}>
                            <p className={styles.textStart}>INICIA</p>
                            <p className={styles.dateText}>{data.front?.date}</p>
                          </div>
                          <div className={styles.start}>
                            <p className={styles.textStart}>FINALIZA</p>
                            <p className={styles.dateText}>{data.front?.date}</p>
                          </div>
                        </div>
                        <div className={styles.right}>
                          <p className={styles.textHour}>HORA</p>
                          <p className={styles.startHour}>{data.front?.start_time}</p>
                          <p className={styles.endHour}>{data.front?.end_time}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ImageQR}>
                      <Image src={qr} alt='qr_code' />
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
          </div>
        </FormHookProvider>
      </BackBlackCss>
    </div>
  )
}

export default Form12
