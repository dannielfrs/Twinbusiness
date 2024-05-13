'use client'

import { memo, useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import notification from '@/../public/images/IconosBlancos/notification.png'
import share from '@/../public/images/IconosBlancos/share.png'
import edit from '@/../public/images/IconosBlancos/edit.png'
import arrowDown from '@/../public/images/icons/Path.svg'
import codigoqr from '@/../public/images/icons/codigoqr.png'
import Button from '@/components/molecules/Button/Button/Button'
import qr from '@/../public/images/icons/qr.png'
import defaultCardBanner from '@/../public/images/profile/defaultCardBanner.png'
import { ProfileUpload } from '@/components/molecules/Upload/ProfileUpload/ProfileUpload'
import { Alert4 } from '@/components/molecules/Alert4/Alert4'
import flagMX from '@/../public/images/icons/mx_flag.png'
import { EventControlPanelContext } from '@/context/authenticated/profile/company/eventControlPanel/EventControlPanelContext'
import { formatDateSlashToMiddleDash } from '@/utilities/formatters'

interface ComponentProps {
  onClickQr?: () => void
}

export const CardEventProfile: React.FC<ComponentProps> = memo(({ onClickQr }) => {
  //
  const { loading, data, eventTypeOptions, saveData, savedSuccess } = useContext(EventControlPanelContext)
  const methods = useForm()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [editMode, setEditMode] = useState(false)
  const profileType = 'Perfil Empresarial'

  useEffect(() => {
    setImageUrl(data.event?.banner?.url)
  }, [data])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (editMode) {
      saveData(data)
      setEditMode(false)
    }
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.card}>
        <p className={styles.card_header}>Información del evento</p>
        <div className={styles.card_body}>
          <div className={styles.card_picture}>
            <ProfileUpload
              name='fileupload'
              accept='image/png, image/jpg, image/jpeg'
              icon={defaultCardBanner}
              defaultImage={imageUrl}
              setImageFile={setImageFile}
              disabled
              width='100%'
              height='250px'
              className={styles.fileupload}
              rules={{ required: false }}
            />
          </div>
          <div className={styles.card_info}>
            <div className={styles.card_info_content}>
              {editMode
                ? <>
                  <div>
                    <InputText
                      name='name'
                      value={data.event?.name}
                      label=''
                      placeholder=''
                      variant='transparent'
                      height='23px'
                    />
                  </div>
                  <div>
                    Tipo:
                    <Dropdown
                      name='type'
                      label=''
                      // value={selectedLanguage}
                      // onChange={(e: DropdownChangeEvent) => setSelectedLanguage(e.value)}
                      options={eventTypeOptions}
                      optionLabel='text'
                      optionValue='id'
                      placeholder='Selecciona...'
                      variant='primary'
                      height='25px'
                      className={styles.dropdown}
                    />
                  </div>
                  <div>Fecha del evento</div>
                  <div>
                    Inicia:
                    <InputText
                      type='time'
                      name='start_time'
                      value={data.event?.start_time}
                      label=''
                      placeholder=''
                      variant='transparent'
                      height='23px'
                    />
                  </div>
                  <div>
                    Termina:
                    <InputText
                      type='time'
                      name='end_time'
                      value={data.event?.end_time}
                      label=''
                      placeholder=''
                      variant='transparent'
                      height='23px'
                    />
                  </div>
                  <div>
                    Fecha:
                    <InputText
                      type='date'
                      name='date'
                      value={formatDateSlashToMiddleDash(data.event?.date)}
                      label=''
                      placeholder=''
                      variant='transparent'
                      height='23px'
                    />
                  </div>
                  <div>
                    Dir:
                    <InputText
                      name='address'
                      value={data.event?.address}
                      label=''
                      placeholder=''
                      variant='transparent'
                      height='23px'
                    />
                  </div>
                </>
                : <>
                  <p className={styles.name}>{data.event?.name}</p>
                  <p>Tipo: {data.event?.type}</p>
                  <p>Fecha del evento</p>
                  <p>Inicia: {data.event?.start_time} hrs {data.event?.date}</p>
                  <p>Termina: {data.event?.end_time} hrs {data.event?.date}</p>
                  <p>Dir. {data.event?.address}</p>
                </>}
              <div>{profileType}</div>
            </div>
            <div className={styles.card_group}>
              <div className={styles.card_images}>
                <div className={styles.imageNationality}>
                  <Image src={flagMX} alt='flag' />
                </div>
              </div>
              <div className={styles.card_actions}>
                <div>
                  <Button
                    type='button'
                    onClick={() => setEditMode(!editMode)}
                    tooltip='Editar'
                    tooltipOptions={{ position: 'top' }}
                    variant='button_actions'
                    height='30px'
                    className={styles.button_action}
                  >
                    <Image src={edit} alt='edit' />
                  </Button>
                </div>
                {data.event?.actions?.notifications &&
                  <div>
                    <Button
                      type='button'
                      onClick={() => { }}
                      tooltip='Notificaciones'
                      tooltipOptions={{ position: 'top' }}
                      variant='button_actions'
                      height='30px'
                      className={styles.button_action}
                    >
                      <Image src={notification} alt='notification' />
                    </Button>
                  </div>
                }
                {data.event?.actions?.share &&
                  <div>
                    <Button
                      type='button'
                      onClick={() => { }}
                      tooltip='Compartir'
                      tooltipOptions={{ position: 'top' }}
                      variant='button_actions'
                      height='30px'
                      className={styles.button_action}
                    >
                      <Image src={share} alt='share' />
                    </Button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <button
          type='button'
          onClick={() => { }}
          className={styles.button_more}
        >
          <label>Mas información</label>
          <Image src={arrowDown} alt='arrow' />
        </button>
        <div className={styles.card_footer}>
          <div style={{ width: '235px' }}>
            <Button variant='primary' height='35px'>GUARDAR CAMBIOS</Button>
          </div>
          <div className={styles.qr}>
            <Button
              type='button'
              onClick={onClickQr}
              variant='transparent'
              height='55px'
            >
              <Image
                src={qr}
                alt='icon'
                width={55}
                height={55}
              />
            </Button>
          </div>
        </div>
      </div>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='Cambios guardados con éxito'
      />
    </FormHookProvider>
  )
})

CardEventProfile.displayName = 'CardEventProfile'
