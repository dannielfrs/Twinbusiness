'use client'

import { useState } from 'react'
import styles from './PersonalRechargeBanks.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import CardBuy from '../RechargingBanks/CuttingSales/CardBuy/CardBuy'
import fightclub from '@/../public/images/icons/fightclub.jpg'
import fotografia from '@/../public/images/icons/fotografia.jpg'
import carrito from '@/../public/images/icons/carrito.jpg'
import InputText from '@/components/molecules/InputText/InputText'
import imageSearch from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import arroba1 from '@/../public/images/icons/arroba1.svg'
import copy from '@/../public/images/icons/copy.svg'
import scan from '@/../public/images/icons/scan1.svg'
import robertpattinson from '@/../public/images/icons/robertpattinson.jpg'
import Eye from '@/../public/images/icons/Eye.svg'
import more from '@/../public/images/icons/more.svg'
import andrew from '@/../public/images/icons/andrew.jpg'
import emma_stone from '@/../public/images/icons/emma_stone.jpg'
import BasicDemo from '@/components/molecules/InputSwitch/InputSwitch'
import editar from '@/../public/images/icons/editar.svg'
import delete1 from '@/../public/images/icons/delete.svg'
import ModalComissionsEditor from './ModalComissionsEditor/ModalComissionsEditor'
import { useRouter } from 'next/navigation'
import ModalUnregisteredUser from './ModalUnregisteredUser/ModalUnregisteredUser'

export default function PersonalRechargeBanks() {
  //
  const router = useRouter()
  const methods = useForm()
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

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

  const people = [
    {
      id: 1,
      image: robertpattinson,
      name: 'Robert Pattinson',
      rol: 'Banco',
      email: 'robertpattinson@gmail.com',
      number: '33 1470-5896',
      date: '12/06/2022'
    },
    {
      id: 2,
      image: andrew,
      name: 'Andrew Garfield',
      rol: 'Banco',
      email: 'andrewgarfield@gmail.com',
      number: '33 1470-5896',
      date: '15/06/2022'
    },
    {
      id: 3,
      image: emma_stone,
      name: 'Emma Stone',
      rol: 'Banco',
      email: 'emma_stone@gmail.com',
      number: '33 1480-8896',
      date: '15/12/2022'
    },
  ]

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal2 = () => {
    setIsModalOpen2(true)
  }

  const closeModal2 = () => {
    setIsModalOpen(false)
    setIsModalOpen2(false)
  }

  const [userNotFound, setUserNotFound] = useState(false)

  const onSubmit = () => {
    const foundUser = people.find((person) => person.email === search || person.number === search);
    if (!foundUser) {
      setUserNotFound(true)
    } else {
      setIsModalOpen(true)
    }
  }

  const closeModal3 = () => {
    setUserNotFound(false)
    setIsModalOpen(false)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.PersonalRechargeBanks}>
        <Card className={styles.CardPersonal}>
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
              <div className={styles.search}>
                <p className={styles.titleSearch}>Buscar por no. de teléfono o correo</p>
                <InputText
                  name='search'
                  label=''
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Buscar perfil para invitar'
                  icon={imageSearch}
                  iconPosRight
                  variant='SearchGray'
                  height='34px'
                />
              </div>
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
          <Card className={`${styles.personal} ${styles.noScroll}`}>
            <div className={styles.containers}>
              <div className={styles.contLeft}>
                <div className={styles.add} onClick={() => router.push('/system/profile/businessman/dashboard/personal-recharge-banks/invite')}>+</div>
                <p>Invitar personal banco/recargas</p>
                <div className={styles.icons}>
                  <Image src={arroba1} alt='' />
                  <Image src={copy} alt='' />
                  <Image src={scan} alt='' />
                </div>
              </div>
              <p className={styles.titleRight}>Personal Banco de recargas 10</p>
            </div>
            <div className={`${styles.contPeople} ${styles.noScroll}`}>
              {people.map((e: any) => {
                return (
                  <div key={e}>
                    <Card className={styles.person}>
                      <div className={styles.profile}>
                        <div className={styles.image}>
                          <Image src={e.image} alt='' />
                        </div>
                        <div className={styles.infoName}>
                          <p className={styles.name}>{e.name}</p>
                          <p className={styles.rol}>Rol: {e.rol}</p>
                        </div>
                      </div>
                      <div className={styles.contact}>
                        <p>Correo: {e.email}</p>
                        <p>Número: {e.number}</p>
                      </div>
                      <p className={styles.date}>Fecha de registro: {e.date}</p>
                      <div className={styles.actions}>
                        <div className={styles.show}>
                          <Image src={Eye} alt='' />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <BasicDemo />
                        </div>
                      </div>
                      <div className={styles.more} onClick={openModal}>
                        <Image src={more} alt='' />
                      </div>
                    </Card>
                    {isModalOpen && (
                      <Card className={styles.ModalActions}>
                        <div className={styles.closed} onClick={closeModal}>x</div>
                        <div className={styles.edit} onClick={openModal2}>
                          <Image src={editar} alt='' />
                          <p>Editar comisiones para banco de recargas</p>
                        </div>
                        <div className={styles.edit2}>
                          <Image src={editar} alt='' />
                          <p>Editar firma</p>
                        </div>
                        <div className={styles.delete}>
                          <Image src={delete1} alt='' />
                          <p>Borrar</p>
                        </div>
                      </Card>
                    )}
                  </div>
                )
              })}
              {isModalOpen2 && (
                <ModalComissionsEditor closeModal2={closeModal2} />
              )}
              {userNotFound && (
                <ModalUnregisteredUser closeModal={closeModal3} />
              )}
            </div>
          </Card>
        </Card>
      </div>
    </FormHookProvider>
  )
}
