import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styles from './styles.module.scss'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss"
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import Button from "@/components/molecules/Button/Button/Button"
import InputText from '@/components/molecules/InputText/InputText'
import { Dropdown } from "@/components/molecules/Dropdown/Dropdown"
import { ModalEmails } from "@/components/organisms/Events/Packages/Forms/Form3/ModalEmails/ModalEmails"
import { ModalPhoneNumber } from "@/components/organisms/Events/Packages/Forms/Form3/ModalPhoneNumber/ModalPhoneNumber"
import { ModalSocialMedia } from "@/components/organisms/Events/Packages/Forms/Form3/ModalSocialMedia/ModalSocialMedia"
import { ModalWebPages } from "@/components/organisms/Events/Packages/Forms/Form3/ModalWebPages/ModalWebPages"
import { EmailsProvider } from '@/context/authenticated/events/register/emails'
import { PhoneNumberProvider } from '@/context/authenticated/events/register/phoneNumber'
import { SocialMediaProvider } from '@/context/authenticated/events/register/socialMedia'
import { WebPagesProvider } from '@/context/authenticated/events/register/webPages'
import { WebEventContext } from '@/context/authenticated/events/webEvent'
import { formatTime } from "@/utilities/formatters"
import { PromoterContactsContext } from "@/context/authenticated/events/register/promoterContacts/PromoterContactsContext"

interface ComponentProps {
  onClickBack: () => void
}

