'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './QrPayments.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import tarjetatwin from '@/../public/images/icons/tarjetatwin.png'
import Button from '@/components/molecules/Button/Button/Button'
import twinCard from '@/../public/images/icons/twinCard.png'
import mexico from '@/../public/images/icons/mexico.png'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import EyeClosed from '@/../public/images/icons/Eyeclose.svg'
import EyeOpen from '@/../public/images/icons/Eye.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import InputText from '@/components/molecules/InputText/InputText'

export default function QrPayments() {

    const methods = useForm()
    const [isEyeOpen, setIsEyeOpen] = useState(false)
    const [cardNumber, setCardNumber] = useState('1425 4785 9541')
    const [codeValues, setCodeValues] = useState(['', '', '', '', '', ''])
    const [validate, setValidate] = useState(true)

    const onSubmit = () => { }

    const toggleEye = () => {
        setIsEyeOpen(!isEyeOpen);
        if (isEyeOpen) {
            setCardNumber('1425 4785 9541');
        } else {
            setCardNumber('XXXX XXXX XXXX');
        }
    }

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
    return (
        <>
            <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <div className={styles.cards}>
                    <Card className={styles.card1}>
                        <p className={styles.title}>Monedero personal</p>
                        <p className={styles.subtitle}>Tarjeta digital</p>
                        <div className={styles.image}>
                            <Image src={tarjetatwin} alt='' />
                        </div>
                        <p className={styles.textBottom}>SOLICITA TU TARJETA FÍSICA DANDO CLIC A ESTE ENLACE <a>SOLICITUD DE TARJETA</a></p>
                    </Card>
                    <Card className={styles.card2}>
                        <p className={styles.title}>Pago QR</p>
                        <div className={styles.ImageQr}>
                            <Image src={twinCard} alt='' />
                        </div>
                        <p className={styles.textGray}>Pago QR es la mejor forma de pagos del momento porque con tan solo firmar con tus 6 digitos se realizará el pago en segundos</p>
                    </Card>
                    <Card className={styles.card3}>
                        <p className={styles.title}>Monedero MXN</p>
                        <div className={styles.contCards}>
                            <Card className={styles.cont1}>
                                <div className={styles.flag}>
                                    <Image alt='' src={mexico} />
                                </div>
                                <div className={styles.both}>
                                    <p className={styles.text1}>Monedero Personal</p>
                                    <p className={styles.text2}>Saldo disponible</p>
                                </div>
                                <div className={styles.numberCard}>
                                    <Image src={isEyeOpen ? EyeClosed : EyeOpen} alt='' onClick={toggleEye} />
                                    <p className={styles.number}>{cardNumber}</p>
                                </div>
                            </Card>
                            <Card className={styles.cont2}>
                                <div style={{ width: '284px' }}>
                                    <Button variant='third'>Orden de compra</Button>
                                </div>
                                <div className={styles.TextTotal}>
                                    <p className={styles.text1}>Total a pagar:</p>
                                    <p className={styles.text1}>MXN</p>
                                </div>
                                <InputText name='' variant='invisible' defaultValue='$1,800.00' />
                                <div className={styles.container_code}>
                                    <InputTextCode {...InputTextCode1} />
                                    <InputTextCode {...InputTextCode2} />
                                    <InputTextCode {...InputTextCode3} />
                                    <InputTextCode {...InputTextCode4} />
                                    <InputTextCode {...InputTextCode5} />
                                    <InputTextCode {...InputTextCode6} />
                                </div>
                                <div className={styles.ContButton}>
                                    <div className={styles.button}>
                                        <Button variant='third'>Ok</Button>
                                    </div>
                                    <div className={styles.button}>
                                        <Button variant='letter-gray'>Cancelar</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Card>
                </div>
            </FormHookProvider>
        </>
    )
}