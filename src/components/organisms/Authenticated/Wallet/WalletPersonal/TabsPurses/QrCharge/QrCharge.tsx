import React, { useEffect, useMemo, useState } from 'react'
import styles from './QrCharge.module.scss'
import Card from '@/components/molecules/Card/Card'
import InputText from '@/components/molecules/InputText/InputText'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import Button from '@/components/molecules/Button/Button/Button'
import Image from 'next/image'
import twinCard from '@/../public/images/icons/twinCard.png'
import imageSearch from '@/../public/images/icons/search.svg'
import mexico from '@/../public/images/icons/mexico.png'
import EyeClosed from '@/../public/images/icons/Eyeclose.svg'
import EyeOpen from '@/../public/images/icons/Eye.svg'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'

export default function QrCharge () {

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
                    <Card className={styles.QrCharge}>
                        <p className={styles.title}>Monedero personal</p>
                        <div className={styles.container}>
                            <div className={styles.TextInput}>
                                <p>Cantidad a cobrar</p>
                                <InputText height='40px' name='' defaultValue='$1,000.00 MXN' variant='ShadowInset' />
                            </div>
                            <div className={styles.ContButton}>
                                <div style={{ width: '266px', height: '40px' }}>
                                    <Button variant='third'>Cobrar</Button>
                                </div>
                                <div style={{ width: '266px', height: '40px' }}>
                                    <Button variant='third'>Dividir por monto</Button>
                                </div>
                                <div style={{ width: '266px', height: '40px' }}>
                                    <Button variant='third'>Dividir por partes iguales</Button>
                                </div>
                                <div style={{ width: '266px', height: '40px' }}>
                                    <Button variant='third'>Cobrar por punto de venta</Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.textInputSearch}>
                            <p className={styles.textSearch}>Buscar el perfil a cobrar si no cuenta con móvil o QR digital</p>
                            <div style={{ width: '216px' }}>
                                <InputText
                                    label=''
                                    name='search'
                                    // value={search}
                                    // onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Teléfono o correo'
                                    icon={imageSearch}
                                    iconPosRight={true}
                                    variant='searchWallet'
                                    height='40px'
                                    filter={false}
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className={styles.card2}>
                        <p className={styles.title}>Cobro QR</p>
                        <div className={styles.ImageQr}>
                            <Image src={twinCard} alt='' />
                        </div>
                        <div className={styles.ButtonScanner}>
                            <Button variant='third'>Escanear</Button>
                        </div>
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
                                    <p className={styles.text1}>Total a cobrar:</p>
                                    <p className={styles.text1}>MXN</p>
                                </div>
                                <p className={styles.number}>1,800.00</p>
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
                                        <Button variant='third'>Recibo</Button>
                                    </div>
                                    <div className={styles.button}>
                                        <Button variant='third'>Factura</Button>
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