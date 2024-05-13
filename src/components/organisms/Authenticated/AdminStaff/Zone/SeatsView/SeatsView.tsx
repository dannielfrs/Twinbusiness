'use client'

import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Button from '@/components/molecules/Button/Button/Button';
import styles from './SeatsView.module.scss'
import search from '@/../../public/images/icons/search.svg'
import stage from '@/../../public/images/Home/AdminStaff/stage.png';

const list = [
  {
    name: 'FILA',
    number: '01',
    available: '27 PZA'
  },
  {
    name: 'FILA',
    number: '02',
    available: '28 PZA'
  },
  {
    name: 'FILA',
    number: '03',
    available: '29 PZA'
  },
  {
    name: 'FILA',
    number: '04',
    available: '36 PZA'
  }
];
const SeatsView = () => {
  //
  const methods = useForm()

  const onSubmit = () => { }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.map}>
        <div className={styles.headermap}>
          <div className={styles.title}>
            <h1>MAPA DEL EVENTO</h1>
            <h1 style={{ color: '#707070' }}>FILA/N°DE FILA/DISPONIBILIDAD</h1>
          </div>
          <div className={styles.input}>
            <InputText
              label=''
              name='search'
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              placeholder='Buscar zona'
              icon={search}
              iconPosRight
              variant='search'
              height='50px'
            />
          </div>
        </div>
        <div className={styles.contenemap}>
          <div className={styles.zonesmap}>
            <div className={styles.content}>
              {list.map((item, key) => {
                return (
                  <div className={`${styles.card} ${styles.carduser}`} key={key}>
                    <div className={styles.divcontact}>
                      <p>{item.name}</p>
                    </div>
                    <div className={styles.divcontact}>
                      <p>{item.number}</p>
                    </div>
                    <div className={styles.divcontact}>
                      <p>{item.available}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.mapview}>
            <div className={styles.head}>
              <div>
                <strong>ZONA </strong>
                <label>VIP</label>
              </div>
              <div>
                <strong>Cantidad </strong>
                <label>02</label>
              </div>
              <div>
                <strong>Fila </strong>
                <label>01</label>
              </div>
              <div>
                <strong>ASIENTOS </strong>
                <label>08/09</label>
              </div>
            </div>
            <Image
              src={stage}
              alt=''
              style={{ width: '100%', height: 'auto', padding: '10px 30px' }}
            />
            <div className={styles.btnfooter}>
              <div>
                <Button
                  variant='blackForm'
                  borderRadius='10px'
                  style={{ background: '#F9F9FD', color: '#626363' }}
                >
                  Cancelar
                </Button>
              </div>
              <div>
                <Button
                  variant='blackForm'
                  borderRadius='10px'
                  style={{ background: '#00CA00', color: '#fff' }}
                >
                  Vender boletos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}

export default SeatsView
