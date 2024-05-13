'use client'

import { useState } from 'react'
import styles from './CuttingSales.module.scss'
import Card from '@/components/molecules/Card/Card'
import fightclub from '@/../public/images/icons/fightclub.jpg'
import Image from 'next/image'
import CardBuy from './CardBuy/CardBuy'
import fotografia from '@/../public/images/icons/fotografia.jpg'
import carrito from '@/../public/images/icons/carrito.jpg'
import RequestTable from './RequestTable/RequestTable'
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'
import ModalSuccess from './ModalSuccess/ModalSuccess'

export default function CuttingSales () {
  //
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

  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    router.push('/system/profile/businessman/dashboard/recharging-banks/cutting-sales/cash-count')
  }

  return (
    <div className={styles.CountingSales}>
      <Card className={`${styles.CardSales} ${styles.noScroll}`}>
        <div className={styles.containerTop}>
          <div className={styles.cont1}>
            <Card className={styles.cardBank}>
              <div className={styles.Image}>
                <Image src={fightclub} alt='' />
              </div>
              <div className={styles.right}>
                <p className={styles.title}>IBF Boca de iguanas</p>
                <div className={styles.start}>
                  <div className={styles.day}>
                    <p>Inicia</p>
                    <p>07/08/2022</p>
                  </div>
                  <div className={styles.hour}>
                    <p>Hora</p>
                    <p>12:00 PM</p>
                  </div>
                </div>
                <div className={styles.start}>
                  <div className={styles.day}>
                    <p>Finaliza</p>
                    <p>07/08/2022</p>
                  </div>
                  <div className={styles.hour}>
                    <p>Hora</p>
                    <p>16:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>
            <p className={styles.title}>Ventas totales</p>
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
            backgroundGray
            numberA='00'
            status='Pendiente'
            backgroundRed
          />
          <div className={styles.contBottom}>
            <p className={styles.textTotal}>Total de Venta</p>
            <div className={styles.textNumber}>
              <p className={styles.number}>266,750.00</p>
              <p className={styles.text}>MXN</p>
            </div>
            <div style={{ width: '50%' }}>
              <Button variant='gray-color' onClick={openModal}>Realizar arqueo</Button>
            </div>
            <div style={{ width: '50%' }}>
              <Button variant='third' onClick={() => { router.push('/system/profile/businessman/dashboard/recharging-banks/cutting-sales/cash-register') }}>Realizar corte de caja</Button>
            </div>
            <div style={{ width: '30%' }}>
              <Button variant='third'>Cancelar</Button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <ModalSuccess closeModal={closeModal} />
        )}
      </Card>
    </div>
  )
}
