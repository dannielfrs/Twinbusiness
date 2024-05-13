'use client'

import { useState } from 'react'
import styles from './CommandingStaff.module.scss'
import Card from '@/components/molecules/Card/Card'
import copygray from '@/../public/images/icons/copygray.svg'
import iconUpload from '@/../public/images/icons/iconUpload.png'
import logoEmpre from '@/../public/images/trash/imgIbf.png'
import imgGirl from '@/../public/images/trash/card1.png'
import imgCar from '@/../public/images/trash/55.png'
import qr from '@/../../public/images/companies/control(8).svg'
import edit from '@/../../public/images/Events/editar@2.png'
import eliminar from '@/../../public/images/Events/eliminar@2.png'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import user1 from '@/../public/images/Home/ProfileBussines/Rounded.png'
import user2 from '@/../public/images/Home/ProfileBussines/Rounded1.png'
import user3 from '@/../public/images/Home/ProfileBussines/Rounded2.png'
import user4 from '@/../public/images/Home/ProfileBussines/Rounded3.png'
import user5 from '@/../public/images/Home/ProfileBussines/Rounded4.png'
import eye from '@/../../public/images/Home/AdminStaff/eye.svg'
import menu from '@/../../public/images/Home/AdminStaff/menu.svg'
import { InputSwitch } from 'primereact/inputswitch'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import plusLogo from '@/../../public/images/icons/plus.svg'
import arroba from '@/../../public/images/icons/arroba.svg'
import scan from '@/../../public/images/icons/scan.svg'
import Modal from '@/components/organisms/Authenticated/Wallet/Modals/EmptyAlert/EmptyAlert'
import iconRefresh from '@/../../public/images/Home/AdminStaff/icon_refresh.png'
import twinbusiness from '@/../../public/images/Home/ProfileBussines/twinbusiness.png'

