'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { InputSwitch } from 'primereact/inputswitch'
import { Menu } from 'primereact/menu'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import styles from './AdminStaff.module.scss'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import search from '@/../../public/images/icons/search.svg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'
import plusLogo from '@/../../public/images/icons/plus.svg'
import user1 from '@/../public/images/Home/ProfileBussines/Rounded.png'
import user2 from '@/../public/images/Home/ProfileBussines/Rounded1.png'
import user3 from '@/../public/images/Home/ProfileBussines/Rounded2.png'
import user4 from '@/../public/images/Home/ProfileBussines/Rounded3.png'
import user5 from '@/../public/images/Home/ProfileBussines/Rounded4.png'
import eye from '@/../../public/images/Home/AdminStaff/eye.svg'
import menu from '@/../../public/images/Home/AdminStaff/menu.svg'

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
    buttonLink: '',
    name: 'name1'
  },
  {
    background: bg2,
    title: '¿Tienes más de 50 productos?',
    description: 'Amplia tu espacio de productos, servicios, subastas o bolsas de compra con alguno de nuestros paquetes',
    buttonText: 'Comprar',
    buttonLink: '',
    name: 'name2'
  }
];

const usersList = [
  {
    img: user1?.src,
    name: 'Edgar Corr1',
    role: 'Empresario secundario',
    tel: '33 2342-43445',
    email: 'Edgarcorr@gmail.com',
    dateRegistered: '12/06/2022'
  },
  {
    img: user2?.src,
    name: 'Edgar Corr2',
    role: 'Empresario secundario',
    tel: '33 2342-43445',
    email: 'Edgarcorr@gmail.com',
    dateRegistered: '12/06/2022'
  },
  {
    img: user3?.src,
    name: 'Edgar Corr3',
    role: 'Empresario secundario',
    tel: '33 2342-43445',
    email: 'Edgarcorr@gmail.com',
    dateRegistered: '12/06/2022'
  },
  {
    img: user4?.src,
    name: 'Edgar Corr4',
    role: 'Empresario secundario',
    tel: '33 2342-43445',
    email: 'Edgarcorr@gmail.com',
    dateRegistered: '12/06/2022'
  },
  {
    img: user5?.src,
    name: 'Edgar Corr5',
    role: 'Empresario secundario',
    tel: '33 2342-43445',
    email: 'Edgarcorr@gmail.com',
    dateRegistered: '12/06/2022'
  }
];

const itemsActions = [
  {
    label: 'Acciones',
    items: [
      {
        label: 'Editar comisiones para taquilla',
        icon: 'pi pi-pencil',
        command: () => {
          //toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
      },
      {
        label: 'Borrar',
        icon: 'pi pi-trash',
        command: () => {
          //toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
      }
    ]
  }
]

export default function AdminStaff() {

  const [checked, setChecked] = useState(false)
  const menuRef: any = useRef([])
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
                <h1>Personal del evento</h1>
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
            <div className={styles.header}>
              <div className={styles.invitediv}>
                <div className={styles.adddiv} onClick={() => router.push('/system/profile/company/event/1/adminstaff/invitestaff')}>
                  <img src={plusLogo?.src} />
                  <p>Invitar personal/staff</p>
                </div>
              </div>
              <div className={styles.registereddiv}>
                <h2>Personal/staff registrado {10}</h2>
              </div>
            </div>
            <div className={styles.content}>
              {usersList.map((item, key) => {
                return (
                  <div className={`${styles.card} ${styles.carduser}`} key={key}>
                    <div className={styles.photodiv}>
                      <img src={item.img} />
                      <div>
                        <h4>{item.name}</h4>
                        <h4>{item.role}</h4>
                      </div>
                    </div>
                    <div className={styles.divcontact}>
                      <p>Correo: {item.email}</p>
                      <p>Numero: {item.tel}</p>
                    </div>
                    <div className={styles.divcontact}>
                      <p>Fecha de registro: {item.dateRegistered}</p>
                    </div>
                    <div className={styles.actions}>
                      <div className={styles.diveye}>
                        <Image src={eye} alt='' onClick={() => router.push('/system/profile/company/event/1/adminstaff/view')} />
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <InputSwitch
                          checked={checked}
                          onChange={(e) => setChecked(e.value)}
                        />
                        <div>
                          <label>Activar accesos</label>
                        </div>
                      </div>
                      <div>
                        <Image
                          src={menu}
                          alt=''
                          onClick={(event) => menuRef.current[item?.name].toggle(event)}
                        />
                        <Menu
                          id='popup_menu_left'
                          ref={menuRef}
                          model={itemsActions}
                          popup
                          style={{ padding: 15, borderRadius: 10, }}
                          className={styles.menuactions}
                        />
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
