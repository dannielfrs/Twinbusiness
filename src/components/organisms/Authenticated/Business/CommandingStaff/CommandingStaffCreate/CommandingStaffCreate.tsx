'use client'

import React, { useState } from 'react'
import styles from './CommandingStaffCreate.module.scss'
import Card from '@/components/molecules/Card/Card'
import logoEmpre from '@/../public/images/trash/imgIbf.png'
import ad from '@/../public/images/trash/d.png'
import imgGirl from '@/../public/images/trash/card1.png'
import imgCar from '@/../public/images/trash/55.png'
import edit from '@/../../public/images/Events/editar@2.png'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import cancel from '@/../public/images/icons/cancel.png'
import danger from '@/../public/images/icons/danger.png'
import success from '@/../public/images/icons/success.png'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import user1 from '@/../public/images/Home/ProfileBussines/Rounded.png'
import iconRefresh from '@/../../public/images/Home/AdminStaff/icon_refresh.png'
import twinbusiness from '@/../../public/images/Home/ProfileBussines/twinbusiness.png'
import percent from '@/../../public/images/Home/AdminStaff/percent.png'
import Modal from '@/components/organisms/Authenticated/Wallet/Modals/EmptyAlert/EmptyAlert'
import Link from 'next/link'

export default function InputInventories () {
  //
  const methods = useForm()
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)

  const onSubmit = () => { }

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
              <div className={styles.inventory}>Buscar por no. de teléfono o correo</div>
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
              <div className={styles.content}>
                <div className={`${styles.card} ${styles.carduser} ${styles.alingCenter}`}>
                  <div className={styles.photodiv}>
                    <img src={user1?.src} />
                    <div className={styles.alingCenter}>
                      <h4 className={styles.name}>Edgar Corr</h4>
                    </div>
                  </div>
                  <div className={`${styles.divcontact} ${styles.alingCenter}`}>
                    <p className={styles.fs20}>Correo: 33 2342-43445</p>
                    <p className={styles.fs20}>Numero: Edgarcorr@gmail.com</p>
                  </div>
                  <div className={`${styles.divcontact} ${styles.alingCenter}`}>
                    <p className={`${styles.fs20} ${styles.alingCenter}`}>Fecha de registro: 12/06/2022</p>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.diveye}>
                      <Image src={iconRefresh} alt='' />
                    </div>
                    <div className={styles.diveye}>
                      <Image src={twinbusiness} alt='' />
                    </div>
                    <div style={{ textAlign: 'center' }} className={styles.checkboxs}>
                      <div>
                        <label>Activar accesos</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.card} ${styles.cardBott}`}>
                  <div className={`${styles.w45} ${styles.mAuto} ${styles.fs30} ${styles.tACenter}`}>
                    La comisión o el bono se pagaran al final del evento sumándolo a las propinas
                  </div>
                  <div className={`${styles.card} ${styles.cardBott} ${styles.w85} ${styles.mAuto} `}>
                    <div className={styles.flex}>
                      <div className={`${styles.w50} ${styles.fs30}`}>
                        <div className={`${styles.flex} ${styles.w85} ${styles.mAuto}`}>
                          <div>Comisión inicial</div>
                          <div className={styles.mAuto} />
                          <div>5%</div>
                        </div>
                      </div>
                      <div className={`${styles.w50} ${styles.flex} ${styles.fs30}`}>
                        <InputText
                          name='percent'
                          className={styles.h60px}
                          placeholder='Nueva comisión'
                          icon={percent}
                          imageStyle={{ height: 32, width: 30, position: 'absolute', right: '4px', top: '10px' }} variant='SearchGray'
                        />
                        <div className={styles.contMenu}><Image height={20} src={edit} alt='' /></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mt20px} />
                </div>
              </div>
              <div className={`${styles.flex} ${styles.gap20} ${styles.mt20px}`}>
                <Link href='/system/profile/company/event/1/commanding-staff' className={`${styles.btnW} ${styles.w30}`}>
                  Cancelar
                </Link>
                <div className={`${styles.btnB} ${styles.w30}`} onClick={() => { setModal(true) }}>Guardar cambios</div>
              </div>
            </Card>
          </div>
        </FormHookProvider>
      </Card>
      {modal &&
        (
          <Modal onClickX={() => { setModal(false) }}>
            <div style={{ padding: '0 50px 50px', width: '100%', textAlign: 'center' }}>
              <div className={styles.textMod}>¡Error al actualizar los cambios!</div>
              <div className={styles.m10} />
              <Image src={cancel} alt='' className={styles.img65} />
              <div className={styles.m10} />
              <div className={styles.btnNl} onClick={() => { setModal1(true) }}>Reintentar</div>
              <div className={styles.m10} />
              <div className={styles.tALeft}>
                Publicidad
                <Image src={ad} alt='' className={styles.imgAd} />
              </div>
            </div>
          </Modal>
        )}
      {modal1 &&
        (
          <Modal onClickX={() => { setModal1(false) }}>
            <div style={{ padding: '0 50px 50px', width: '100%', textAlign: 'center' }}>
              <div className={styles.textMod}>¡Los cambios se guardaron con éxito!</div>
              <div className={styles.m10} />
              <Image src={success} alt='' className={styles.img65} />
              <div className={styles.m10} />
              <div className={styles.btnNl} onClick={() => { setModal2(true) }}>OK</div>
              <div className={styles.m10} />
              <div className={styles.tALeft}>
                Publicidad
                <Image src={ad} alt='' className={styles.imgAd} />
              </div>
            </div>
          </Modal>
        )}
      {modal2 &&
        (
          <Modal onClickX={() => { setModal2(false) }}>
            <div style={{ padding: '0 50px 50px', width: '100%', textAlign: 'center' }}>
              <Card>
                <div style={{ padding: '80px 60px 90px', textAlign: 'center' }}>
                  <Image src={danger} alt='' className={styles.img65} />
                  <div className={styles.mt10} />
                  <div className={styles.fs40}>Usuario no encontrado</div>
                  <div className={styles.mt50} />
                  <div className={styles.fs45 + ' ' + styles.fw700}>3322343738</div>
                  <div className={styles.mt60} />
                  <div className={styles.btnB + ' ' + styles.fs30} style={{ height: '50px' }}> Invitar </div>
                </div>
              </Card>
            </div>
          </Modal>
        )}
    </div>
  )
}
