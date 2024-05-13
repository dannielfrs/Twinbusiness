'use client'

import React from 'react'
import styles from './DeliveryQr.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import CardBuy from '../CuttingSales/CardBuy/CardBuy'
import RequestTable from '../CuttingSales/RequestTable/RequestTable'
import fotografia from '@/../public/images/icons/fotografia.jpg'
import carrito from '@/../public/images/icons/carrito.jpg'
import QRMenuPublico from '@/../public/images/icons/QRMenuPublico.svg'
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'

export default function DeliveryQr () {
  //
  const router = useRouter()

  const data = [
    {
      id: 1,
      image: fotografia,
      question: '¿No sabes cómo editar tus fotos?',
      text: 'Compra un paquete que te sube tus fotos con fondo blanco o transparente',
      showButton: true
    },
    {
      id: 2,
      image: carrito,
      question: '¿Tienes más de 50 productos?',
      text: 'Amplia tu espacio de productos , servicios, subastas o bolsas de compras con alguno de nuestros paquetes',
      showButton: true
    }
  ]

  return (
    <div className={styles.CountingSales}>
      <Card className={`${styles.CardSales} ${styles.noScroll}`}>
        <div className={styles.containerTop}>
          <div className={styles.cont1}>
            <p className={styles.title}>QR de entrega</p>
            <div className={styles.qr}>
              <Image alt='' src={QRMenuPublico} />
            </div>
            <p className={styles.title}>Recargas totales</p>
          </div>
          <div className={styles.containerCards}>
            {data.map((e, key) => {
              return (
                <div className={styles.ContainerBuy} key={key}>
                  <CardBuy
                    image={e.image}
                    text={e.text}
                    question={e.question}
                    showButton={e.showButton}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.containerTable}>
          <RequestTable
            numberA='01'
            status='Pendiente'
            backgroundRed
          />
          <div className={styles.white}>
            <p className={styles.text}>Arqueo efectivo</p>
            <p className={styles.number}>100,000.00 MXN</p>
          </div>
          <div className={styles.contBottom}>
            <p className={styles.textTotal}>Total de Venta</p>
            <div className={styles.textNumber}>
              <p className={styles.number}>266,750.00</p>
              <p className={styles.text}>MXN</p>
            </div>
            <div style={{ width: '30%' }}>
              <Button variant='third' onClick={() => { router.push('/system/profile/businessman/dashboard/recharging-banks/cutting-sales/cash-register') }}>Cancelar</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
