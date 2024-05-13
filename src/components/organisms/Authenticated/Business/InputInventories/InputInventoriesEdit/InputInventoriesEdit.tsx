'use client'

import { useState } from 'react'
import styles from './InputInventoriesEdit.module.scss'
import Card from '@/components/molecules/Card/Card'
import danger from '@/../public/images/icons/danger.png'
import logoEmpre from '@/../public/images/trash/imgIbf.png'
import imgGirl from '@/../public/images/trash/card1.png'
import imgCar from '@/../public/images/trash/55.png'
import plusLogo from '@/../../public/images/icons/plus.svg'
import edit from '@/../../public/images/Events/editar@2.png'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import Modal from '@/components/organisms/Authenticated/Wallet/Modals/EmptyAlert/EmptyAlert'
import Link from 'next/link'

export default function InputInventories () {
  //
  const [activeModal, setActiveModal] = useState(false)
  const methods = useForm()

  const onSubmit = () => { }

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
                  placeholder='Buscar boleto'
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
              <div className={styles.adddiv}>
                <img src={plusLogo?.src} />
                <p className={styles.inventory}>Crear catálogo</p>
              </div>
              <div className={styles.inventory20}>En esta sección verá el detalle de venta de insumos</div>
              <div className={styles.inventory}>Surtir inventario</div>
            </div>
            <div className={`${styles.card} ${styles.mb50}`}>
              <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <div className={styles.container + ' ' + styles.white}>
                  <div className={`${styles.card} ${styles.carduser} ${styles.white}`}>
                    <div className={styles.photodiv}>
                      <h4>Categoria</h4>
                    </div>
                    <div className={styles.divcontact}>
                      <div className={styles.mAuto}></div>
                      <p>300 - 299 = 1</p>
                      <div className={styles.w22px}></div>
                    </div>
                  </div>
                  <div className={`${styles.card} ${styles.carduser} ${styles.white}`}>
                    <div className={styles.photodiv}>
                      <div className={styles.mAuto} />
                      <h4>Stock</h4>
                    </div>
                    <div className={styles.divcontact}>
                      <div className={styles.mAuto} />
                      <InputText
                        name='search1'
                        icon={edit}
                        imageStyle={{ height: 20, width: 18, top: 13, right: 0 }}
                        className={styles.h50a}
                        defaultValue='500'
                      />
                    </div>
                  </div>
                  <div className={`${styles.card} ${styles.carduser} ${styles.white}`}>
                    <div className={styles.photodiv}>
                      <h4>Fecha de registro</h4>
                    </div>
                    <div className={styles.divcontact}>
                      <div className={styles.mAuto} />
                      <p>800</p>
                      <div className={styles.w22px} />
                    </div>
                  </div>
                  <div className={`${styles.card} ${styles.carduser} ${styles.white}`}>
                    <div className={styles.photodiv}>
                      <h4>Precio de producto</h4>
                    </div>
                    <div className={styles.divcontact}>
                      <div className={styles.mAuto} />
                      <InputText
                        name='search'
                        icon={edit}
                        imageStyle={{ height: 20, width: 18, top: 13, right: 0 }}
                        className={styles.h50}
                        defaultValue='120.00 MXN'
                      />
                    </div>
                  </div>
                </div>
              </FormHookProvider>
            </div>
            <div className={styles.flex + ' ' + styles.gap40}>
              <Link href='/system/profile/company/event/1/input-inventories' style={{ marginLeft: 'auto' }}>
                <div className={styles.btnW}>Cancelar</div>
              </Link>
              <div className={styles.btnB} onClick={() => { setActiveModal(true) }}>Guardar</div>
            </div>
          </Card>
        </div>
      </Card>
      {activeModal &&
        <Modal onClickX={() => { setActiveModal(false) }}>
          <div style={{ padding: '50px', width: '100%' }}>
            <Card>
              <div style={{ padding: '20px', textAlignLast: 'center' }}>
                <div><Image src={danger} alt='' height={70} width={70} className={styles.mAuto} /></div>
                <div className={styles.textModal}>ALERTA SE MODIFICARAN LOS CAMBIOS POR INVENTARIO EN TIEMPO REAL</div>
                <div className={styles.btnR}>Confirmar</div>
                <div className={styles.btnG}>Cancelar</div>
              </div>
            </Card>
          </div>
        </Modal>
      }
    </div>
  )
}
