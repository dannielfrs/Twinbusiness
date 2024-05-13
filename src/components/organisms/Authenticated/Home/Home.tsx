'use client'

import React from 'react'
import styles from './Home.module.scss'
import Image from 'next/image'
import logo from '@/../public/images/Home/logoTwin.png'
import btnHome from '@/../public/images/icons/icono twin_1.gif'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'

export default function Home () {
  const methods = useForm()

  const onSubmit = () => { }

  return (
    <div className={styles.home}>
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
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              placeholder='Busca empresas, productos, servicios y eventos'
              icon={search}
              iconPosRight
              filter
              variant='primary'
              height='65px'
            />
          </div>
        </div>
        <div className={styles.btn_end}>
          <Image src={btnHome} alt='icon' />
        </div>
      </FormHookProvider>
    </div>
  )
}
