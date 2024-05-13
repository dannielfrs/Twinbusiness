'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import notification from '@/../public/images/IconosBlancos/notification.png'
import share from '@/../public/images/IconosBlancos/share.png'
import edit from '@/../public/images/IconosBlancos/edit.png'
import arrowDown from '@/../public/images/icons/Path.svg'
import codigoqr from '@/../public/images/icons/codigoqr.png'
import Button from '@/components/molecules/Button/Button/Button'
import qr from '@/../public/images/icons/qr.png'
import defaultPicture from '@/../public/images/icons/default_user.jpg'
import { ProfileUpload } from '@/components/molecules/Upload/ProfileUpload/ProfileUpload'
import { Alert4 } from '@/components/molecules/Alert4/Alert4'
import flagMX from '@/../public/images/icons/mx_flag.png'
import { ProfileContext } from '@/context/authenticated/profile/personal/profile/ProfileContext'

export const CardPersonalProfile = () => {
  //
  const { loading, data, editData, savedSuccess } = useContext(ProfileContext)
  const methods = useForm()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [editMode, setEditMode] = useState(false)
  const profileType = 'Perfil Personal'

  useEffect(() => {
    // methods.setValue('name', data.name)
    methods.setValue('email', data.email)
    methods.setValue('phone_number', data.phone_number)
    if (data.image?.url) setImageUrl(data.image.url)
  }, [data])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (editMode) {
      editData(data, imageFile)
      setEditMode(false)
    }
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.CardProfile}>
        <p className={styles.title}>Información</p>
        <div className={styles.ContProfile}>
          <div className={styles.card_picture}>
            <ProfileUpload
              name='fileupload_selfie'
              accept='image/png, image/jpg, image/jpeg'
              icon={defaultPicture}
              defaultImage={imageUrl}
              setImageFile={setImageFile}
              disabled={!editMode}
              width='100%'
              height='240px'
              className={styles.fileupload}
              rules={{ required: false }}
            />
          </div>
          <div className={styles.card_info}>
            {editMode
              ? <>
                <div>
                  Nombre:
                  <InputText
                    name='name'
                    label=''
                    placeholder=''
                    variant='transparent'
                    height='23px'
                  />
                </div>
                <div>
                  Apellido:
                  <InputText
                    name='last_name'
                    label=''
                    placeholder=''
                    variant='transparent'
                    height='23px'
                  />
                </div>
                <div>
                  <InputText
                    name='email'
                    value={data.email}
                    label=''
                    placeholder=''
                    variant='transparent'
                    height='23px'
                  />
                </div>
                <div>
                  TEL.
                  <InputText
                    name='phone_number'
                    value={data.phone_number}
                    label=''
                    placeholder=''
                    variant='transparent'
                    height='23px'
                  />
                </div>
              </>
              : <>
                <p className={styles.name}>{data.name}</p>
                <p>{data.email}</p>
                <p>TEL. {data.phone_number}</p>
              </>}
            <div>{profileType}</div>
            <div className={styles.images}>
              <div className={styles.codigoqr}>
                <Image src={codigoqr} alt='qr_code' />
              </div>
              <div className={styles.imageNationality}>
                <Image src={flagMX} alt='flag' />
              </div>
            </div>
            <div className={styles.card_actions}>
              {data.actions?.edit &&
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
              }
              {data.actions?.notifications &&
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
              {data.actions?.share &&
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
        <button
          type='button'
          onClick={() => { }}
          className={styles.button_more}
        >
          <label>Mas información</label>
          <Image src={arrowDown} alt='arrow' />
        </button>
        <div className={styles.card_footer}>
          <div style={{ width: '234px' }}>
            <Button variant='primary' height='35px'>GUARDAR CAMBIOS</Button>
          </div>
          <div className={styles.qr}>
            <Image src={qr} alt='icon' />
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
}
