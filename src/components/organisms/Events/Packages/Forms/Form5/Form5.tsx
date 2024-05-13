import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler, FieldValues } from 'react-hook-form'
import InputText from '@/components/molecules/InputText/InputText'
import { Dropdown } from "@/components/molecules/Dropdown/Dropdown"
import { Checkbox } from "@/components/molecules/CheckboxAltern/Checkbox"
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import Button from "@/components/molecules/Button/Button/Button"
import { ModalLinksBackstage } from "@/components/organisms/Events/Packages/Forms/Form5/ModalLinksBackstage/ModalLinksBackstage"
import { ModalLinksStreaming } from "@/components/organisms/Events/Packages/Forms/Form5/ModalLinksStreaming/ModalLinksStreaming"
import iconmap from "@/../../public/images/icons/map-icon.png"
import icocalendar from "@/../../public/images/icons/calendario-01.png"
import styles from './styles.module.scss'
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss"
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import { ModalDates } from "./ModalDates/ModalDates"
import { Step1Context } from '@/context/authenticated/events/register/createEvent/step1/Step1Context'
import { LinkProvider } from "@/context/authenticated/events/register/createEvent/link/LinkProvider"
import { DateProvider } from "@/context/authenticated/events/register/createEvent/date/DateProvider"
import { ModalLocation } from "./ModalLocation/ModalLocation"
import { LocationProvider } from "@/context/authenticated/events/register/createEvent/location/LocationProvider"
import Image from "next/image"

interface ComponentProps {
  onClickBack: () => void
}

