'use client'

import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import styles from './MapView.module.scss'
import search from '@/../../public/images/icons/search.svg'
import mapview from '@/../../public/images/Home/AdminStaff/mapview.png'

const list = [
  {
    name: 'Punto de venta',
    zone: 'General',
    tickets: '1,050',
    colorzone: 'pink',
    number: '01'
  },
  {
    name: 'Punto de venta',
    zone: 'VIP',
    tickets: '5,050',
    colorzone: 'blue',
    number: '02'
  },
  {
    name: 'Punto de venta',
    zone: 'Oro',
    tickets: '10,000',
    colorzone: 'yellow',
    number: '03'
  },
  {
    name: 'Punto de venta',
    zone: 'General',
    tickets: '1,050',
    colorzone: 'green',
    number: '04'
  }
];
const MapView = () => {
  //
  const router = useRouter()
  const methods = useForm()

  const onSubmit = () => { }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.map}>
        <div className={styles.headermap}>
          <div className={styles.title}>
            <h1>MAPA DEL EVENTO</h1>
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
            <h2>ZONAS TOTALES 03</h2>
            <div className={styles.content}>
              {list.map((item, key) => {
                return (
                  <div className={`${styles.card} ${styles.carduser}`} key={key}>
                    <div className={styles.divcontact}>
                      <p>{item.zone}</p>
                    </div>
                    <div className={styles.divcontact}>
                      <p>{item.number}</p>
                    </div>
                    <div className={styles.divzone}>
                      <div className={styles.zn3}>
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            background: item.colorzone,
                            margin: '0 auto',
                            borderRadius: '50%',
                            marginTop: 15
                          }}
                          className={styles.circle}
                        />
                      </div>
                    </div>
                    <div className={styles.divcontact}>
                      <p>{item.tickets} PZA</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.mapview}>
            <h2>MAPA POR ZONA Y COLORES</h2>
            <Image
              src={mapview}
              alt=''
              onClick={() => router.push('/system/profile/company/event/1/adminstaff/zone/seats')}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}

export default MapView
