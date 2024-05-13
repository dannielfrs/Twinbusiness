'use client'

import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import styles from './styles.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import logo from '@/../public/images/Home/logoGrande2.png'
import InputText from '@/components/molecules/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import Button from '@/components/molecules/Button/Button/Button'
import { InputPassword } from '@/components/molecules/InputPassword/InputPassword'
import { Alert } from '@/components/molecules/Alert/Alert'
import { AuthContext } from '@/context'
import { regexEmail, regexPhoneNumber } from '@/utilities/regex'

export default function CreateAccount({ setOpenModal }: { setOpenModal: (open: boolean) => void }) {
  const { loading, success, getDropdownOptions, handleRegisterSubmit } = useContext(AuthContext)
  const methods = useForm()
  const router = useRouter()
  const [dropdownOptions, setDropdownOptions] = useState({ gender: [], profession: [] })

  useEffect(() => {
    const getOptions = async () => {
      const response = await getDropdownOptions('gender')
      setDropdownOptions((prevState) => ({ ...prevState, gender: response.gender }))
      const resp = await getDropdownOptions('profession')
      setDropdownOptions((prevState) => ({ ...prevState, profession: resp.profession }))
    }
    getOptions()
  }, [])

  const inputTextName = {
    name: 'name',
    placeholder: 'Nombre',
    rules: { required: 'El nombre es requerido.' },
    required: true,
    variant: 'secondary'
  }

  const inputLastName = {
    name: 'last_name',
    placeholder: 'Apellido',
    rules: { required: 'El apellido es requerido.' },
    required: true,
    variant: 'secondary'
  }

  const inputTextEmail = {
    name: 'email',
    placeholder: 'Correo electrónico',
    required: true,
    variant: 'secondary',
    rules: {
      required: 'El Correo electrónico es requerido.',
      pattern: {
        value: regexEmail,
        message: "Ingresa un correo electrónico valido",
      }
    }
  }

  const inputPhone = {
    name: 'phone_number',
    placeholder: 'Teléfono celular',
    required: true,
    variant: 'secondary',
    rules: {
      required: 'El teléfono celular es requerido.',
      pattern: {
        value: regexPhoneNumber,
        message: "El número debe tener 10 digitos",
      }
    }
  }

  const inputDate = {
    name: 'birthdate',
    type: 'date',
    label: 'Fecha de nacimiento',
    placeholder: 'Fecha de nacimiento',
    rules: { required: 'La fecha de nacimiento es requerida.' },
    variant: 'secondary'
  }

  const inputPassword = {
    name: 'password',
    label: 'Minimo 8 caracteres',
    placeholder: 'Contraseña',
    variant: 'primary',
    feedback: false,
    required: true,
    visible: true,
    rules: {
      required: 'La contraseña es requerida.',
      minLength: {
        value: 8,
        message: 'La contraseña debe tener al menos 8 caracteres.'
      }
    }
  }

  const inputConfirmPassword = {
    name: 'password_confirmation',
    placeholder: 'Confirmar contraseña',
    variant: 'primary',
    feedback: false,
    required: true,
    visible: true,
    rules: {
      required: 'La contraseña es requerida.',
      minLength: {
        value: 8,
        message: 'La contraseña debe tener al menos 8 caracteres.'
      }
    }
  }

  return (
    <div>
      <FormHookProvider methods={methods} onSubmit={handleRegisterSubmit}>
        <div className={`${styles.form} card_large`}>
          <div className={styles.button_close} onClick={() => setOpenModal(false)}>x</div>
          <div className={styles.miniLogo}>
            <Image src={logo} alt='logo' />
          </div>
          <div className={styles.cont_title}>
            <h1 className={styles.title}>Crear Cuenta</h1>
          </div>
          <div className={styles.form_body}>
            <div className={styles.form_input}>
              <InputText {...inputTextName} />
            </div>
            <div className={styles.form_input}>
              <InputText {...inputLastName} />
            </div>
            <div className={styles.form_input}>
              <InputText {...inputTextEmail} />
            </div>
            <div className={styles.form_input}>
              <InputText {...inputPhone} />
            </div>
            <div className={styles.form_input}>
              <InputPassword {...inputPassword} />
            </div>
            <div className={styles.form_input}>
              <InputPassword {...inputConfirmPassword} />
            </div>
            <div className={styles.form_input}>
              <InputText {...inputDate} />
            </div>
            <div className={styles.form_input}>
              <Dropdown
                name='gender'
                options={dropdownOptions.gender}
                optionLabel='text'
                optionValue='id'
                placeholder='Genero'
                variant='third'
                height='35px'
              />
            </div>
            <div className={styles.form_input}>
              <Dropdown
                name='profession'
                options={dropdownOptions.profession}
                optionLabel='text'
                optionValue='id'
                placeholder='Profesión'
                variant='third'
                height='35px'
              />
            </div>
            <p className={styles.accept}>Al presionar en <label>crear cuenta</label> aceptas nuestros</p>
            <Button
              type='button'
              variant='terms'
              height='10px'
              className={styles.titleTerms}
              onClick={() => router.push('/terms-and-conditions')}
            >
              TÉRMINOS Y CONDICIONES
            </Button>
          </div>
          <div style={{ marginTop: '10px', width: '100%' }}>
            <Button
              variant='third'
              height='48px'
            >
              Crear cuenta
            </Button>
          </div>
        </div>
      </FormHookProvider>
      <Alert
        visible={loading}
        title='Estamos creando tu cuenta, espera un momento...'
        icon='loading'
      />
      <Alert
        visible={success}
        title='¡Tu cuenta ha sido creada con éxito!'
        icon='success'
        labelButton='OK'
      />
    </div>
  )
}
