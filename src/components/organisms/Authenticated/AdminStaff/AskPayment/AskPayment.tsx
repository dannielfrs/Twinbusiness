'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import styles from './AskPayment.module.scss'
import search from '@/../../public/images/icons/search.svg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'
import user1 from '@/../public/images/Home/ProfileBussines/Rounded.png'
import user2 from '@/../public/images/Home/ProfileBussines/Rounded1.png'
import menu from '@/../../public/images/Home/AdminStaff/menu.svg'

const objinfo = {
  image: user1,
  descriptiontitle: 'IBF Boca de iguanas',
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
];

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

export default function AskPayment() {
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
              <div className={styles.infodate}>
                <div className={styles.picture}>
                  <Image src={objinfo.image} alt='' />
                </div>
                <div className={styles.description}>
                  <p className={styles.titlep}>{objinfo.infoUser.name}</p>

                  <div className={styles.dates}>
                    <div>
                      <p>Correo: {objinfo.infoUser.email}</p>
                      <p>Numero: {objinfo.infoUser.tel}</p>
                    </div>
                    <div>
                      <p>Puesto: {objinfo.infoUser.role}</p>
                      <p>Fecha de registro: {objinfo.infoUser.dateRegistered}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divitructionevent}>
                <label>Evento al que se le solicitara el cobro</label>
              </div>
              <div className={styles.infodate2}>
                <div className={styles.picture}>
                  <Image src={user2} alt='' />
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
                <h2>Solicitud de cobro</h2>
                <div className={styles.sharemenu}>
                  <Image src={menu} alt='' />
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.historydiv}>
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
                      background: '#707070',
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
                  <div className={styles.chardistance}>
                    <div>
                      <Button
                        variant='blackForm'
                        onClick={() => { router.push('/system/profile/company/event/1/adminstaff/askpersonalpayment') }}
                        borderRadius='10px'
                        style={{ background: '#1D802F' }}
                      >
                        Solicitar cobro primario
                      </Button>
                    </div>
                  </div>
                  <div className={styles.chardistance}>
                    <div>
                      <Button
                        variant='blackForm'
                        borderRadius='10px'
                        style={{
                          background: '#BB3334'
                        }}
                      >
                        Cancelar cobro a primario
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
