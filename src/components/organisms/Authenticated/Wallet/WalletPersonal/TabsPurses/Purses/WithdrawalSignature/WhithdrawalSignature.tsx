'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './WhithdrawalSignature.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import Button from '@/components/molecules/Button/Button/Button'
import user from '@/../public/images/icons/ryan_gosling.jpg'
import nationality from '@/../public/images/icons/mx_flag.png'

interface WhithdrawalSignatureProps {
  generateQrButton?: React.ReactNode; // Define the prop for the button
}

export default function WhithdrawalSignature ({ generateQrButton }: WhithdrawalSignatureProps) {
   const [validate, setValidate] = useState(true)
    const [codeValues, setCodeValues] = useState(['', '', '', '', '', ''])
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
  return(
    <>
        <Card className={styles.Cardqr}>
            <p className={styles.title}>Firma de retiro</p>
            <div className={styles.ContProfile}>
                <p className={styles.text}>Perfil que retira</p>
                <Card className={styles.CardUser}>
                <div className={styles.ContUser}>
                    <div className={styles.imgUser}>
                        <Image alt='user' src={user} />
                    </div>
                    <div className={styles.nationality}>
                        <Image alt='' src={nationality}/>
                    </div>
                </div>
                <div className={styles.dataUser}>
                    <p className={styles.name}>Ryan Gosling</p>
                    <p className={styles.email}>ryan@twin.com</p>
                </div>
                </Card>
            </div>
            <div style={{width: '100%'}}>
                <InputText defaultValue='$1,000.00 MXN' optional={false} required name='' height='111px' label='Ingresa la cantidad a retirar' variant='inputBig'/>
            </div>
            <div className={styles.InputTextCode}>
                <p className={styles.text}>Firma del usuario que retira</p>
                <div className={styles.container_code}>
                <InputTextCode {...InputTextCode1} />
                <InputTextCode {...InputTextCode2} />
                <InputTextCode {...InputTextCode3} />
                <InputTextCode {...InputTextCode4} />
                <InputTextCode {...InputTextCode5} />
                <InputTextCode {...InputTextCode6} />
                </div>
            </div>
            <div>
              {generateQrButton}
            </div>
        </Card>
    </>
  )
}
