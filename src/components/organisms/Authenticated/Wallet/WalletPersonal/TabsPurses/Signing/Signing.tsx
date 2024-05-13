import React, { useEffect, useMemo, useState } from 'react'
import styles from './Signing.module.scss'
import Card from '@/components/molecules/Card/Card'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Button from '@/components/molecules/Button/Button/Button'
import InputText from '@/components/molecules/InputText/InputText'

export default function Signing() {

   const methods = useForm()
   const [codeValues, setCodeValues] = useState(['', '', '', '', '', ''])
   const [validate, setValidate] = useState(true)

   const onSubmit = () => { }

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
         e.target.blur();
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

   const InputTextCode7 = useMemo(() => ({
      name: 'code7',
      type: 'password',
      value: codeValues[6],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode8 = useMemo(() => ({
      name: 'code8',
      type: 'password',
      value: codeValues[7],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode9 = useMemo(() => ({
      name: 'code9',
      type: 'password',
      value: codeValues[8],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode10 = useMemo(() => ({
      name: 'code10',
      type: 'password',
      value: codeValues[9],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode11 = useMemo(() => ({
      name: 'code11',
      type: 'password',
      value: codeValues[10],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode12 = useMemo(() => ({
      name: 'code12',
      type: 'password',
      value: codeValues[11],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode13 = useMemo(() => ({
      name: 'code13',
      type: 'password',
      value: codeValues[12],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode14 = useMemo(() => ({
      name: 'code14',
      type: 'password',
      value: codeValues[13],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode15 = useMemo(() => ({
      name: 'code15',
      type: 'password',
      value: codeValues[14],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode16 = useMemo(() => ({
      name: 'code16',
      type: 'password',
      value: codeValues[15],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode17 = useMemo(() => ({
      name: 'code17',
      type: 'password',
      value: codeValues[16],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode18 = useMemo(() => ({
      name: 'code18',
      type: 'password',
      value: codeValues[17],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode19 = useMemo(() => ({
      name: 'code19',
      type: 'password',
      value: codeValues[18],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode20 = useMemo(() => ({
      name: 'code20',
      type: 'password',
      value: codeValues[19],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode21 = useMemo(() => ({
      name: 'code21',
      type: 'password',
      value: codeValues[20],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode22 = useMemo(() => ({
      name: 'code22',
      type: 'password',
      value: codeValues[21],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode23 = useMemo(() => ({
      name: 'code23',
      type: 'password',
      value: codeValues[22],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode24 = useMemo(() => ({
      name: 'code24',
      type: 'password',
      value: codeValues[23],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode25 = useMemo(() => ({
      name: 'code25',
      type: 'password',
      value: codeValues[24],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode26 = useMemo(() => ({
      name: 'code26',
      type: 'password',
      value: codeValues[25],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode27 = useMemo(() => ({
      name: 'code27',
      type: 'password',
      value: codeValues[26],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode28 = useMemo(() => ({
      name: 'code28',
      type: 'password',
      value: codeValues[27],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode29 = useMemo(() => ({
      name: 'code29',
      type: 'password',
      value: codeValues[28],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode30 = useMemo(() => ({
      name: 'code30',
      type: 'password',
      value: codeValues[29],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode31 = useMemo(() => ({
      name: 'code31',
      type: 'password',
      value: codeValues[30],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode32 = useMemo(() => ({
      name: 'code32',
      type: 'password',
      value: codeValues[31],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode33 = useMemo(() => ({
      name: 'code33',
      type: 'password',
      value: codeValues[32],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode34 = useMemo(() => ({
      name: 'code34',
      type: 'password',
      value: codeValues[33],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode35 = useMemo(() => ({
      name: 'code35',
      type: 'password',
      value: codeValues[34],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])

   const InputTextCode36 = useMemo(() => ({
      name: 'code36',
      type: 'password',
      value: codeValues[35],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
      onPaste: () => handleOnPaste,
      height: '31px',
      rules: { required: true }
   }), [codeValues])
   return (
      <>
         <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.cards}>
               <Card className={styles.card1}>
                  <p className={styles.title}>Monedero personal</p>
                  <div className={styles.question}>
                     <p>¿Deseas cambiar tu firma?</p>
                  </div>
                  <div className={styles.ContSigning}>
                     <p>INGRESA TU FIRMA ACTUAL</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode1} />
                        <InputTextCode {...InputTextCode2} />
                        <InputTextCode {...InputTextCode3} />
                        <InputTextCode {...InputTextCode4} />
                        <InputTextCode {...InputTextCode5} />
                        <InputTextCode {...InputTextCode6} />
                     </div>
                  </div>
                  <div className={styles.ContSigning}>
                     <p>INGRESA TU NUEVA FIRMA</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode7} />
                        <InputTextCode {...InputTextCode8} />
                        <InputTextCode {...InputTextCode9} />
                        <InputTextCode {...InputTextCode10} />
                        <InputTextCode {...InputTextCode11} />
                        <InputTextCode {...InputTextCode12} />
                     </div>
                  </div>
                  <div className={styles.ContSigning}>
                     <p>CONFIRMA TU NUEVA FIRMA</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode13} />
                        <InputTextCode {...InputTextCode14} />
                        <InputTextCode {...InputTextCode15} />
                        <InputTextCode {...InputTextCode16} />
                        <InputTextCode {...InputTextCode17} />
                        <InputTextCode {...InputTextCode18} />
                     </div>
                  </div>
                  <div className={styles.ButtonOk}>
                     <Button variant='third' height='40px'>OK</Button>
                  </div>
               </Card>
               <Card className={styles.card2}>
                  <p>Firma</p>
                  <Card className={styles.question}>
                     ¿Olvidaste tu firma?
                  </Card>
                  <p className={styles.text1}>Selecciona a donde quieres que se te envíe el código de recuperación</p>
                  <div className={styles.inputEmail}>
                     <InputText label='Correo electrónico' height='48px' name='' variant='ShadowGray' placeholder='Ingresa tu correo electrónico' />
                  </div>
                  <p className={styles.text2}>Al seleccionar número telefónico se enviará el código de recuperación por medio de SMS</p>
                  <div className={styles.inputEmail}>
                     <InputText label='Número telefonico' height='48px' name='' variant='ShadowGray' placeholder='Ingresa número telefonico' />
                  </div>
                  <div className={styles.buttonGray}>
                     <Button variant='gray-color'>Solicitar código</Button>
                  </div>
               </Card>
               <Card className={styles.card3}>
                  <p className={styles.title}>Monedero de MXN</p>
                  <div className={styles.ContCode}>
                     <p>Código de 6 dígitos</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode19} />
                        <InputTextCode {...InputTextCode20} />
                        <InputTextCode {...InputTextCode21} />
                        <InputTextCode {...InputTextCode22} />
                        <InputTextCode {...InputTextCode23} />
                        <InputTextCode {...InputTextCode24} />
                     </div>
                  </div>
                  <p className={styles.text}>INGRESA EL CODIGO QUE FUE ENVIADO A TU CORREO O SMS PARA CAMBIAR TU CONTRASEÑA</p>
                  <p className={styles.textBold}>FIRMA ELECTRONICA NUEVA</p>
                  <div className={styles.ContCode}>
                     <p>INGRESA TU NUEVA FIRMA</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode25} />
                        <InputTextCode {...InputTextCode26} />
                        <InputTextCode {...InputTextCode27} />
                        <InputTextCode {...InputTextCode28} />
                        <InputTextCode {...InputTextCode29} />
                        <InputTextCode {...InputTextCode30} />
                     </div>
                  </div>
                  <div className={styles.ContCode}>
                     <p>CONFIRMA TU NUEVA FIRMA</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode31} />
                        <InputTextCode {...InputTextCode32} />
                        <InputTextCode {...InputTextCode33} />
                        <InputTextCode {...InputTextCode34} />
                        <InputTextCode {...InputTextCode35} />
                        <InputTextCode {...InputTextCode36} />
                     </div>
                  </div>
                  <div style={{ width: '240px' }}>
                     <Button variant='third'>OK</Button>
                  </div>
               </Card>
            </div>
         </FormHookProvider>
      </>
   )
}