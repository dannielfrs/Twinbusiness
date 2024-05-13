'use client'

import { useContext, useState } from 'react'
import styles from './GuestHeader.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { DropdownChangeEvent } from 'primereact/dropdown'
import Image from 'next/image'
import soporte from '@/../public/images/icons/soporte.svg'
import CreateAccount from '../CreateAccount/CreateAccount'
import Login from '../Login/Login'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import { AuthContext } from '@/context'

export default function GuestHeader({ ShowSearch }: { ShowSearch?: boolean }) {

  const { loading, dropdownOptions } = useContext(AuthContext)
  const methods = useForm()
  const [OpenModal, setOpenModal] = useState(false)
  const [OpenModal2, setOpenModal2] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('69cd5d20-9361-4b61-80b6-b30926d7ef25')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('a2542172-681c-4b3f-9576-1e7f3eb2e344')

  const onSubmit = () => { }

  const handleSubmit = () => {
    setOpenModal(true)
    setOpenModal2(false)
  }

  const handleSubmit2 = () => {
    setOpenModal2(true)
    setOpenModal(false)
  }

  const languageOptionTemplate = (option: any) => {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Image
          src={option.image.url}
          alt='flag'
          loader={({ src }) => src}
          width={44}
          height={20}
          style={{ objectFit: 'cover', borderRadius: '5px' }}
        />
        <div>{option.text}</div>
      </div>
    )
  }

  const selectedLanguageTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Image
            src={option.image.url}
            alt='flag'
            loader={({ src }) => src}
            width={44}
            height={20}
            style={{ objectFit: 'cover', borderRadius: '5px' }}
          />
        </div>
      )
    }
    return <span>{props.placeholder}</span>
  }

  const currencyOptionTemplate = (option: any) => {
    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Image
          src={option.image.url}
          alt='flag'
          width={44}
          height={20}
          style={{ objectFit: 'cover', borderRadius: '5px' }}
        />
        <div>{option.text}</div>
      </div>
    )
  }

  const selectedCurrencyTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div style={{ fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center' }}>
          <div>{option.iso}</div>
        </div>
      )
    }
    return <span>{props.placeholder}</span>
  }

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.GuestHeader}>
          <div className={styles.ContLeft}>
            <div style={{ width: '124px' }}>
              <Button
                height='30px'
                variant='primary'
              >
                Vender
              </Button>
            </div>
            <div className={styles.foryou} style={{ width: '150px' }}>
              <p className={styles.title}>Buscamos por ti</p>
            </div>
            <div className={styles.Solutions} style={{ width: '110px' }}>
              <p className={styles.title}>Soluciones</p>
            </div>
          </div>
          {ShowSearch && (
            <div className={styles.InputSearch}>
              <InputText
                name='search'
                placeholder='Busca empresas, productos, servicios y eventos'
                icon={search}
                iconPosRight
                filter
                variant='search'
                height='50px'
              />
            </div>
          )}
          <div className={styles.ContRight}>
            <div style={{ width: '100px' }}>
              <Dropdown
                name='language'
                label=''
                value={selectedLanguage}
                onChange={(e: DropdownChangeEvent) => setSelectedLanguage(e.value)}
                options={dropdownOptions.language}
                optionLabel='text'
                optionValue='id'
                placeholder='Seleccione idioma'
                valueTemplate={selectedLanguageTemplate}
                itemTemplate={languageOptionTemplate}
                variant='primary'
                height='30px'
              />
            </div>
            <div style={{ minWidth: '100px' }}>
              <Dropdown
                name='currency'
                label=''
                value={selectedCurrency}
                onChange={(e: DropdownChangeEvent) => setSelectedCurrency(e.value)}
                options={dropdownOptions.currency}
                optionLabel='text'
                optionValue='id'
                placeholder='Seleccione moneda'
                valueTemplate={selectedCurrencyTemplate}
                itemTemplate={currencyOptionTemplate}
                variant='primary'
                height='30px'
              />
            </div>
            <div className={styles.ButtonAccount}>
              <Button
                variant='secondary'
                onClick={handleSubmit2}
              >
                Ingresar
              </Button>
            </div>
            <div style={{ width: '124px' }}>
              <Button
                onClick={handleSubmit}
                variant='primary'
                height='30px'
              >
                Crear cuenta
              </Button>
            </div>
            <div className={styles.image}>
              <Image alt='icon' src={soporte} />
            </div>
          </div>
        </div>
      </FormHookProvider>
      {OpenModal && <CreateAccount setOpenModal={setOpenModal} />}
      {OpenModal2 && <Login setOpenModal2={setOpenModal2} setOpenModal={setOpenModal} />}
    </>
  )
}