const Form5: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data, eventTypeOptions, setStep1 } = useContext(Step1Context)
  const methods = useForm()
  const [showModalLinksBackstage, setShowModalLinksBackstage] = useState(false)
  const [showModalLinksStreaming, setShowModalLinksStreaming] = useState(false)
  const [showModalLocation, setShowModalLocation] = useState(false)
  const [showModalDates, setShowModalDates] = useState(false)

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setStep1(data)
  }

  const inputTextName = {
    label: '¿Nombre del evento?',
    name: 'name',
    placeholder: 'Festival del tequila',
    rules: { required: true },
    required: true,
    variant: 'white'
  }

  const inputTextLocation = {
    label: '¿Dónde es tu evento?',
    name: 'place',
    placeholder: 'Sede o espacio del evento',
    rules: { required: true },
    required: true,
    variant: 'white'
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      for (const propertyName in data) {
        if (propertyName === 'is_in_person' || propertyName === 'is_virtual') {
          methods.setValue(propertyName, data[propertyName] === 1)
        } else if (propertyName === 'type') {
          methods.setValue(propertyName, data[propertyName]?.id)
        } else if (propertyName === 'is_unique') {
          if (data[propertyName] !== null) methods.setValue(propertyName, data[propertyName]?.toString())
        } else if (propertyName === 'where_is') {
          if (data[propertyName] !== null) methods.setValue('place', data[propertyName])
        } else {
          methods.setValue(propertyName, data[propertyName])
        }
      }
    }
  }, [data])

  useEffect(() => {
    if (methods.watch('is_in_person') === true) {
      if (data['where_is'] !== null) methods.setValue('place', data['where_is'])
    }
  }, [methods.watch('is_in_person')])

  return (
    <>
      <div className={styles.ContForm5}>
        <BackBlackCss>
          <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.Form5}>
              <div className={styles.divtitle}>
                <h2>CREACIÓN DE TIPO/SEDE DEL EVENTO</h2>
              </div>
              <div className={styles.customLabel}>
                <span className={styles.requiredSpan}>* </span><label>Sección o tipo de evento</label>
              </div>
              <div className={styles.divRadio}>
                <Dropdown
                  name='type'
                  options={eventTypeOptions}
                  optionLabel='text'
                  optionValue='id'
                  placeholder='Selecciona...'
                  variant='primary'
                  height='35px'
                  rules={{ required: true }}
                />
              </div>
              <div style={{ marginBottom: 30 }}>
                <InputText {...inputTextName} />
              </div>
              <div className={styles.customLabel}>
                <span className={styles.requiredSpan}>* </span><label>¿Tu evento es presencial o virtual?</label>
              </div>
              <div className={`${styles.row2} ${styles.divCheckbox}`}>
                <Checkbox
                  name="is_in_person"
                  inputId='is_in_person'
                  defaultValue={false}
                  label='Presencial'
                  variant='primary'
                  rules={{ required: methods.watch('is_virtual') === false }}
                />
                <Checkbox
                  name="is_virtual"
                  inputId='is_virtual'
                  defaultValue={false}
                  label='Virtual'
                  variant='primary'
                  rules={{ required: methods.watch('is_in_person') === false }}
                />
              </div>
              {methods.watch('is_in_person') === true &&
                <>
                  <div style={{ marginBottom: 30 }}>
                    <InputText {...inputTextLocation} />
                  </div>
                  <div className={styles.row1Custom}>
                    <div className={styles.customLabel}>
                      <span className={styles.requiredSpan}>* </span><label>¿Dirección del evento?</label>
                    </div>
                  </div>
                  <div className={`${styles.divRadio}`}>
                    <div className={styles.row2Custom}>
                      <label>Domicilio del evento</label>
                      <div className={styles.button_upload} onClick={() => setShowModalLocation(true)}>
                        <label>Subir ubicación</label>
                        <Image
                          src={iconmap.src}
                          alt='icon'
                          width={10}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                </>}
              {methods.watch('is_virtual') === true &&
                <>
                  <div className={styles.divLinks}>
                    <div className={styles.customLabel}>
                      <label><span className={styles.requiredSpan}>* </span>¿Subir link de streaming?</label>
                    </div>
                    <div className={styles.divlinks}>
                      <label>Subir o copiar link</label>
                      <div
                        className={styles.addLabel}
                        onClick={() => setShowModalLinksStreaming(true)}
                      >
                        <label>+</label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divLinks}>
                    <div className={styles.customLabel}>
                      <label><span className={styles.requiredSpan}>* </span>¿Subir link si cuenta con transmisión en backstage?</label>
                    </div>
                    <div className={styles.divlinks}>
                      <label>Con transmisión backstage podrás generar NFT’s</label>
                      <div
                        className={styles.addLabel}
                        onClick={() => setShowModalLinksBackstage(true)}
                      >
                        <label>+</label>
                      </div>
                    </div>
                  </div>
                </>}
              <div className={styles.row1Custom}>
                <div className={styles.customLabel}>
                  <span className={styles.requiredSpan}>* </span><label>¿Fecha del evento?</label>
                </div>
              </div>
              <div className={styles.divRadio}>
                <div className={styles.row2Custom3}>
                  <label>Fecha/hora del evento</label>
                  <InputText
                    name='date'
                    type='date'
                    placeholder='Seleccione...'
                    rules={{ required: true }}
                    variant='white'
                  />
                  <InputText
                    name='start_time'
                    type='time'
                    placeholder='Seleccione...'
                    rules={{ required: true }}
                    variant='white'
                  />
                  <InputText
                    name='end_time'
                    type='time'
                    placeholder='Seleccione...'
                    rules={{ required: true }}
                    variant='white'
                  />
                </div>
              </div>
              <div className={styles.row1Custom}>
                <div className={styles.customLabel}>
                  <span className={styles.requiredSpan}>* </span><label>¿Tu evento es único o recurrente?</label>
                </div>
              </div>
              <div className={styles.divRadio}>
                <div className={styles.row2Custom4}>
                  <RadioButton
                    name='is_unique'
                    inputId='1'
                    value='1'
                    defaultValue='1'
                    label='Unico'
                    rules={{ required: true }}
                    variant='primary'
                  />
                  <RadioButton
                    name='is_unique'
                    inputId='0'
                    value='0'
                    defaultValue='1'
                    label='Recurrente'
                    rules={{ required: true }}
                    variant='primary'
                  />
                  <div className={styles.button_upload} onClick={() => setShowModalDates(true)}>
                    <label style={{ color: '#000000' }}>Subir fechas</label>
                    <Image
                      src={icocalendar.src}
                      alt='icon'
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divButtons}>
                <div className={styles.divButtonsAbsolute}>
                  <div className={styles.btns}>
                    <Button
                      type='button'
                      onClick={onClickBack}
                      variant="grayForm"
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
      {showModalLinksBackstage &&
        <LinkProvider>
          <ModalLinksBackstage onHide={() => setShowModalLinksBackstage(false)} />
        </LinkProvider>}
      {showModalLinksStreaming &&
        <LinkProvider>
          <ModalLinksStreaming onHide={() => setShowModalLinksStreaming(false)} />
        </LinkProvider>}
      {showModalLocation &&
        <LocationProvider>
          <ModalLocation onHide={() => setShowModalLocation(false)} />
        </LocationProvider>}
      {showModalDates &&
        <DateProvider>
          <ModalDates onHide={() => setShowModalDates(false)} />
        </DateProvider>}
    </>
  )
}

export default Form5
