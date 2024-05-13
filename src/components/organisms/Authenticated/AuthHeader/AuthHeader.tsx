'use client'

import { useContext, useState, memo } from 'react'
import styles from './AuthHeader.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import Button from '@/components/molecules/Button/Button/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { DropdownChangeEvent } from 'primereact/dropdown'
import Image from 'next/image'
import twinLogin from '@/../public/images/icons/twinLogin.svg'
import WALLET from '@/../public/images/icons/WALLET.svg'
import CHAT from '@/../public/images/icons/CHAT.svg'
import Notificaciones from '@/../public/images/icons/Notificaciones.svg'
import soporte from '@/../public/images/icons/soporte.svg'
import nationality from '@/../public/images/icons/mx_flag.png'
import { useRouter, usePathname } from 'next/navigation'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import Link from 'next/link'
import defaultPicture from '@/../public/images/icons/default_user.jpg'
import { HomeContext } from '@/context/authenticated/home'

interface ComponentProps {
  showSearch?: boolean,
  showProfileMenu?: boolean,
}

const AuthHeader: React.FC<ComponentProps> = ({
  showSearch,
  showProfileMenu,
}) => {

  const { data, dropdownOptions } = useContext(HomeContext)
  const router = useRouter()
  const pathname = usePathname()
  const methods = useForm()
  const [foryou, setForyou] = useState()
  const [solutions, setSolutions] = useState()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('69cd5d20-9361-4b61-80b6-b30926d7ef25')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('a2542172-681c-4b3f-9576-1e7f3eb2e344')

  const onSubmit = () => { }

  const foryouOptions = [
    { label: 'Todas', value: 0 },
    { label: 'Twin', value: 1 },
    { label: 'Twin', value: 2 }
  ]

  const solutionsOptions = [
    { label: 'Todas', value: 0 },
    { label: 'Twin', value: 1 },
    { label: 'Twin', value: 2 }
  ]

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
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.AuthHeader}>
        <div className={styles.left}>
          <div className={styles.buttonSell}>
            <Button
              height='30px'
              variant='primary'
              onClick={() => router.push('/system/packages')}>Vender
            </Button>
          </div>
          <div style={{ width: '150px' }}>
            <Dropdown
              name='foryou'
              label=''
              onChange={(e) => setForyou(e.value)}
              options={foryouOptions}
              optionLabel='label'
              placeholder='Buscamos por ti'
              variant='primary'
              height='30px'
            />
          </div>
          <div className={styles.dropSolutions} style={{ width: '120px' }}>
            <Dropdown
              name='solutions'
              label=''
              onChange={(e) => setSolutions(e.value)}
              options={solutionsOptions}
              optionLabel='label'
              placeholder='Soluciones'
              variant='primary'
              height='30px'
            />
          </div>
        </div>
        {showSearch && (
          <div className={styles.InputSearch}>
            <InputText
              label=''
              name='search'
              placeholder='Busca empresas, productos, servicios y eventos'
              icon={search}
              iconPosRight={true}
              filter
              variant='search'
              height='50px'
            />
          </div>
        )}
        {showProfileMenu &&
          <div className={styles.tabsBtns}>
            <div className={styles.cont_tabs}>
              <Button
                type='button'
                onClick={() => router.push('/system/profile/personal')}
                className={styles.active}
                variant={pathname.includes('/system/profile/personal') ? 'tabActive' : 'tabBtn'}
                height='35px'
              >
                Personal
              </Button>
            </div>
            <div className={styles.cont_tabs}>
              <Button
                type='button'
                onClick={() => router.push('/system/profile/company')}
                className={styles.active}
                variant={pathname.includes('/system/profile/company') ? 'tabActive' : 'tabBtn'}
                height='35px'
              >
                Empresarial
              </Button>
            </div>
            <div className={styles.cont_tabs}>
              <Button
                type='button'
                onClick={() => router.push('/system/profile/guest')}
                className={styles.active}
                variant={pathname.includes('/system/profile/guest') ? 'tabActive' : 'tabBtn'}
                height='35px'
              >
                Invitado
              </Button>
            </div>
          </div>
        }
        <div className={styles.right}>
          <div className={styles.flag}>
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
          <div style={{ minWidth: '90px' }}>
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
          <div className={styles.iconos}>
            <div className={styles.icono}>
              <Image alt='icon' src={twinLogin} />
            </div>
            <div className={styles.icono} onClick={() => router.push('/system/wallet')}>
              <Image alt='icon' src={WALLET} />
            </div>
            <div className={styles.icono}>
              <Image alt='icon' src={CHAT} />
            </div>
            <div className={styles.icono}>
              <Image alt='icon' src={Notificaciones} />
            </div>
            <div className={styles.icono}>
              <Image alt='icon' src={soporte} />
            </div>
          </div>
          <div className={styles.section_user}>
            <p className={styles.name}>{data.name}</p>
            <p className={styles.email}>{data.email}</p>
          </div>
          <div className={styles.section_picture}>
            <Link href={'/system/profile/personal'}>
              <div className={styles.imgUser}>
                <Image
                  src={data.image?.url || defaultPicture}
                  alt='user'
                  loader={({ src }) => src}
                  width={10}
                  height={10}
                />
              </div>
            </Link>
            <div className={styles.nationality}>
              <Image alt='flag' src={nationality} />
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}

export default memo(AuthHeader)