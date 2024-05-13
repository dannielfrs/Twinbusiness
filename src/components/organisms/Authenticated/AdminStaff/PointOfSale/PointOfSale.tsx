'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import { CardStatistics } from '../../Profile/ProfileBusiness/CardStatistics/CardStatistics'
import styles from './PointOfSale.module.scss'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'
import at from '@/../../public/images/Home/AdminStaff/at.svg'
import expand from '@/../../public/images/Home/AdminStaff/expand.svg'
import files from '@/../../public/images/Home/AdminStaff/files.svg'
import image from '@/../../public/images/Home/AdminStaff/image.svg'

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

export default function PointOfSale() {
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
                <h1>Ventas boletaje por punto de venta</h1>
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
                <p className={styles.title}>Estadísticas de ventas/boletaje</p>
                <div className={styles.divbtns}>
                  <Button
                    variant='blackForm'
                    // onClick={saveDatas}
                    borderRadius='10px'
                    style={{ background: '#707070' }}
                  >
                    Vender boletos
                  </Button>
                  <Button
                    variant='blackForm'
                    // onClick={saveDatas}
                    borderRadius='10px'
                  >
                    Boletos cortesía
                  </Button>
                </div>
              </div>
            </div>
            <div>
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
            <div className={styles.header}>
              <div className={styles.invitediv}>
                <Button
                  variant='blackForm'
                  // onClick={saveDatas}
                  borderRadius='10px'
                >
                  Boletos vendidos totales
                </Button>
              </div>
              <div className={styles.registereddiv}>
                <h2>Realizar arqueo de caja</h2>
                <Image src={at} alt='' />
                <Image src={files} alt='' />
                <Image src={image} alt='' />
                <Image src={expand} alt='' />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.graphics}>
                <div className={styles.grafica1}>
                  <CardStatistics
                    doughnutLabels={['Arqueo de bancos', 'Arqueo punto de venta', 'Arqueo de RPs', 'Arqueo de taquillas']}
                    doughnutValues={[25, 25, 50, 50]}
                    title='Estadísticas de bancos de recarga'
                    text='Boletos vendidos 1849 pza'
                  />
                </div>
                <div className={styles.grafica2}>
                  <CardStatistics
                    doughnutLabels={['Corte de caja bancos', 'Corte de caja p/venta', 'Corte de caja RPs', 'Corte de caja taquillas']}
                    doughnutValues={[12, 10, 3, 50]}
                    title='Estadísticas de QRs generados'
                    text='Boletaje cortesía 1250 paz'
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </FormHookProvider>
  )
}
