'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './ModalElectronicSignature.module.scss'
import Image from 'next/image'
import TWINBUSINESS from '@/../public/images/Home/logoGrande2.png'
import Card from '@/components/molecules/Card/Card'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import ModalSuccess from '../ModalSuccess/ModalSuccess'

export default function ModalElectronicSignature ({closeModal}: {closeModal?: () => void;}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal2 = () => {
        setIsModalOpen(false);
    };
    const [validate, setValidate] = useState(true)
    const [codeValues, setCodeValues] = useState(['', '', '', '', '', '', '',  '', '', '', '', ''])
    useEffect(() => {
        const values = codeValues.filter((item) => item !== '')
        if (values.length === 11) {
          setValidate(false)

          if (values[11] !== '') {
            // Open the success modal
            setIsModalOpen(true);
          }
        }
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
        setCodeValues(textPasted.split('').slice(0, 11))
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
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 1),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
  
      const InputTextCode3 = useMemo(() => ({
        name: 'code3',
        type: 'password',
        value: codeValues[2],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 2),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
    
      const InputTextCode4 = useMemo(() => ({
        name: 'code4',
        type: 'password',
        value: codeValues[3],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 3),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
  
      const InputTextCode5 = useMemo(() => ({
        name: 'code5',
        type: 'password',
        value: codeValues[4],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 4),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
    
      const InputTextCode6 = useMemo(() => ({
        name: 'code6',
        type: 'password',
        value: codeValues[5],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 5),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])

      const InputTextCode7 = useMemo(() => ({
        name: 'code7',
        type: 'password',
        value: codeValues[6],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 6),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
    
      const InputTextCode8 = useMemo(() => ({
        name: 'code8',
        type: 'password',
        value: codeValues[7],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 7),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
  
      const InputTextCode9 = useMemo(() => ({
        name: 'code9',
        type: 'password',
        value: codeValues[8],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 8),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
    
      const InputTextCode10 = useMemo(() => ({
        name: 'code10',
        type: 'password',
        value: codeValues[9],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 9),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
  
      const InputTextCode11 = useMemo(() => ({
        name: 'code11',
        type: 'password',
        value: codeValues[10],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 10),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
    
      const InputTextCode12 = useMemo(() => ({
        name: 'code12',
        type: 'password',
        value: codeValues[11],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 11),
        onPaste: () => handleOnPaste,
        height: '31px',
        rules: { required: true }
      }), [codeValues])
    
    return(
        <>
          <div className={styles.ModalElectronicSignature}>
            <div className={styles.modalback}>
              <div className={styles.modal}>
                <div className={styles.closed} onClick={closeModal}>
                  <p>x</p>   
                </div>
                <div className={styles.ImageTwin}>
                    <Image src={TWINBUSINESS} alt=''/>
                </div>
                <p className={styles.title}>FIRMA ELECTRONICA</p>
                <p className={styles.subtitle}>Registrar tu firma para otorgar permiso de recargas ilimitadas</p>
                <p className={styles.text}>Es necesario que registres una firma personal, la cual usarás para confirmar tus recargas de saldo cortesía</p>
                <Card className={styles.contCode} >
                  <div className={styles.InputTextCode}>
                    <p className={styles.text}>INGRESA 6 DIGITOS</p>
                    <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode1} />
                        <InputTextCode {...InputTextCode2} />
                        <InputTextCode {...InputTextCode3} />
                        <InputTextCode {...InputTextCode4} />
                        <InputTextCode {...InputTextCode5} />
                        <InputTextCode {...InputTextCode6} />
                    </div>
                  </div>  
                  <div className={styles.InputTextCode}>
                    <p className={styles.text}>CONFIRMA TU FIRMA</p>
                    <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode7} />
                        <InputTextCode {...InputTextCode8} />
                        <InputTextCode {...InputTextCode9} />
                        <InputTextCode {...InputTextCode10} />
                        <InputTextCode {...InputTextCode11} />
                        <InputTextCode {...InputTextCode12} />
                    </div>
                  </div>  
                </Card>
              </div>
            </div>
            {isModalOpen && ( 
              <ModalSuccess closeModal2={closeModal2} closeModalElectronicSignature={closeModal}/>
            )}
          </div>
        </>
    )
}