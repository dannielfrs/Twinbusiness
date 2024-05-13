'use client'

import React, { useEffect, useMemo, useState } from 'react'
import styles from './UnregisteredUser.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import CardBuy from '../../../../RechargingBanks/CuttingSales/CardBuy/CardBuy'
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import Button from '@/components/molecules/Button/Button/Button'
import { useForm } from 'react-hook-form'
import fotografia from '@/../public/images/icons/fotografia.jpg'
import carrito from '@/../public/images/icons/carrito.jpg'
import fightclub from '@/../public/images/icons/fightclub.jpg'
import imageSearch from '@/../public/images/icons/search.svg'
import editar from '@/../public/images/icons/editar.svg'

export default function UnregisteredUser() {
  //
  const methods = useForm()
  const [type, setType] = useState('1')
  const [country, setCountry] = useState()
  const [validate, setValidate] = useState(true)
  const [codeValues, setCodeValues] = useState(['', '', '', '', '', ''])

  const onSubmit = () => { }

  const countryOption = [
    { label: 'MX', value: 0 },
    { label: 'MX', value: 1 }
  ]

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

  const listType = [
    {
      value: '1',
      label: '10,000.00'
    },
    {
      value: '2',
      label: '20,000.00'
    },
    {
      value: '3',
      label: '30,000.00'
    },
    {
      value: '4',
      label: '50,000.00'
    },
    {
      value: '5',
      label: '100,000.00'
    }
  ]

  useEffect(() => {
    const values = codeValues.filter((item) => item !== '')
    if (values.length === 6) setValidate(false)
  }, [codeValues])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value
    const array = [...codeValues]
    array[index] = newValue
    setCodeValues(array)
    if (newValue.length === 1 && e.target.nextElementSibling !== null) {
      (e.target.nextElementSibling as HTMLInputElement).focus();
    } else if (newValue.length === 1 && e.target.nextElementSibling === null) {
      e.target.blur()
    }
  }

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const textPasted = e.clipboardData.getData('text/plain')
    setCodeValues(textPasted.split('').slice(0, 6))
    if (e.target instanceof HTMLInputElement) {
      e.target.blur()
    }
  }

  const InputTextCode1 = useMemo(() => ({
    name: 'code1',
    type: 'password',
    value: codeValues[0],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
    onPaste: () => handleOnPaste,
    height: '31px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode2 = useMemo(() => ({
    name: 'code2',
    type: 'password',
    value: codeValues[1],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
    onPaste: () => handleOnPaste,
    height: '31px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode3 = useMemo(() => ({
    name: 'code3',
    type: 'password',
    value: codeValues[2],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
    onPaste: () => handleOnPaste,
    height: '31px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode4 = useMemo(() => ({
    name: 'code4',
    type: 'password',
    value: codeValues[3],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
    onPaste: () => handleOnPaste,
    height: '31px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode5 = useMemo(() => ({
    name: 'code5',
    type: 'password',
    value: codeValues[4],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
    onPaste: () => handleOnPaste,
    height: '31px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode6 = useMemo(() => ({
    name: 'code6',
    type: 'password',
    value: codeValues[5],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
    onPaste: () => handleOnPaste,
    height: '31px',
    rules: { required: true }
  }), [codeValues])

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.AssignAmount}>
        <Card className={styles.CardAssign}>
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
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                  placeholder='Buscar perfil para invitar'
                  icon={imageSearch}
                  iconPosRight={true}
                  variant='SearchGray'
                  height='34px'
                  filter={false}
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
          <Card className={styles.CardBottom}>
            <Card className={styles.CardUser}>
              <InputText
                name=''
                variant='ShadowInset2'
                label='Ingresa nombre completo'
                placeholder='Ingresa nombre'
              />
              <InputText
                name=''
                variant='ShadowInset2'
                label='Ingresa telefono'
                placeholder='Ingresa nombre'
              />
              <InputText
                name=''
                variant='ShadowInset2'
                label='Ingresa correo'
                placeholder='Correo electrónico'
              />
            </Card>
            <Card className={styles.CardRol}>
              <div className={styles.card1}>
                <p className={styles.title}>Asignar nomina para el invitado</p>
                <InputText
                  name=''
                  variant='comission'
                  placeholder='Ingresa nomina a pagar o bono'
                  icon={editar}
                />
                <p className={styles.titleRol}>Rol predeterminado</p>
                <Card className={styles.contRol}>
                  <p>ROL BANCO</p>
                </Card>
              </div>
              <div className={styles.Card2}>
                <p className={styles.title}>Monto maximo permitido a recargar</p>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '72px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <p>Monto Max.</p>
                    <p>Monto Max.</p>
                    <p>Monto Max.</p>
                    <p>Monto Max.</p>
                    <p>Monto Max.</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      10,000.00
                      <RadioButton
                        name='max_amount'
                        inputId='10,000.00'
                        value='10,000.00'
                        defaultValue='10,000.00'
                        label=''
                        rules={{ required: true }}
                        variant='primary'
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      20,000.00
                      <RadioButton
                        name='max_amount'
                        inputId='20,000.00'
                        value='20,000.00'
                        defaultValue='10,000.00'
                        label=''
                        rules={{ required: true }}
                        variant='primary'
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      30,000.00
                      <RadioButton
                        name='max_amount'
                        inputId='30,000.00'
                        value='30,000.00'
                        defaultValue='10,000.00'
                        label=''
                        rules={{ required: true }}
                        variant='primary'
                      />
                    </div>
                  </div>
                </div>
                <p className={styles.text}>Seleccione monto máximo</p>
              </div>
              <div className={styles.Card3}>
                <div className={styles.titleSelect}>
                  <p className={styles.title}>Moneda a Seleccionar</p>
                  <div className={styles.dropCountry}>
                    <Dropdown
                      name='country'
                      label=''
                      onChange={(e) => setCountry(e.value)}
                      options={countryOption}
                      optionLabel='label'
                      placeholder='MXN'
                      variant='secondary'
                      height='30px'
                    />
                  </div>
                </div>
                <Card className={styles.amount}>
                  <p>Monto ilimitado</p>
                  <div className={styles.InputTextCode}>
                    <p className={styles.text}>Asignar firma</p>
                    <div className={styles.container_code}>
                      <InputTextCode {...InputTextCode1} />
                      <InputTextCode {...InputTextCode2} />
                      <InputTextCode {...InputTextCode3} />
                      <InputTextCode {...InputTextCode4} />
                      <InputTextCode {...InputTextCode5} />
                      <InputTextCode {...InputTextCode6} />
                    </div>
                  </div>
                  <div style={{ width: '240px', marginTop: '23px' }}>
                    <Button variant='third'>Aceptar</Button>
                  </div>
                </Card>
              </div>
            </Card>
            <div className={styles.buttonInvite}>
              <Button variant='third'>Invitar</Button>
            </div>
          </Card>
        </Card>
      </div>
    </FormHookProvider>
  )
}
