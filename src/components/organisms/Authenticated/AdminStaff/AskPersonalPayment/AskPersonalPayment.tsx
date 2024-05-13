'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import styles from './AskPersonalPayment.module.scss'
import search from '@/../../public/images/icons/search.svg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'
import user1 from '@/../public/images/Home/ProfileBussines/Rounded.png'
import menu from '@/../../public/images/Home/AdminStaff/menu.svg'
import qr from '@/../../public/images/icons/codigoqr.png'

const objinfo = {
  image: user1,
  date: {
    dateStart: 'Inicia 07/08/2022',
    dateEnd: 'Finaliza 07/08/2022',
    hourStart: 'Hora 12:00 P.M.',
    hourEnd: 'Hora 16:00 P.M.'
  },
  infoUser: {
    name: 'Edgar Corr',
    role: 'Empresario secundario',
    tel: '33 2342-43445',
    email: 'Edgarcorr@gmail.com',
    dateRegistered: '12/06/2022',
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

const history = [
  {
    name: 'Nomina',
    value: '$500.00 MXN'
  },
  {
    name: 'Propina Total',
    value: '$2,500.00 MXN'
  },
  {
    name: 'Bono',
    value: '$200.00 MXN'
  },
  {
    name: '% De bono',
    value: '3%'
  }
]

export default function AskPersonalPayment() {
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
                <h1>Solicitud de cobro</h1>

              </div>
              <div className={styles.qrdiv}>
                <Image src={qr} alt='' />

              </div>
              <div className={styles.divtitle}>
                <h1>Invitado</h1>

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
                        //onClick={saveDatas}
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
          <div className={styles.divsearch}>
            <div className={styles.inputdiv}>
              <InputText
                label=''
                name='search'
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                placeholder='Buscador'
                icon={search}
                iconPosRight
                variant='search'
                height='50px'
              />
            </div>
          </div>
          <div className={styles.tablediv}>
            <div className={styles.header}>
              <div className={styles.leftdiv}>
                <div className={styles.picture}>
                  <Image src={objinfo.image} alt='' />
                </div>
                <div className={styles.description}>
                  <h2 className={styles.titlep}>{objinfo.infoUser.name}</h2>
                  <p>Correo: {objinfo.infoUser.email}</p>
                </div>
              </div>
              <div className={styles.rightdiv}>
                <div>
                  <h2>Cargo: {objinfo.infoUser.role}</h2>
                  <div className={styles.sharemenu}>
                    <Image src={menu} alt='' />
                  </div>
                </div>
                <div className={styles.schedulesdiv}>
                  <div className={styles.schedule}>
                    <label>Hora inicio: 09:00a.m.</label>
                  </div>
                  <div className={styles.schedule}>
                    <label>Hora Cierre: 09:00p.m.</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.statusdiv}>
                <div>
                  <label>Estatus</label>
                </div>
                <div className={styles.valuestatus}>
                  <label>Pendiente</label>
                </div>
              </div>
              <div className={styles.historydiv}>
                <div className={styles.header}>
                  <label>Historial de staff</label>
                </div>
                <div className={styles.history}>
                  {history.map((item, key) => {
                    return (
                      <div
                        className={styles.historyitem}
                        key={key}
                        style={{
                          background: key % 2 === 0 ? '#fff' : '#DEDFE4'
                        }}
                      >
                        <div className={styles.left}>
                          <label>{item.name}</label>
                        </div>
                        <div className={styles.right}>
                          <label>{item.value}</label>
                        </div>
                      </div>
                    );
                  })}
                  <div
                    className={styles.historyitem}
                    style={{
                      background: '#508F44',
                      color: '#fff'
                    }}
                  >
                    <div className={styles.left}>
                      <label>Total a cobrar</label>
                    </div>
                    <div className={styles.right}>
                      <label>$3,450 MXN</label>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                  <div className={styles.charsediv}>
                    <div>
                      <Button
                        variant='blackForm'
                        //onClick={saveDatas}
                        borderRadius='10px'
                      >
                        Cobro en efectivo
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant='blackForm'
                        //onClick={saveDatas}
                        borderRadius='10px'
                      >
                        Cobro a monedero
                      </Button>
                    </div>
                  </div>
                  <div className={styles.chardistance}>
                    <div>
                      <Button
                        variant='blackForm'
                        onClick={() => { router.push('/system/profile/company/event/1/adminstaff/askpayment') }}
                        borderRadius='10px'
                        style={{ background: '#707070' }}
                      >
                        Solicitar cobro a distancia
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </FormHookProvider>
  )
}
