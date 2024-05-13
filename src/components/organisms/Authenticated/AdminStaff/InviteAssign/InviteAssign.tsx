'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import Modal from '@/components/layouts/Modal/Modal'
import styles from './InviteAssign.module.scss'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import search from '@/../../public/images/icons/search.svg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'
import menu from '@/../../public/images/Home/AdminStaff/menu.svg'
import iconRefresh from '@/../../public/images/Home/AdminStaff/icon_refresh.png'
import successLogo from '@/../../public/images/icons/success.png'
import background from '@/../../public/images/Home/AdminStaff/bg_black.jpeg'

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
];

const rolesList = [
  { label: 'Heebo', value: 0 },
  { label: 'Inter', value: 1 },
]

export default function InviteAssign() {

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [type3, setType3] = useState('')
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const methods = useForm()

  const onSubmit = () => { }

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={`${styles.AdminStaff} ${styles.noScroll}`}>
          <Card className={styles.CardProfile}>
            <div className={styles.header}>
              <div className={styles.leffdiv}>
                <div className={styles.divtitle}>
                  <h1>Datos para invitar a usuario no encontrado</h1>
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
                  <p className={styles.title}>Buscar por no. de teléfono o correo</p>
                  <div>
                    <InputText
                      label=''
                      name='search'
                      // value={search}
                      // onChange={(e) => setSearch(e.target.value)}
                      placeholder='Buscar perfil para invitar'
                      icon={search}
                      iconPosRight={true}
                      //filter
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
            <div className={styles.tablediv}>
              <div className={styles.form}>
                <div className={`${styles.card} ${styles.carduser}`}>
                  <div className={styles.photodiv}>
                    <img src={ryan_gosling.src} />
                    <div>
                      <h4>Edgar Corr</h4>
                    </div>
                  </div>
                  <div className={styles.divcontact} style={{ textAlign: 'center' }}>
                    <p>Correo: Edgarcorr@gmail.com</p>
                    <p>Numero: 33 2342-43445</p>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.iconrefesh}>
                      <Image
                        src={iconRefresh}
                        alt=''
                      />
                    </div>
                    <div className={styles.iconrefesh}>
                      <Image
                        src={iconRefresh}
                        alt=''
                      />
                    </div>
                    <div className={styles.iconrefesh}>
                      <Image
                        src={menu}
                        alt=''
                      />
                    </div>
                  </div>

                </div>

              </div>
              <div className={styles.asing}>
                <div className={styles.divheader}>
                  <h2>Asignar nomina para el invitado</h2>
                  <div className={styles.inputs}>
                    <InputText
                      label=''
                      name='search'
                      // value={search}
                      // onChange={(e) => setSearch(e.target.value)}
                      placeholder='Ingresa nomina a pagar o bono'
                      //icon={search}
                      iconPosRight={true}
                      //filter
                      variant='search'
                      height='50px'
                    />
                  </div>
                  <div className={styles.inputs}>
                    <Dropdown
                      name='rolesList'
                      //onChange={(e) => setCountry(e.value)}
                      options={rolesList}
                      optionLabel='label'
                      placeholder='Asignar rol que tendrá el invitado'
                      variant='secondary'
                      height='30px'
                      label=''
                      panelClassName='panel'
                      dropdownIcon=''
                      value
                    />
                  </div>
                </div>
              </div>
              <div className={styles.contenbox}>
                <div className={styles.checkboxdiv}>
                  <div className={styles.checkboxdivinput}>
                    <Checkbox
                      inputId='type1'
                      name='type1'
                      value={type1}
                      onChange={() => setType1(type1 === '' ? 'ok' : '')}
                      checked={type1 === '' ? false : true}
                      variant='white'
                      className={styles.check}
                    />
                  </div>
                  <div className={styles.labeldiv}>
                    <p>Admin Todos permisos</p>
                  </div>
                  <div className={styles.commendiv}>
                    <label>Alerta este rol tendrá todos los permisos</label>
                  </div>
                </div>
                <div className={styles.checkboxdiv}>
                  <div className={styles.checkboxdivinput}>
                    <Checkbox
                      inputId='type2'
                      name='type2'
                      value={type2}
                      onChange={() => setType2(type2 === '' ? 'ok' : '')}
                      checked={type2 === '' ? false : true}
                      variant='white'
                      className={styles.check}
                    />
                  </div>
                  <div className={styles.labeldiv}>
                    <p>Admin Todos permisos</p>
                  </div>
                  <div className={styles.commendiv}>
                    <label>Alerta este rol tendrá todos los permisos</label>
                  </div>
                </div>
                <div className={styles.checkboxdiv}>
                  <div className={styles.checkboxdivinput}>
                    <Checkbox
                      inputId='type3'
                      name='type3'
                      value={type3}
                      onChange={() => setType1(type3 === '' ? 'ok' : '')}
                      checked={type3 === '' ? false : true}
                      variant='white'
                      className={styles.check}
                    />
                  </div>
                  <div className={styles.labeldiv}>
                    <p>Admin Todos permisos</p>
                  </div>
                  <div className={styles.commendiv}>
                    <label>Alerta este rol tendrá todos los permisos</label>
                  </div>
                </div>
              </div>
              <div className={styles.divbtninvite}>
                <div className={styles.btndiv}>
                  <Button
                    variant='blackForm'
                    onClick={() => { setShowModal(true) }}
                    borderRadius='10px'
                  >
                    Invitar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </FormHookProvider>
      <Modal
        title={''}
        content={<QRContent setShowModal={setShowModal} />}
        buttons={[]}
        show={showModal}
        size='medium'
        variant='white'
      />
    </>
  )
}

const QRContent = ({ setShowModal }: { setShowModal: any }) => {
  const obkInfo = {
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
  return (
    <div className={styles.divmodal}>
      <div className={styles.titlediv}>
        <h1>¡Invitación enviada!</h1>
        <Image src={successLogo} alt='' />
        <div className={styles.btndiv}>
          <Button
            variant='blackForm'
            onClick={() => { setShowModal(false) }}
            borderRadius='10px'
          >
            OK
          </Button>
        </div>
        <div className={styles.bg}>
          <div
            style={{
              background: `linear-gradient(45deg,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30) ), url(${background?.src}) no-repeat`,
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              height: 320,
              width: '100%',
              borderRadius: 20
            }}
          >
            <div className={styles.divbtns}>
              <Button
                variant='blackForm'
                //onClick={() => { setShowModal(false) }}
                borderRadius='10px'
                style={{
                  background: '#fff',
                  color: '#FF2772'
                }}
              >
                Comprar boleto
              </Button>
              <Button
                variant='blackForm'
                //onClick={() => { setShowModal(false) }}
                borderRadius='10px'
                style={{
                  background: '#fff',
                  color: '#FF2772'
                }}
              >
                Generar QR Efectivo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}