const Form3: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { dataFourthStep, getCountryOptions, getStateOptions, setFourthStep } = useContext(WebEventContext)
  const { data, getData } = useContext(PromoterContactsContext)
  const methods = useForm()
  const [countryOptions, setCountryOptions] = useState<any[]>([])
  const [stateOptions, setStateOptions] = useState<any[]>([])
  const [showModalPhoneNumber, setShowModalPhoneNumber] = useState(false)
  const [showModalEmails, setShowModalEmails] = useState(false)
  const [showModalWebPages, setShowModalWebPages] = useState(false)
  const [showModalSocialMedia, setShowModalSocialMedia] = useState(false)

  useEffect(() => {
    if (Object.keys(dataFourthStep).length > 0) {
      for (const propertyName in dataFourthStep) {
        if (propertyName === 'country' || propertyName === 'state') {
          methods.setValue(propertyName, dataFourthStep[propertyName]?.id)
        } else {
          methods.setValue(propertyName, dataFourthStep[propertyName])
        }
      }
      methods.setValue('continuous_operating_hours_start', formatTime(dataFourthStep.continuous_operating_hours_start))
      methods.setValue('continuous_operating_hours_end', formatTime(dataFourthStep.continuous_operating_hours_end))
      methods.setValue('intermittent_operating_hours_first_start', formatTime(dataFourthStep.intermittent_operating_hours_first_start))
      methods.setValue('intermittent_operating_hours_first_end', formatTime(dataFourthStep.intermittent_operating_hours_first_end))
      methods.setValue('intermittent_operating_hours_second_start', formatTime(dataFourthStep.intermittent_operating_hours_second_start))
      methods.setValue('intermittent_operating_hours_second_end', formatTime(dataFourthStep.intermittent_operating_hours_second_end))
    }
  }, [dataFourthStep])

  useEffect(() => {
    const getOptions = async () => {
      const response = await getCountryOptions()
      setCountryOptions(response.data.records.country)
    }
    getOptions()
  }, [])

  useEffect(() => {
    const getOptions = async () => {
      const response = await getStateOptions()
      setStateOptions(response.data.records.state)
    }
    getOptions()
  }, [])

  useEffect(() => {
    getData()
  }, [showModalPhoneNumber, showModalEmails, showModalWebPages, showModalSocialMedia])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFourthStep(data)
  }

  const input1 = {
    name: 'tradename',
    label: 'Nombre comercial de la promotora',
    placeholder: 'Ej. Empresa Internacional eventos ing.',
    rules: { required: true },
    required: true,
    variant: 'white'
  }

  const input2 = {
    name: 'street',
    label: '',
    placeholder: 'Calle',
    required: false,
    variant: 'white',
    rules: { required: true },
  }

  const input3 = {
    name: 'number',
    label: '',
    placeholder: 'Número',
    required: false,
    variant: 'white',
    rules: { required: true },
  }

  const input4 = {
    name: 'colony',
    label: '',
    placeholder: 'Colonia',
    required: false,
    variant: 'white',
    rules: { required: true },
  }

  const input5 = {
    name: 'postal_code',
    type: 'number',
    label: '',
    placeholder: 'Codigo postal',
    required: false,
    variant: 'white',
    rules: { required: true },
  }

  const input7 = {
    name: 'continuous_operating_hours_start',
    type: 'time',
    label: '',
    placeholder: 'Hora de inicio',
    required: false,
    variant: 'white'
  }

  const input8 = {
    name: 'continuous_operating_hours_end',
    type: 'time',
    label: '',
    placeholder: 'Hora de finalización',
    required: false,
    variant: 'white'
  }

  const input9 = {
    name: 'intermittent_operating_hours_first_start',
    type: 'time',
    label: '',
    placeholder: 'Hora de inicio / Hora de cierre',
    required: false,
    variant: 'white'
  }

  const input10 = {
    name: 'intermittent_operating_hours_first_end',
    type: 'time',
    label: '',
    placeholder: 'Hora de inicio / Hora de cierre',
    required: false,
    variant: 'white'
  }

  const input11 = {
    name: 'intermittent_operating_hours_second_start',
    type: 'time',
    label: '',
    placeholder: 'Hora de inicio / Hora de cierre',
    required: false,
    variant: 'white'
  }

  const input12 = {
    name: 'intermittent_operating_hours_second_end',
    type: 'time',
    label: '',
    placeholder: 'Hora de inicio / Hora de cierre',
    required: false,
    variant: 'white'
  }

  return (
    <div className={styles.ContForm3}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.Form2}>
            <div className={styles.divtitle}>
              <h2>CONTACTOS DE LA PROMOTORA</h2>
            </div>
            <>
              <div className={styles.row1}>
                <div className={styles.col}>
                  <InputText {...input1} />
                </div>
              </div>
              <div className={styles.customLabel}>
                <label><span className={styles.requiredSpan}>* </span>Domicilio de operaciones</label>
              </div>
              <div className={styles.row2_custom1}>
                <div className={styles.col}>
                  <InputText {...input2} />
                </div>
                <div className={styles.col}>
                  <InputText {...input3} />
                </div>
              </div>
              <div className={styles.row2_custom1}>
                <div className={styles.col}>
                  <InputText {...input4} />
                </div>
                <div className={styles.col}>
                  <InputText {...input5} />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.selectInput}>
                  <label className={styles.labelctm}>Estado</label>
                  <Dropdown
                    name='state'
                    options={stateOptions}
                    optionLabel='text'
                    optionValue='id'
                    placeholder='Selecciona...'
                    variant='primary'
                    height='30px'
                    rules={{ required: true }}
                  />
                </div>
                <div className={styles.col}>
                  <div className={styles.selectInput}>
                    <label className={styles.labelctm}>País</label>
                    <Dropdown
                      name='country'
                      options={countryOptions}
                      optionLabel='text'
                      optionValue='id'
                      placeholder='Selecciona...'
                      variant='primary'
                      height='30px'
                      rules={{ required: true }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.customLabel}>
                <label>Horario de atención corrido</label><span className={styles.optionalSpan}> (Opcional)</span>
              </div>
              <div className={styles.row2}>
                <div className={styles.col}>
                  <InputText {...input7} />
                </div>
                <div className={styles.col}>
                  <InputText {...input8} />
                </div>
              </div>
              <div className={styles.customLabel}>
                <label>Horario de atención interrumpido</label><span className={styles.optionalSpan}> (Opcional)</span>
              </div>
              <div className={styles.row2}>
                <div className={`${styles.col} ${styles.form_group}`}>
                  <InputText {...input9} />
                  <InputText {...input10} />
                </div>
                <div className={`${styles.col} ${styles.form_group}`}>
                  <InputText {...input11} />
                  <InputText {...input12} />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.col}>
                  <div className={styles.customLabel}>
                    <label><span className={styles.requiredSpan}>{data.phoneNumber?.length > 0 ? '' : '* '}</span>Números telefónicos de la Empresa</label>
                  </div>
                  <div className={styles.numcompaniesdiv}>
                    <div>
                      {data.phoneNumber?.length > 0 ?
                        data.phoneNumber?.map((item: any) => (
                          <label key={item.id}>{item.phone_number}</label>
                        ))
                        : <label>Números de la empresa</label>
                      }
                    </div>
                    <div className={styles.addLabel} onClick={() => setShowModalPhoneNumber(true)}>+</div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.customLabel}>
                    <label>Correos de la Empresa</label><span className={styles.optionalSpan}> (Opcional)</span>
                  </div>
                  <div className={styles.numcompaniesdiv}>
                    <div>
                      {data.email?.length > 0 ?
                        data.email?.map((item: any) => (
                          <label key={item.id}>{item.email}</label>
                        ))
                        : <label>Correos de la empresa</label>
                      }
                    </div>
                    <div className={styles.addLabel} onClick={() => setShowModalEmails(true)}>+</div>
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.col}>
                  <div className={styles.customLabel}>
                    <label>Pag. Web empresarial</label><span className={styles.optionalSpan}> (Opcional)</span>
                  </div>
                  <div className={styles.numcompaniesdiv}>
                    <div>
                      {data.webPage?.length > 0 ?
                        data.webPage?.map((item: any) => (
                          <label key={item.id}>{item.web}</label>
                        ))
                        : <label>Pag. Web de la empresa</label>
                      }
                    </div>
                    <div className={styles.addLabel} onClick={() => setShowModalWebPages(true)}>+</div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.customLabel}>
                    <label>Redes Sociales de la Empresa</label><span className={styles.optionalSpan}> (Opcional)</span>
                  </div>
                  <div className={styles.numcompaniesdiv}>
                    <div>
                      {data.socialMedia?.length > 0 ?
                        data.socialMedia?.map((item: any) => (
                          <label key={item.id}>{item.url}</label>
                        ))
                        : <label>Redes de la empresa</label>
                      }
                    </div>
                    <div className={styles.addLabel} onClick={() => setShowModalSocialMedia(true)}>+</div>
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.noticelabel}>
                  <label>Estos datos se muestran en una de las 5 lineas de comunicación de tu vitrina</label>
                </div>
              </div>
              <div className={styles.divButtons}>
                <div className={styles.divButtonsAbsolute}>
                  <div className={styles.btns}>
                    <Button
                      type='button'
                      onClick={onClickBack}
                      variant='grayForm'
                      height='10px'
                      borderRadius='10px'
                    >
                      Regresar
                    </Button>
                  </div>
                  <div className={styles.btns}>
                    <p style={{ fontSize: '16px', textAlign: 'end' }}>Ir a la siguiente sección</p>
                    <Button
                      variant='blackForm'
                      borderRadius='10px'
                    >
                      Continuar
                    </Button>
                  </div>
                </div>
              </div>
            </>
          </div>
        </FormHookProvider>
      </BackBlackCss>
      {showModalPhoneNumber &&
        <PhoneNumberProvider>
          <ModalPhoneNumber
            onHide={() => setShowModalPhoneNumber(false)}
          />
        </PhoneNumberProvider>
      }
      {showModalEmails &&
        <EmailsProvider>
          <ModalEmails
            onHide={() => setShowModalEmails(false)}
          />
        </EmailsProvider>
      }
      {showModalWebPages &&
        <WebPagesProvider>
          <ModalWebPages
            onHide={() => setShowModalWebPages(false)}
          />
        </WebPagesProvider>
      }
      {showModalSocialMedia &&
        <SocialMediaProvider>
          <ModalSocialMedia
            onHide={() => setShowModalSocialMedia(false)}
          />
        </SocialMediaProvider>
      }
    </div>
  )
}

export default Form3
