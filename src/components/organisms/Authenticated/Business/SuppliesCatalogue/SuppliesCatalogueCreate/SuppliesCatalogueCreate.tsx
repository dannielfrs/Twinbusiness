'use client'

import { useState } from 'react'
import styles from './SuppliesCatalogueCreate.module.scss'
import Card from '@/components/molecules/Card/Card'
import danger from '@/../public/images/icons/danger.png'
import logoEmpre from '@/../public/images/trash/imgIbf.png'
import imgGirl from '@/../public/images/trash/card1.png'
import imgCar from '@/../public/images/trash/55.png'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import Modal from '@/components/organisms/Authenticated/Wallet/Modals/EmptyAlert/EmptyAlert'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import Link from 'next/link'

export default function InputInventories () {
  //
  const [activeModal, setActiveModal] = useState(false)
  const [activeModalSave, setActiveModalSave] = useState(false)
  const methods = useForm()
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [type3, setType3] = useState('')
  const [type4, setType4] = useState('')
  const [type5, setType5] = useState('')
  const [type6, setType6] = useState('')
  const [terms, setTerms] = useState('')

  const onSubmit = () => { }

  return (
    <div className={`${styles.Profile} ${styles.noScroll}`}>
      <Card className={styles.CardProfile}>
        <div className={styles.inventory}>
          Editor de inventarios de insumos secundario
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
                  placeholder='Buscar producto/servicio en stock'
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
              <div className={styles.flex + ' ' + styles.gap40 + ' ' + styles.marginB20}>
                <div className={`${styles.col_33} ${styles.fsNorm}`}>
                  <div className={`${styles.fs20} ${styles.tACenter}`} style={{ textAlign: 'justify' }}>Aquí podrás crear tu catálogo para subir tus productos y gestionar tu inventario</div>
                  <div className={styles.mt20} />
                  <div className={styles.mL20}>
                    <div className={styles.mt20} />
                    Nombre de catalogo
                    <InputText variant='secondary' name='catalog' imageStyle={{ height: 46, width: 44 }} className={styles.h40} placeholder='Nombre' />
                    <div className={styles.mt20} />
                    Este nombre aparecerá como un botón a de fácil acceso en un menú general del evento.
                    <div className={styles.mt20} />
                    <div className={styles.mt20} />
                    <div className={styles.mt20} />
                    <div className={styles.mt20} />
                  </div>
                  <div className={styles.btnB} onClick={() => { setActiveModalSave(true) }}>Guardar para subir a menú principal</div>
                </div>
                <div className={`${styles.col_33} ${styles.fsNorm}`}>
                  <div className={`${styles.fs20} ${styles.tACenter}`}>Selecciona una de las categorías predeterminadas en la cual se mostraran tus producto o servicio en menú principal</div>
                  <div>
                    <div>Categorias predeterminadas</div>
                    <div className={styles.list}>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
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
                        Alimentos
                      </div>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId='terms'
                            name='terms'
                            value={terms}
                            onChange={() => setTerms(terms === '' ? 'ok' : '')}
                            checked={terms === '' ? false : true}
                            variant='white'
                          />
                        </div>
                        Bebidas
                      </div>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId='type2'
                            name='type2'
                            value={type2}
                            onChange={() => setType2(type2 === '' ? 'ok' : '')}
                            checked={type2 === '' ? false : true}
                            variant='white'
                            className={styles.check}
                          />
                        </div>Accesorios
                      </div>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId='type3'
                            name='type3'
                            value={type3}
                            onChange={() => setType3(type3 === '' ? 'ok' : '')}
                            checked={type3 === '' ? false : true}
                            variant='white'
                            className={styles.check}
                          />
                        </div>
                        Alimentos
                      </div>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId='type4'
                            name='type4'
                            value={type4}
                            onChange={() => setType4(type4 === '' ? 'ok' : '')}
                            checked={type4 === '' ? false : true}
                            variant='white'
                            className={styles.check}
                          />
                        </div>
                        Bebidas
                      </div>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId='type5'
                            name='type5'
                            value={type5}
                            onChange={() => setType5(type5 === '' ? 'ok' : '')}
                            checked={type5 === '' ? false : true}
                            variant='white'
                            className={styles.check}
                          />
                        </div>
                        Accesorios
                      </div>
                      <div className={styles.flex}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId='type6'
                            name='type6'
                            value={type6}
                            onChange={() => setType6(type6 === '' ? 'ok' : '')}
                            checked={type6 === '' ? false : true}
                            variant='white'
                            className={styles.check}
                          />
                        </div>
                        Otros
                      </div>
                    </div>
                  </div>
                  <Link href='/system/profile/company/event/1/input-inventories/create/configuration'>
                    <div className={`${styles.btnB} ${styles.mt10}`}>Configuración alertas de stock</div>
                  </Link>
                </div>
                <div className={`${styles.col_33} ${styles.fsMix}`}></div>
              </div>
            </Card>
          </div>
        </FormHookProvider>
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
      {activeModalSave &&
        <Modal onClickX={() => { setActiveModalSave(false) }}>
          <div style={{ padding: '50px', width: '100%' }}>
            <Card>
              <div style={{ padding: '60px 20px', textAlignLast: 'center' }}>
                <div><Image src={danger} alt='' height={70} width={70} className={styles.mAuto} /></div>
                <div className={styles.textModal1}>ALERTA SE GUARDARÁN LOS DATOS PARA MOSTRARLOS EN MENÚ PRINCIPAL</div>
                <Link href='/system/profile/company/event/1/input-inventories'>
                  <div className={styles.btnR}>Confirmar</div>
                </Link>
                <div className={styles.btnG} onClick={() => { setActiveModalSave(false) }}>Cancelar</div>
              </div>
            </Card>
          </div>
        </Modal>
      }
    </div>
  )
}
