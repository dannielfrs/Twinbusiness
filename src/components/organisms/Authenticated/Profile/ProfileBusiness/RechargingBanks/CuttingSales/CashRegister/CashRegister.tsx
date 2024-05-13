'use client'

import { useState } from 'react'
import styles from './CashRegister.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import fotografia from '@/../public/images/icons/fotografia.jpg'
import carrito from '@/../public/images/icons/carrito.jpg'
import fightclub from '@/../public/images/icons/fightclub.jpg'
import CardBuy from '../CardBuy/CardBuy'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import InputText from '@/components/molecules/InputText/InputText'
import Button from '@/components/molecules/Button/Button/Button'
import GenerateQr from './GenerateQr/GenerateQr'
import { useRouter } from 'next/navigation'

export default function CashRegister () {
  //
  const methods = useForm()

  const onSubmit = () => { }

  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    router.push('/system/profile/businessman/dashboard/recharging-banks/delivery-qr')
  }

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
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.CashRegister}>
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
              <p className={styles.title}>Arqueo de ingresos</p>
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
            <div className={styles.header}>
              <div className={styles.contLeft}>
                <div className={styles.ImageProfile}>
                  <Image src={ryan_gosling} alt='' />
                </div>
                <div className={styles.contInfo}>
                  <p className={styles.name}>Ryan Gosling</p>
                  <p className={styles.email}>ryan@twin.com</p>
                </div>
              </div>
              <div className={styles.contRight}>
                <p className={styles.title}>Cargo: Banco de recargas 01</p>
                <div className={styles.date}>
                  <p>Hora inicio: 09:00a.m.</p>
                  <p>Hora cierre: 6:00p.m.</p>
                </div>
              </div>
            </div>
            <div className={styles.status}>
              <p className={styles.text}>Estatus</p>
              <p className={styles.text2}>Pendiente</p>
            </div>
            <div className={styles.request}>
              <p>SOLICITUD DE ARQUEO DE CAJA</p>
              <p className={styles.mini}>Efectivo en caja</p>
            </div>
            <Card className={styles.cash}>
              <p>178,250.00.</p>
              <p>MXN</p>
            </Card>
            <p className={styles.titleEnter}>Ingresa el monto de efectivo que se va a entregar</p>
            <InputText
              name=''
              label='Efectivo a entregar'
              placeholder='Ingresa el monto'
              height='63px'
              variant='secondary2'
              optional={false}
              required
            />
            <div className={styles.contEnd}>
              <p>Al generar el QR te mostrará el monto restante en la caja</p>
              <div style={{ width: '50%' }}>
                <Button variant='gray-color' onClick={openModal}>Guardar cambios y generar QR</Button>
              </div>
              <div style={{ width: '30%' }}>
                <Button variant='third' onClick={() => { router.push('/system/profile/businessman/dashboard/recharging-banks/cutting-sales') }}>Cancelar</Button>
              </div>
            </div>
          </div>
        </Card>
        {isModalOpen && (
          <GenerateQr closeModal={closeModal} />
        )}
      </div>
    </FormHookProvider>
  )
}
