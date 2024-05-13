'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import styles from './Zone.module.scss'
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

const infoZone =
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
}

const tickets = [
  {
    name: 'Boleto General',
    fase: 'FASE 01: INICA 30 DE AGO/30 SEP 2022',
    fasecolor: '#C12A2A',
    description: '1050 pza de 2,000 paz',
    price: '1,500.00',
    status: 'close'
  },
  {
    name: 'Boleto General',
    fase: 'FASE 01: INICA 30 DE SEP/30 OCT 2022',
    fasecolor: '#00C750',
    description: '800 pea de 2,000 paz',
    price: '1,800.00',
    status: 'open'
  },
  {
    name: 'Boleto General',
    fase: 'FASE 01: INICA 30 DE OCT/30 NOV 2022',
    fasecolor: '#FFB300',
    description: '800 pea de 2,000 paz',
    price: '2,000.00',
    status: 'wait'
  }
]

export default function Zone() {
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
                    style={{
                      background: `linear-gradient(45deg,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30) ), url(${item?.background?.src}) no-repeat`
                    }}
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
            <div className={styles.headertable}>
              <h1>Zona {infoZone.zone}</h1>
              <div
                style={{
                  width: 20,
                  height: 20,
                  background: infoZone.colorzone,
                  margin: '0 auto',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
              />
            </div>
            <div className={styles.content}>
              {tickets.map((item, key) => {
                return (
                  <div className={`${styles.card} ${styles.carduser}`} key={key}>
                    <div className={styles.divcontact}>
                      <p>{item.name}</p>
                      <label style={{ color: item.fasecolor }}>{item.fase}</label>
                    </div>
                    <div className={styles.divcontact}>
                      <p>Boletos Disponible</p>
                      <p><strong>{item.description}</strong></p>
                    </div>
                    <div className={styles.divzone}>
                      <div className={styles.zn1}>
                        <label>Precio: {item.price}</label>
                      </div>
                      <div className={styles.zn2}>
                        <div
                          style={{
                            background: item.status === 'open' ? '#00B653' : '#979797',
                            borderRadius: 20,
                            padding: '7px 15px',
                            width: 120,
                            margin: '0 auto'
                          }}
                        >
                          <label>{item.status === 'open' ? 'Vender' : item.status === 'wait' ? 'Pendiente' : 'Cerrado'}</label>
                        </div>
                      </div>
                    </div>
                    <div className={styles.actions}>
                      <div>
                        <div
                          style={{
                            background: '#000',
                            height: 50,
                            width: 50,
                            margin: '0 auto',
                            borderRadius: 10
                          }}
                          onClick={() => router.push('/system/profile/company/event/1/adminstaff/zone/map')}
                        />
                        <div>
                          <label>Mapa</label>
                        </div>
                        <div>
                          <label>Estatus:
                            <span style={{ color: item.fasecolor }}>
                              {item.status === 'open' ? ' Activo' : item.status === 'wait' ? ' Pendiente' : ' Cerrado'}
                            </span>
                          </label>
                        </div>
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
