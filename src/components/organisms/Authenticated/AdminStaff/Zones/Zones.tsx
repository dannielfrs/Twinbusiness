'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import styles from './Zones.module.scss'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import search from '@/../../public/images/icons/search.svg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'

const objinfo = {
  image: ryan_gosling,
  descriptiontitle: 'IBF Boca de iguanas',
  date: {
    dateStart: 'Inicia 07/08/2022',
    dateEnd: 'Finaliza 07/08/2022',
    hourStart: 'Hora 12:00 P.M.',
    hourEnd: 'Hora 16:00 P.M.'
  },
  infoUser: {
    name: 'Evelyn Miselotti',
    email: 'email@mail.com',
    rol: 'Roll : Empresario secundario'
  }
}

const adsItems = [
  {
    background: bg1,
    title: '¿No sabes como editar tus fotos?',
    description: 'Compra un paquete que te sube tus fotos con fondo blanco o transparente',
    buttonText: 'Comprar',
    buttonLink: ''
  },
  {
    background: bg2,
    title: '¿Tienes más de 50 productos?',
    description: 'Amplia tu espacio de productos, servicios, subastas o bolsas de compra con alguno de nuestros paquetes',
    buttonText: 'Comprar',
    buttonLink: ''
  }
]

const list = [
  {
    date: {
      month: 'Nov',
      day: '30',
      year: '2023'
    },
    name: 'Punto de venta',
    zone: 'General',
    tickets: '1,050',
    colorzone: 'pink'
  },
  {
    date: {
      month: 'Sep',
      day: '16',
      year: '2023'
    },
    name: 'Punto de venta',
    zone: 'VIP',
    tickets: '5,050',
    colorzone: 'blue'
  },
  {
    date: {
      month: 'May',
      day: '25',
      year: '2023'
    },
    name: 'Punto de venta',
    zone: 'Oro',
    tickets: '10,000',
    colorzone: 'yellow'
  },
  {
    date: {
      month: 'Nov',
      day: '30',
      year: '2023'
    },
    name: 'Punto de venta',
    zone: 'General',
    tickets: '1,050',
    colorzone: 'green'
  }
];


export default function Zones() {
  //
  const router = useRouter()
  const methods = useForm()

  const onSubmit = () => { }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={`${styles.AdminStaff} ${styles.noScroll}`}>
        <Card className={styles.CardProfile}>
          <div className={styles.header}>
            <div className={styles.leffdiv}>
              <div className={styles.divtitle}>
                <h1>Modulo de venta de boletaje</h1>
              </div>
              <div className={styles.infodate}>
                <div className={styles.picture}>
                  <Image src={objinfo.image} alt='' />
                </div>
                <div className={styles.description}>
                  <p className={styles.titlep}>{objinfo.descriptiontitle}</p>

                  <div className={styles.dates}>
                    <div>
                      <p>{objinfo.date.dateStart}</p>
                      <p>{objinfo.date.dateEnd}</p>
                    </div>
                    <div>
                      <p>{objinfo.date.hourStart}</p>
                      <p>{objinfo.date.hourEnd}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divsearch}>
                <p className={styles.title}>Boletaje punto de venta</p>
                <div>
                  <InputText
                    label=''
                    name='search'
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    placeholder='Buscar boleto por zona'
                    icon={search}
                    iconPosRight
                    variant='search'
                    height='50px'
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightdiv}>
              {adsItems.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={styles.divadd}
                    style={{ background: `linear-gradient(45deg,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30) ), url(${item?.background?.src}) no-repeat` }}
                  >
                    <div>
                      <h2>{item.title}</h2>
                    </div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <div className={styles.btndiv}>
                      <Button
                        variant='blackForm'
                        // onClick={saveDatas}
                        borderRadius='10px'
                      >
                        {item.buttonText}
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.tablediv}>
            <div className={styles.content}>
              {list.map((item, key) => {
                return (
                  <div className={`${styles.card} ${styles.carduser}`} key={key}>
                    <div className={styles.photodiv}>
                      <div className={styles.date1}>
                        <div>
                          <label>{item.date.month}</label>
                        </div>
                        <div>
                          <label>{item.date.day}</label>
                        </div>
                      </div>
                      <div className={styles.date2}>
                        <label>{item.date.year}</label>
                      </div>

                    </div>
                    <div className={styles.divcontact}>
                      <p>{item.name}</p>
                    </div>
                    <div className={styles.divzone}>
                      <div className={styles.zn1}>
                        <label>Zona</label>
                      </div>
                      <div className={styles.zn2}>
                        <label>{item.zone}</label>
                      </div>
                      <div className={styles.zn3}>
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            background: item.colorzone,
                            margin: '0 auto',
                            borderRadius: '50%'
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.divcontact}>
                      <p>Boletos disponibles {item.tickets}</p>
                    </div>
                    <div className={styles.actions}>
                      <div className={styles.btn}>
                        <Button
                          variant='blackForm'
                          borderRadius='10px'
                          style={{ background: '#FFFFFF', color: '#000', fontSize: 16 }}
                          onClick={() => { router.push('/system/profile/company/event/1/adminstaff/zone') }}
                        >
                          Ver zona
                        </Button>
                      </div>
                      <div className={styles.btn}>
                        <Button
                          variant='blackForm'
                          borderRadius='10px'
                          style={{ background: '#FFFFFF', color: '#000', fontSize: 16 }}
                        >
                          Ver mapa
                        </Button>
                      </div>
                      <div className={styles.btn}>
                        <Button
                          variant='blackForm'
                          borderRadius='10px'
                          style={{ background: '#00B653', color: '#000', fontSize: 16 }}
                        >
                          Vender
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </div>
    </FormHookProvider>
  )
}
