'use client'

import { useReducer, useContext } from 'react'
import styles from './Login.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { decrypt } from '@/utilities/encryption'
import { useForm } from 'react-hook-form'
import { AUTHENTICATED, AUTHENTICATED_USER, LOGGED_IN, TOKEN, RECOVERY_ADVERTISE } from '@/utilities/authConstants'
import { authReducer } from '@/context/authReducer'
import Image from 'next/image'
import logo from '@/../public/images/Home/logoGrande2.png'
import InputText from '@/components/molecules/InputText/InputText'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import Button from '@/components/molecules/Button/Button/Button'
import twinLogin from '@/../public/images/icons/twinLogin.svg'
import fbLogin from '@/../public/images/icons/fbLogin.svg'
import googleLogin from '@/../public/images/icons/googleLogin.svg'
import { useRouter } from 'next/navigation'
import { Alert } from '@/components/molecules/Alert/Alert'
import Cookies from 'js-cookie'
import { AuthContext } from '@/context'

const initial = () => {
  const user = (Cookies.get(AUTHENTICATED_USER)) ? JSON.parse(decrypt(Cookies.get(AUTHENTICATED_USER))) : {}
  return {
    isLoggedIn: decrypt(Cookies.get(AUTHENTICATED)) === LOGGED_IN,
    user
  }
}

export default function Login({ setOpenModal2, setOpenModal }: { setOpenModal2: (open: boolean) => void; setOpenModal: (open: boolean) => void }) {

  const { loading, success, handleLoginSubmit } = useContext(AuthContext)
  const [authState, dispatch] = useReducer(authReducer, {}, initial)
  const methods = useForm()
  const router = useRouter()

  const inputEmail = {
    label: '',
    name: 'email',
    placeholder: 'Correo electronico o teléfono',
    className: 'input-bold',
    required: true,
    variant: 'secondary',
    rules: { required: 'El correo electrónico o teléfono es requerido.' },
  }

  const inputPassword = {
    name: 'password',
    placeholder: 'Contraseña',
    variant: 'primary',
    feedback: false,
    required: true,
    visible: true,
    rules: {
      required: 'La contraseña es requerida.',
      minLength: {
        value: 6,
        message: 'La contraseña debe tener al menos 6 caracteres.'
      }
    }
  }

  return (
    <div>
      <FormHookProvider methods={methods} onSubmit={handleLoginSubmit}>
        <div className={`${styles.form} card_large`}>
          <div className={styles.button_close} onClick={() => setOpenModal2(false)}>x</div>
          <div className={styles.form_header}>
            <Image src={logo} alt='logo' />
          </div>
          <div className={styles.cont_title}>
            <h1 className={styles.title}>Ingresar</h1>
          </div>
          <div className={styles.form_body}>
            <div className={styles.form_input}>
              <InputText {...inputEmail} />
            </div>
            <div className={styles.form_input}>
              <InputPassword {...inputPassword} />
            </div>
            <Button type='submit' variant='third'>Iniciar sesión</Button>
            <Button type='button' variant='transparent-static' className={styles.buttonLogin}>Iniciar con Twinbusiness
              <div className={styles.ImageLogo}>
                <Image alt='' src={twinLogin} />
              </div>
            </Button>
            <Button type='button' variant='transparent-static' className={styles.buttonLogin}>Iniciar con Facebook
              <div className={styles.ImageLogo}>
                <Image alt='' src={fbLogin} />
              </div>
            </Button>
            <Button type='button' variant='transparent-static' className={styles.buttonLogin}>Iniciar con Google
              <div className={styles.ImageLogo}>
                <Image alt='' src={googleLogin} />
              </div>
            </Button>
            <div className={styles.Register}>
              <p className={styles.p1}>¿No tienes cuenta?</p>
              <p className={styles.p2} onClick={() => { setOpenModal2(false); setOpenModal(true) }} >Regístrate</p>
            </div>
            <p className={styles.pass}>Recuperar contraseña</p>
          </div>
        </div>
      </FormHookProvider>
      <Alert
        visible={loading}
        title='Estamos validando las credenciales, espera un momento...'
        icon='loading'
      />
      <Alert
        visible={success}
        title='Credenciales correctas'
        icon='success'
      />
    </div>
  )
}