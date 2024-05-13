'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import styles from './styles.module.scss'
import search from '@/../public/images/icons/search.svg'
import logo from '@/../public/images/Home/logoTwin.png'
import btnHome from '@/../public/images/icons/icono twin_1.gif'
import GuestHeader from './GuestHeader/GuestHeader'
import { encrypt } from '@/utilities/encryption'
import Cookies from 'js-cookie'
import { TOKEN, RECOVERY_ADVERTISE, AUTHENTICATED } from '@/utilities/authConstants'
import { AuthProvider } from '@/context'

export default function HomePage({
  tokenGuest
} : {
  tokenGuest?: string
}) {

  const methods = useForm()
  Cookies.set(TOKEN, encrypt(tokenGuest))
  Cookies.set(RECOVERY_ADVERTISE, 'true')

  const onSubmit = () => { }

  return (
    <AuthProvider>
      <div className={styles.Home}>
        <GuestHeader />
        <FormHookProvider className={styles.formHome} methods={methods} onSubmit={onSubmit}>
          <div className={styles.cont_imgLogo}>
            <Image src={logo} alt='logo' />
          </div>
          <div className={styles.center_cont}>
            <div className={styles.text_center}>
              <p>Productos</p>
              <p>Servicios</p>
              <p>Eventos</p>
            </div>
            <div className='InputSearch'>
              <InputText
                label=''
                name='search'
                placeholder='Busca empresas, productos, servicios y eventos'
                icon={search}
                iconPosRight={true}
                filter
                variant='primary'
                height='65px'
              />
            </div>
            <div className={`${styles.text_center} ${styles.marginRight}`}>
              <p>Subastas</p>
              <p>NFTs</p>
              <p>Compradores</p>
            </div>
          </div>
          <div className={styles.btn_end}>
            <Image src={btnHome} alt='btn' />
          </div>
        </FormHookProvider>
      </div>
    </AuthProvider>
  )
}