export default function InputInventories() {
  //
  const [activeIndexList, setActiveIndexList] = useState<number | boolean>(false)
  const [modal, setModal] = useState(false)
  const [invite, setInvite] = useState(false)
  const [checked, setChecked] = useState(false)
  const methods = useForm()
  const router = useRouter()

  const onSubmit = () => { }

  const usersList = [
    {
      img: user1?.src,
      name: 'Edgar Corr',
      role: 'Empresario secundario',
      tel: '33 2342-43445',
      email: 'Edgarcorr@gmail.com',
      dateRegistered: '12/06/2022'
    },
    {
      img: user2?.src,
      name: 'Edgar Corr',
      role: 'Empresario secundario',
      tel: '33 2342-43445',
      email: 'Edgarcorr@gmail.com',
      dateRegistered: '12/06/2022'
    },
    {
      img: user3?.src,
      name: 'Edgar Corr',
      role: 'Empresario secundario',
      tel: '33 2342-43445',
      email: 'Edgarcorr@gmail.com',
      dateRegistered: '12/06/2022'
    },
    {
      img: user4?.src,
      name: 'Edgar Corr',
      role: 'Empresario secundario',
      tel: '33 2342-43445',
      email: 'Edgarcorr@gmail.com',
      dateRegistered: '12/06/2022'
    },
    {
      img: user5?.src,
      name: 'Edgar Corr',
      role: 'Empresario secundario',
      tel: '33 2342-43445',
      email: 'Edgarcorr@gmail.com',
      dateRegistered: '12/06/2022'
    }
  ]

  return (
    <div className={`${styles.Profile} ${styles.noScroll}`}>
      <Card className={styles.CardProfile}>
        <div className={styles.inventory}>
          Personal comandero o punto de venta
        </div>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.flex + ' ' + styles.gap40 + ' ' + styles.marginB20}>
            <div className={styles.col_33}>
              <div className={styles.cardlogo}>
                <Image src={logoEmpre} alt='logo' height={50} width={50} className={styles.image} />
                <div>
                  <div className={styles.inventory}>IBF Boca de iguanas</div>
                  <div className={styles.flex + ' ' + styles.gap30}>
                    <div className={styles.text_justify}>
                      <div>Inicia 07/08/2022</div>
                      <div>Finaliza 07/08/2022</div>
                    </div>
                    <div className={styles.text_justify}>
                      <div>Hora 12:00 P.M.</div>
                      <div>Hora 16:00 P.M.</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>Personal comandero o punto de venta</div> */}
              <div className={styles.inventory}>{!invite && 'Personal comandero o punto de venta'}</div>
              <div className={styles.inventory2}>Buscar por no. de teléfono o correo</div>
              <div>
                <InputText
                  name='search'
                  icon={search}
                  imageStyle={{ height: 46, width: 44 }}
                  className={styles.h40}
                />
              </div>
            </div>
            <div className={styles.col_33 + ' ' + styles.cardsR} style={{ backgroundImage: `url(${imgGirl.src})` }}>
              <div className={styles.titleR}>¿No sabes como editar tus fotos?</div>
              <div className={styles.subTitleR}>Compra un paquete que te sube tus fotos con fondo blanco o transparente</div>
              <div className={styles.buttonR}>Comprar</div>
            </div>
            <div className={styles.col_33 + ' ' + styles.cardsR} style={{ backgroundImage: `url(${imgCar.src})` }}>
              <div className={styles.titleR100}>¿Tienes más de 50 productos?</div>
              <div className={styles.subTitleR100}>Amplia tu espacio de productos, servicios, subastas o bolsas de compra con alguno de nuestros paquetes</div>
              <div className={styles.buttonR}>Comprar</div>
            </div>
          </div>
          <div className={styles.divshare}>
            <Card className={styles.CardProfile}>
              <div className={styles.flexJustify}>
                <div>
                  <div className={styles.adddiv}>
                    <img src={plusLogo?.src} width={40} height={40} />
                    <p className={styles.inventory} onClick={() => { setInvite(true) }}>Invitar personal comandero</p>
                    <img src={arroba?.src} width={17} height={20} style={{ marginTop: 7, marginLeft: -10 }} onClick={() => { setModal(true) }} />
                    <img src={copygray?.src} width={17} height={24} style={{ marginTop: 7, marginLeft: -10 }} />
                    <img src={iconUpload?.src} width={17} height={24} style={{ marginTop: 7, marginLeft: -10 }} />
                    <img src={scan?.src} width={24} height={24} style={{ marginTop: 7, marginLeft: -10 }} onClick={() => { setModal(true) }} />
                  </div>
                </div>
                <div className={styles.inventory}>{!invite ? 'Personal comandero punto de venta 10' : 'Personal comandero p/venta 3'}</div>
              </div>
              <div className={styles.content}>
                {usersList.map((item, key) => {
                  return (
                    <div className={`${styles.card} ${styles.carduser}`} key={key}>
                      <div className={styles.photodiv}>
                        <img src={item.img} />
                        <div>
                          <h4 className={styles.name}>{item.name}</h4>
                          {!invite &&
                            <h4 className={styles.sub}>{item.role}</h4>
                          }
                        </div>
                      </div>
                      <div className={styles.divcontact}>
                        <p className={styles.fs20}>Correo: {item.email}</p>
                        <p className={styles.fs20}>Numero: {item.tel}</p>
                      </div>
                      {!invite ?
                        <div className={styles.divcontact}>
                          <p className={styles.fs20}>Fecha de registro: {item.dateRegistered}</p>
                        </div>
                        :
                        <div></div>
                      }
                      {!invite ?
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
                            <Image src={menu} height={24} width={24} alt='' className={styles.m6} onClick={() => { key !== activeIndexList ? setActiveIndexList(key) : setActiveIndexList(false) }} />
                            {activeIndexList === key &&
                              (
                                <div className={styles.menu}>
                                  <div className={styles.menuInt}>
                                    <div className={styles.titleSixe}>
                                      <div style={{ padding: '15px 0 0 34px' }}>Acciones</div>
                                      <Image src={menu} height={24} width={24} alt='' className={styles.m6 + ' ' + styles.mt14px} onClick={() => { key !== activeIndexList ? setActiveIndexList(key) : setActiveIndexList(false) }} />
                                    </div>
                                    <Link href='/system/profile/company/event/1/commanding-staff/create'>
                                      <div className={styles.contMenu}><Image className={styles.height16} src={edit} alt='' />Editar comisiones 0 bonos para comandero/p venta</div>
                                    </Link>
                                    <div className={styles.contMenu}><Image className={styles.height16} src={eliminar} alt='' />Borrar</div>
                                  </div>
                                </div>
                              )}
                          </div>
                        </div>
                        :
                        <div className={styles.actions}>
                          <div className={styles.diveye}>
                            <Image src={iconRefresh} alt='' />
                          </div>
                          <div className={styles.diveye}>
                            <Image src={twinbusiness} alt='' />
                          </div>
                          <Image src={menu} height={24} width={24} alt='' className={styles.m6} onClick={() => { key !== activeIndexList ? setActiveIndexList(key) : setActiveIndexList(false) }} />
                          {activeIndexList === key &&
                            (
                              <div className={styles.menu}>
                                <div className={styles.menuInt}>
                                  <div className={styles.titleSixe}>
                                    <div style={{ padding: '15px 0 0 34px' }}>Acciones</div>
                                    <Image src={menu} height={24} width={24} alt='' className={styles.m6 + ' ' + styles.mt14px} onClick={() => { key !== activeIndexList ? setActiveIndexList(key) : setActiveIndexList(false) }} />
                                  </div>
                                  <Link href='/system/profile/company/event/1/commanding-staff/create'>
                                    <div className={styles.contMenu}><Image className={styles.height16} src={edit} alt='' />Editar comisiones 0 bonos para comandero/p venta</div>
                                  </Link>
                                  <div className={styles.contMenu}><Image className={styles.height16} src={eliminar} alt='' />Borrar</div>
                                </div>
                              </div>
                            )}
                        </div>
                      }
                    </div>
                  )
                })}
              </div>
              {invite &&
                <div style={{ position: 'absolute', bottom: '55px', width: 'calc(100% - 270px)', background: '#f8f8fc', padding: '20px', marginLeft: '-20px' }}>
                  <div className={styles.btnB} style={{ maxWidth: '400px', margin: 'auto', fontSize: '24px', height: '43px' }}>Invitar</div>
                </div>
              }
            </Card>
          </div>
        </FormHookProvider>
      </Card>
      {modal &&
        (
          <Modal onClickX={() => { setModal(false) }}>
            <div style={{ padding: '50px', width: '100%', paddingTop: 0 }}>
              <div className={styles.textMod}>QR DE PERFIL DE USUARIO</div>
              <Card>
                <div style={{ padding: '20px', justifyContent: 'center', display: 'grid' }}>
                  <div className={styles.flex + ' ' + styles.gap20 + ' ' + styles.justifyCenter}>
                    <Image src={user4} alt='' className={styles.imgShadow} />
                    <div>
                      <div className={styles.fs25bold}>Edgar Corr</div>
                      <div>Email@mail.com</div>
                    </div>
                  </div>
                  <Image src={qr} alt='' className={styles.imgShadowQr} />
                  <div className={styles.textBig} style={{ width: '56%' }}>El QR contiene tus datos como nombre, correo, numero de teléfono</div>
                </div>
              </Card>
            </div>
          </Modal>
        )}
    </div>
  )
}
