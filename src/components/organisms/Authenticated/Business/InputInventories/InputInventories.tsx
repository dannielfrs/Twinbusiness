'use client'

import { useState } from 'react'
import styles from './InputInventories.module.scss'
import Card from '@/components/molecules/Card/Card'
import logoEmpre from '@/../public/images/trash/imgIbf.png'
import imgGirl from '@/../public/images/trash/card1.png'
import imgCar from '@/../public/images/trash/55.png'
import plusLogo from '@/../../public/images/icons/plus.svg'
import edit from '@/../../public/images/Events/editar@2.png'
import eliminar from '@/../../public/images/Events/eliminar@2.png'
import eye from '@/../../public/images/Home/AdminStaff/eye.svg'
import menu from '@/../../public/images/Home/AdminStaff/menu.svg'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import danger from '@/../public/images/icons/danger.png'
import Modal from '@/components/organisms/Authenticated/Wallet/Modals/EmptyAlert/EmptyAlert'
import Link from 'next/link'

export default function InputInventories () {
  //
  const [activeIndexList, setActiveIndexList] = useState<number | boolean>(false)
  const [activeModal, setActiveModal] = useState(false)
  const methods = useForm()

  const onSubmit = () => { }

  const list = [
    {
      text1: 'Categoria',
      data1: 'Mariscos',
      text2: 'Stock',
      data2: '800',
      text3: 'Fecha de registro',
      data3: '30/08/22 15:30 hrs',
      text4: 'Precio de producto',
      data4: '$100.00 MXN'
    },
    {
      text1: 'Categoria',
      data1: 'Mariscos',
      text2: 'Stock',
      data2: '800',
      text3: 'Fecha de registro',
      data3: '30/08/22 15:30 hrs',
      text4: 'Precio de producto',
      data4: '$100.00 MXN'
    }
  ]

  return (
    <div className={`${styles.Profile} ${styles.noScroll}`}>
      <Card className={styles.CardProfile}>
        <div className={styles.inventory}>
          Inventario de insumos secundario
        </div>
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
            <div className={styles.inventory}>Inventario de insumos</div>
            <div>
              <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <InputText
                  name='search'
                  icon={search}
                  imageStyle={{ height: 46, width: 44 }}
                  className={styles.h40}
                  placeholder='buscar productos/servicios'
                />
              </FormHookProvider>
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
              <Link href='/system/profile/company/event/1/input-inventories/create'>
                <div className={styles.adddiv}>
                  <img src={plusLogo?.src} width={42} height={42} />
                  <p className={styles.inventory}>Crear catálogo</p>
                </div>
              </Link>
              {/* <div className={styles.inventory}>
                  Crear catálogo
                </div> */}
              <div className={styles.inventory}>En esta sección verá el detalle de venta de insumos</div>
            </div>
            {list.map((item, key) => {
              return (
                <div className={`${styles.card} ${styles.mb50}`} key={key}>
                  <div className={styles.title}>
                    <div className={styles.divText}>
                      <Image src={logoEmpre} alt='logo' height={50} width={50} className={styles.image} />
                    </div>
                    <div className={styles.divTitle}>
                      <h1>Pastel de salmon</h1>
                    </div>
                    <div className={styles.flex + ' ' + styles.pRelative}>
                      <div className={styles.mAuto} />
                      <Image src={menu} height={34} width={34} alt='' className={styles.m16} onClick={() => { key !== activeIndexList ? setActiveIndexList(key) : setActiveIndexList(false) }} />
                      {activeIndexList === key &&
                        (
                          <div className={styles.menu}>
                            <div className={styles.menuInt}>
                              <div className={styles.titleSixe}>
                                <div style={{ padding: '15px 0 0 34px' }}>Acciones</div>
                                <Image src={menu} height={34} width={34} alt='' className={styles.m16 + ' ' + styles.mt14px} onClick={() => { key !== activeIndexList ? setActiveIndexList(key) : setActiveIndexList(false) }} />
                              </div>
                              <Link href='/system/profile/company/event/1/input-inventories/itemId/edit'>
                                <div className={styles.contMenu}><Image className={styles.height16} src={edit} alt='' />Editar</div>
                              </Link>
                              <div className={styles.contMenu}><Image className={styles.height16} src={eye} alt='' />Ver</div>
                              <div className={styles.contMenuRed} onClick={() => { setActiveModal(true) }}><Image className={styles.height16} src={eliminar} alt='' />Borrar</div>
                            </div>
                          </div>

                        )}
                    </div>
                  </div>
                  <div className={styles.container}>
                    <div className={`${styles.card} ${styles.carduser}`}>
                      <div className={styles.photodiv}>
                        <h4>{item.text1}</h4>
                      </div>
                      <div className={`${styles.divcontact}`}>
                        <div className={styles.mAuto} />
                        <p>{item.data1}</p>
                      </div>
                    </div>
                    <div className={`${styles.card} ${styles.carduser}`} key={key}>
                      <div className={styles.photodiv}>
                        <div className={styles.mAuto} />
                        <h4>{item.text2}</h4>
                      </div>
                      <div className={styles.divcontact}>
                        <div className={styles.mAuto} />
                        <p>{item.data2}</p>
                        <div className={styles.buttonR + ' ' + styles.m10}>Surtir</div>
                      </div>
                    </div>
                    <div className={`${styles.card} ${styles.carduser}`} key={key}>
                      <div className={styles.photodiv}>
                        <h4>{item.text3}</h4>
                      </div>
                      <div className={styles.divcontact}>
                        <div className={styles.mAuto} />
                        <p>{item.data3}</p>
                      </div>
                    </div>
                    <div className={`${styles.card} ${styles.carduser}`} key={key}>
                      <div className={styles.photodiv}>
                        <h4>{item.text4}</h4>
                      </div>
                      <div className={styles.divcontact}>
                        <div className={styles.mAuto} />
                        <p>{item.data4}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Card>
        </div>
      </Card>
      {activeModal &&
        (
          <Modal onClickX={() => { setActiveModal(false) }}>
            <div style={{ padding: '50px', width: '100%' }}>
              <Card>
                <div style={{ padding: '20px', textAlignLast: 'center' }}>
                  <div><Image src={danger} alt='' height={70} width={70} className={styles.mAuto} /></div>
                  <div className={styles.textModal}>ALERTA SE ELIMINARA LA CATEGORÍA QUE BORRARA TODO EL CONTENIDO DE LA MISMA</div>
                  <div className={styles.btnR} onClick={() => { setActiveModal(false) }}>Confirmar</div>
                  <div className={styles.btnG} onClick={() => { setActiveModal(false) }}>Cancelar</div>
                </div>
              </Card>
            </div>
          </Modal>
        )}
    </div>
  )
}
