'use client'

import { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import styles from './Form14.module.scss'
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import InputText from '@/components/molecules/InputText/InputText'
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import BackBlackCss from '@/components/molecules/BackBlackCss/BackBlackCss'
import Image from 'next/image'
import creaciondeeventos from '@/../public/images/icons/creaciondeeventos.png'
import creaciondeeventosAuto from '@/../public/images/icons/iconoRectSirc.png'
import subirpatrocinador from '@/../public/images/icons/subirpatrocinador.png'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Button from '@/components/molecules/Button/Button/Button'
import { MapSponsorsContext } from '@/context/authenticated/events/register/createEvent/mapSponsors/MapSponsorsContext'

interface ComponentProps {
  setModalWindow?: any
  setShowInternalMapUpload?: Function
  setShowInternalMapSelect?: Function
  setShowSponsors?: Function
  onClickBack: () => void
}

const Form14: React.FC<ComponentProps> = ({ setShowInternalMapUpload = () => { }, setShowInternalMapSelect = () => { }, setShowSponsors = () => { }, onClickBack, setModalWindow }) => {

  const { loading, data, saveData } = useContext(MapSponsorsContext)
  const methods = useForm()
  const [map, setMap] = useState<string>('1')
  const [sponsor, setSponsor] = useState<string>('1')

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      for (const propertyName in data) {
        methods.setValue(propertyName, data[propertyName]?.toString())
      }
    }
    if (data.map === 0 || data.map === 1) setMap(data.map.toString())
    if (data.sponsor === 0 || data.sponsor === 1) setSponsor(data.sponsor.toString())
  }, [data])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    saveData(data)
    setMap('')
    setSponsor('')
  }

  return (
    <div className={styles.Form14}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.createMap}>
            <p className={styles.title}>CREACIÓN DE MAPA/PATROCINADORES</p>
            <div className={styles.questionMap}>
              <div className={styles.question1}>¿Cuentas con mapa interno del evento? <label>(Opcional)</label></div>
              <div className={styles.contMap}>
                <div>
                  <RadioButton
                    name='map'
                    inputId='map_1'
                    value='1'
                    defaultValue={map}
                    label='Si'
                    setValue={setMap}
                    rules={{ required: true }}
                    variant='primary'
                  />
                </div>
                <Button
                  type='button'
                  onClick={() => setShowInternalMapUpload(true)}
                  disabled={map === '0'}
                  variant='transparent-static'
                  width='60%'
                >
                  <div className={styles.uploadMap}>
                    <p className={styles.textMap}>Subir mapa</p>
                    <div className={styles.ImageCreate}>
                      <Image alt='icon' src={creaciondeeventos} />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
            <div className={styles.questionMap}>
              <div className={styles.question1}>¿Cuentas con mapa interno del evento? <label>(Opcional)</label></div>
              <div className={styles.contMap}>
                <div>
                  <RadioButton
                    name='map'
                    inputId='map_0'
                    value='0'
                    defaultValue={map}
                    label='No'
                    setValue={setMap}
                    rules={{ required: true }}
                    variant='primary'
                  />
                </div>
                <Button
                  type='button'
                  onClick={() => setShowInternalMapSelect(true)}
                  disabled={map === '1'}
                  variant='transparent-static'
                  width='60%'
                >
                  <div className={styles.uploadMap}>
                    <p className={styles.textMap}>Selecciona una opción</p>
                    <div className={styles.ImageCreate}>
                      <Image alt='icon' src={creaciondeeventosAuto} />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
            <div className={styles.questionEvent}>
              <div className={styles.question2}>¿Invitarás patrocinadores a tu evento? <label>(Opcional)</label></div>
              <div className={styles.contEvent}>
                <div className={styles.form_sponsor}>
                  <RadioButton
                    name='sponsor'
                    inputId='sponsor_1'
                    value='1'
                    defaultValue={sponsor}
                    label='Si'
                    setValue={setSponsor}
                    rules={{ required: true }}
                    variant='primary'
                  />
                  <RadioButton
                    name='sponsor'
                    inputId='sponsor_0'
                    value='0'
                    defaultValue={sponsor}
                    label='No'
                    setValue={setSponsor}
                    rules={{ required: true }}
                    variant='primary'
                  />
                </div>
                <Button
                  type='button'
                  onClick={() => setShowSponsors(true)}
                  disabled={sponsor === '0'}
                  variant='transparent-static'
                  width='60%'
                >
                  <div className={styles.uploadMap}>
                    <p className={styles.textMap}>Subir patrocinadores</p>
                    <div className={styles.uploadP}>
                      <Image alt='icon' src={subirpatrocinador} />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
            <div className={styles.questionAge}>
              <InputText
                name='restriction_age'
                label='¿Cuentas con restricción de edad?'
                placeholder='Ej. Admisión mayores de 18 años'
                optional
                variant='bold'
                rules={{ required: false }}
              />
            </div>
            <div>
              <InputTextArea
                name='additional_details'
                label='¿Te gustaría subir detalles adicionales del evento?'
                placeholder='Aquí puedes subir datos del artista, quien es el invitado estelar, cuenta con trofeo, etc... '
                height='249px'
                optional
                variant='secondary'
                rules={{ required: false }}
              />
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
  )
}

export default Form14
