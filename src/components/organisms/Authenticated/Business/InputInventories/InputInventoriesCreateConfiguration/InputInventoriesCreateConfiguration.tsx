'use client'

import { useState, useRef } from 'react'
import styles from './InputInventoriesCreateConfiguration.module.scss'
import Card from '@/components/molecules/Card/Card'
import danger from '@/../public/images/icons/danger.png'
import logoEmpre from '@/../public/images/trash/imgIbf.png'
import imgGirl from '@/../public/images/trash/card1.png'
import imgCar from '@/../public/images/trash/55.png'
import Button from "@/components/molecules/Button/Button/Button"
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import Modal from '@/components/organisms/Authenticated/Wallet/Modals/EmptyAlert/EmptyAlert'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import edit from '@/../../public/images/Events/editar@2.png'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import Link from 'next/link'
import { InputSwitch } from 'primereact/inputswitch'

export default function InputInventories () {

  const [activeModal, setActiveModal] = useState(false)
  const methods = useForm()
  const [country, setCountry] = useState()
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [type3, setType3] = useState('')
  const [type4, setType4] = useState('')
  const [type5, setType5] = useState(false)
  const [type6, setType6] = useState(false)
  const [type7, setType7] = useState(false)
  const [type8, setType8] = useState(false)
  const [type9, setType9] = useState('')
  const [type10, setType10] = useState('')
  const [type11, setType11] = useState('')
  const [type12, setType12] = useState('')
  const [type13, setType13] = useState('')
  const [type14, setType14] = useState('')
  const [terms, setTerms] = useState('')
  const [checked, setChecked] = useState(false)
  const itemsRef: any = useRef([])

  const countryOption = [
    { label: 'MX', value: 0 },
    { label: 'MX', value: 1 }
  ]

  const onSubmit = () => { }

  return (
    <div className={`${styles.Profile} ${styles.noScroll}`}>
      <Card className={styles.CardProfile}>
        <div className={styles.inventory}>
          Creador de inventarios de insumos secundario
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
              <div className={styles.inventory}>Buscar stock</div>
              <div>
                <InputText name='search' icon={search} imageStyle={{ height: 46, width: 44 }} className={styles.h40} />
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
                  <div className={`${styles.flex} ${styles.gap20}`}>
                    <div style={{ width: '50%' }}>
                      <div className={`${styles.col31}`}>
                        <div>Precio Público</div>
                        <div className={styles.fs10}>Moneda</div>
                      </div>
                      <div className={`${styles.flex} ${styles.borderShadow}`}>
                        <div>Ej. 1000</div>
                        <div className={styles.mAuto}></div>
                        <div>
                          <Dropdown
                            name='country'
                            onChange={(e) => setCountry(e.value)}
                            options={countryOption}
                            optionLabel='label'
                            placeholder='MXN'
                            variant='secondary'
                            height='30px'
                            label=''
                            panelClassName='panel'
                            dropdownIcon=''
                            value
                          />
                        </div>
                      </div>
                      <div>
                        <div>stock</div>
                        <div></div>
                      </div>
                    </div>
                    <div style={{ width: '50%' }}>
                      <div className={`${styles.col31}`}>
                        <div>Precio Cortesia</div>
                        <div className={styles.fs10}>(Opcional)</div>
                      </div>
                      <div className={`${styles.flex} ${styles.borderShadow}`}>
                        <div>Ej. $3000</div>
                        <div className={styles.mAuto}></div>
                        <div>
                          <Dropdown
                            name='country'
                            onChange={(e) => setCountry(e.value)}
                            options={countryOption}
                            optionLabel='label'
                            placeholder='MXN'
                            variant='secondary'
                            height='30px'
                            label=''
                            panelClassName='panel'
                            dropdownIcon=''
                            value
                          />
                        </div>
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.mAuto}></div>
                        <InputText name='search' icon={edit} imageStyle={{ height: 12, width: 12, top: 8, right: 0 }} className={styles.h20} defaultValue='120.00 MXN' />

                        {/* <div>Ej. 1000</div>
                          <Image className={`${styles.height16} ${styles.m3}`} src={edit} alt=''/> */}
                      </div>
                    </div>
                  </div>
                  <div className={styles.w70}>
                    <div className={styles.fs20}>A cual inventario le configurarás una alerta?</div>
                    <div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type1"
                            name="type1"
                            value={type1}
                            onChange={() => setType1(type1 === '' ? 'ok' : '')}
                            checked={type1 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        Inventario de productos o servicios
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="terms"
                            name="terms"
                            value={terms}
                            onChange={() => setTerms(terms === '' ? 'ok' : '')}
                            checked={terms === '' ? false : true}
                            variant="white"
                          />
                        </div>
                        Inventario de moviliarios
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type2"
                            name="type2"
                            value={type2}
                            onChange={() => setType2(type2 === '' ? 'ok' : '')}
                            checked={type2 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>Inventario de insumos
                      </div>
                    </div>
                  </div>
                  <div className={styles.w70}>
                    <div className={styles.fs20}>Como deseas establecer la alerta?</div>
                    <div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type3"
                            name="type3"
                            value={type3}
                            onChange={() => setType3(type3 === '' ? 'ok' : '')}
                            checked={type3 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        Por porcentaje
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type4"
                            name="type4"
                            value={type4}
                            onChange={() => setType4(type4 === '' ? 'ok' : '')}
                            checked={type4 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        Por cantidad
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.col_33} ${styles.fsNorm}`}>
                  <div className={`${styles.w85}`}>
                    <div className={`${styles.fs30} ${styles.tACenter}`}>¡Te avisaremos cuando tus inventarios se estén agotando!</div>
                    <div className={`${styles.fs20} ${styles.pt12px}`}>Categorias predeterminadas</div>
                    <div className={styles.list2}>
                      <div className={styles.contSwit + ' ' + styles.pt12px + ' ' + styles.borderShadow}>
                        <div>
                          Alimentos
                        </div>
                        <div className={styles.fs10}>
                          Alerta al 30%
                        </div>
                        <InputSwitch
                          ref={itemsRef}
                          checked={checked}
                          onChange={(e) => setChecked(e.value)}
                        />
                      </div>
                      <div className={styles.contSwit + ' ' + styles.pt12px + ' ' + styles.borderShadow}>
                        <div>
                          Bebidas
                        </div>
                        <div className={styles.fs10}>
                          Alerta N/A
                        </div>
                        <InputSwitch
                          ref={itemsRef}
                          checked={type5}
                          onChange={(e) => setType5(e.value)}
                        />
                      </div>
                      <div className={styles.contSwit + ' ' + styles.pt12px + ' ' + styles.borderShadow}>
                        <div>
                          Accesorios
                        </div>
                        <div className={styles.fs10}>
                          Alerta al 30%
                        </div>
                        <InputSwitch
                          ref={itemsRef}
                          checked={type6}
                          onChange={(e) => setType6(e.value)}
                        />
                      </div>
                      <div className={styles.contSwit + ' ' + styles.pt12px + ' ' + styles.borderShadow}>
                        <div>
                          Otros
                        </div>
                        <div className={styles.fs10}>
                          Alerta al 30%
                        </div>
                        <InputSwitch
                          ref={itemsRef}
                          checked={type7}
                          onChange={(e) => setType7(e.value)}
                        />
                      </div>
                      <div className={styles.contSwit + ' ' + styles.pt12px + ' ' + styles.borderShadow}>
                        <div>
                          Ensaladas/Ensaladas Chica
                        </div>
                        <div className={styles.fs10}>
                          Alerta al 30%
                        </div>
                        <InputSwitch
                          ref={itemsRef}
                          checked={type8}
                          onChange={(e) => setType8(e.value)}
                        />
                      </div>
                    </div>
                    <div className={styles.flex}>
                    </div>
                  </div>
                </div>
                <div className={`${styles.col_33} ${styles.fsMix}`}>
                  <div className={`${styles.fs20} ${styles.tACenter}`}>Establece el % de inventario que debe restar para generar alertas</div>

                  <div className={styles.flex + ' ' + styles.w70}>
                    <div style={{ width: '50%' }}>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type9"
                            name="type9"
                            value={type9}
                            onChange={() => setType9(type9 === '' ? 'ok' : '')}
                            checked={type9 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        10 %
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type10"
                            name="type10"
                            value={type10}
                            onChange={() => setType10(type10 === '' ? 'ok' : '')}
                            checked={type10 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        20 %
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type11"
                            name="type11"
                            value={type11}
                            onChange={() => setType11(type11 === '' ? 'ok' : '')}
                            checked={type11 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        30 %
                      </div>
                    </div>
                    <div style={{ width: '50%' }}>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type12"
                            name="type12"
                            value={type12}
                            onChange={() => setType12(type12 === '' ? 'ok' : '')}
                            checked={type12 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        40 %
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type13"
                            name="type13"
                            value={type13}
                            onChange={() => setType13(type13 === '' ? 'ok' : '')}
                            checked={type13 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        50 %
                      </div>
                      <div className={`${styles.flex} ${styles.gap20}`}>
                        <div className={styles.checkbox}>
                          <Checkbox
                            inputId="type14"
                            name="type14"
                            value={type14}
                            onChange={() => setType14(type14 === '' ? 'ok' : '')}
                            checked={type14 === '' ? false : true}
                            variant="white"
                            className={styles.check}
                          />
                        </div>
                        60 %
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.fs20} ${styles.tACenter}`}>Establece la cantidad de unidades que debe restar para generar la alerta</div>
                  <div className={styles.w70}>
                    <div className={styles.flex + ' ' + styles.borderShadow} style={{ height: 'auto' }}>
                      <div className={styles.contEdit}>
                        <InputText name='units' icon={edit} imageStyle={{ height: 13, width: 13, top: 6, right: 0 }} className={styles.h20} defaultValue='120.00 MXN' />
                        {/* 200
                          <div className={styles.mAuto}></div>
                          <Image className={`${styles.height16} ${styles.m3}`} src={edit} alt=''/> */}
                      </div>
                      <div className={styles.pt10px20px}>Ok</div>
                    </div>
                    <div className={styles.fs30 + ' ' + styles.borderShadow} style={{ height: 'auto' }}>200 unidades</div>
                    <div>Cantidad establecida para generar alerta</div>
                  </div>
                  {/* <div className={styles.tACenter}>Guardar en menú principal</div>
                    <div className={styles.btnBl}>Guardar Categoria</div>
                  */}
                </div>
              </div>
              <div className={styles.flex + ' ' + styles.justifyCenter + ' ' + styles.gap20}>
                <Link href={'/system/profile/company/event/1/input-inventories/create'}>
                  <Button
                    variant={"whitebtn"}
                    borderRadius="10px"
                    // height="20px"
                    // width="100px"
                    style={{ width: "150px" }}
                    fontSize="14px"
                  >Regresar</Button>
                </Link>
                <Button
                  variant={"blackForm"}
                  borderRadius="10px"
                  height="20px"
                  // width="100px"
                  style={{ width: "150px" }}
                  fontSize="14px"
                  onClick={() => { setActiveModal(true) }}
                >Guardar</Button>
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
                <div className={styles.textModal}>SE GUARDARON TUS NOTIFICACIONES CON ÉXITO</div>
                <Link href={'/system/profile/company/event/1/input-inventories/create'}>
                  <div className={styles.btnR}>Confirmar</div>
                </Link>
                <div className={styles.btnG} onClick={() => { setActiveModal(false) }}>Cancelar</div>
              </div>
            </Card>
          </div>
        </Modal>
      }
    </div>
  )
}
