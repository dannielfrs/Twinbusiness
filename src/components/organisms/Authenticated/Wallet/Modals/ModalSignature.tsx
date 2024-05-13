import { useContext, useEffect, useMemo, useState } from 'react'
import styles from './modals.module.scss'
import Image from 'next/image'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import TWINBUSINESS from '@/../public/images/Home/logoGrande2.png'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { WalletDocumentsContext } from '@/context/authenticated/wallet/walletDocuments'

interface ComponentProps {
    title?: string;
    text?: string;
    textwo?: string;
    texthre?: string;
    pass?: string;
    passConfirm?: string;
}

const ModalSignature: React.FC<ComponentProps> = (props) => {
    const {
        title,
        text,
        textwo,
        texthre,
        pass,
        passConfirm,
    } = props

    const { createElectronicSignature } = useContext(WalletDocumentsContext)
    const methods = useForm()
    const [validate, setValidate] = useState(true)
    const [codeValues, setCodeValues] = useState(['', '', '', '', '', ''])
    const [errorMessage, setErrorMessage] = useState(false)

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

    ////////////////////////Signature confirmation/////////////////////////////

    const [validateSecond, setValidateSecond,] = useState(true)
    const [codeValuesSecond, setCodeValuesSecond] = useState(['', '', '', '', '', ''])

    useEffect(() => {
        const values = codeValuesSecond.filter((item) => item !== '')
        if (values.length === 6) setValidateSecond(false)
    }, [codeValuesSecond])

    const handleInputChangeSecond = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = e.target.value
        const array = [...codeValuesSecond]
        array[index] = newValue
        setCodeValuesSecond(array)
        if (newValue.length === 1 && e.target.nextElementSibling !== null) {
            (e.target.nextElementSibling as HTMLInputElement).focus()
        } else if (newValue.length === 1 && e.target.nextElementSibling === null) {
            e.target.blur()
        }
    }

    const handleOnPasteSecond = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const textPasted = e.clipboardData.getData('text/plain')
        setCodeValuesSecond(textPasted.split('').slice(0, 6))
        if (e.target instanceof HTMLInputElement) {
            e.target.blur();
        }
    }

    const inputTextCodeConfirmation1 = useMemo(() => ({
        name: 'codeSecond1',
        type: 'password',
        value: codeValuesSecond[0],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSecond(e, 0),
        onPaste: () => handleOnPasteSecond,
        height: '31px',
        rules: { required: true }
    }), [codeValuesSecond])

    const inputTextCodeConfirmation2 = useMemo(() => ({
        name: 'codeSecond2',
        type: 'password',
        value: codeValuesSecond[1],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSecond(e, 1),
        onPaste: () => handleOnPasteSecond,
        height: '31px',
        rules: { required: true }
    }), [codeValuesSecond])

    const inputTextCodeConfirmation3 = useMemo(() => ({
        name: 'codeSecond3',
        type: 'password',
        value: codeValuesSecond[2],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSecond(e, 2),
        onPaste: () => handleOnPasteSecond,
        height: '31px',
        rules: { required: true }
    }), [codeValuesSecond])

    const inputTextCodeConfirmation4 = useMemo(() => ({
        name: 'codeSecond4',
        type: 'password',
        value: codeValuesSecond[3],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSecond(e, 3),
        onPaste: () => handleOnPasteSecond,
        height: '31px',
        rules: { required: true }
    }), [codeValuesSecond])

    const inputTextCodeConfirmation5 = useMemo(() => ({
        name: 'codeSecond5',
        type: 'password',
        value: codeValuesSecond[4],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSecond(e, 4),
        onPaste: () => handleOnPasteSecond,
        height: '31px',
        rules: { required: true }
    }), [codeValuesSecond])

    const inputTextCodeConfirmation6 = useMemo(() => ({
        name: 'codeSecond6',
        type: 'password',
        value: codeValuesSecond[5],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSecond(e, 5),
        onPaste: () => handleOnPasteSecond,
        height: '31px',
        rules: { required: true }
    }), [codeValuesSecond])

    useEffect(() => {
        const areArraysNotEmpty = codeValues.every(value => value !== '') && codeValuesSecond.every(value => value !== '');
        if (areArraysNotEmpty) {
            const areArraysEqual = codeValues.every((value, index) => value === codeValuesSecond[index])
            if (areArraysEqual) {
                setErrorMessage(false)
                createElectronicSignature(codeValues, codeValuesSecond)
            } else {
                setErrorMessage(true)
            }
        } else {
            setErrorMessage(false)
        }
    }, [codeValues, codeValuesSecond])

    const onSubmit: SubmitHandler<FieldValues> = () => { }

    return (
        <div className={styles.Alert}>
            <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <div className={styles.modalback}>
                    <div className={styles.modal}>
                        <div className={styles.imageTime}>
                            <Image alt='' src={TWINBUSINESS} />
                        </div>
                        <div className={styles.fDiv}>
                            <div className={styles.title}>{title}</div>
                            <div className={styles.titleTwo}>{text}</div>
                            <div className={styles.text}>{textwo}</div>
                            <div className={styles.text}>{texthre}</div>
                        </div>
                        <div className={styles.passback}>
                            <div className={styles.InputTextCode}>
                                <p className={styles.text}>{pass}</p>
                                <div className={styles.container_code}>
                                    <InputTextCode {...InputTextCode1} />
                                    <InputTextCode {...InputTextCode2} />
                                    <InputTextCode {...InputTextCode3} />
                                    <InputTextCode {...InputTextCode4} />
                                    <InputTextCode {...InputTextCode5} />
                                    <InputTextCode {...InputTextCode6} />
                                </div>
                            </div>
                            <div className={styles.InputTextCode} >
                                <p className={styles.text}>{passConfirm}</p>
                                <div className={styles.container_code}>
                                    <InputTextCode {...inputTextCodeConfirmation1} />
                                    <InputTextCode {...inputTextCodeConfirmation2} />
                                    <InputTextCode {...inputTextCodeConfirmation3} />
                                    <InputTextCode {...inputTextCodeConfirmation4} />
                                    <InputTextCode {...inputTextCodeConfirmation5} />
                                    <InputTextCode {...inputTextCodeConfirmation6} />
                                </div>
                            </div>
                            {errorMessage && <div className={styles.section_error_message}>Las firmas no coinciden</div>}
                        </div>
                    </div>
                </div>
            </FormHookProvider>
        </div>
    )
}

export default ModalSignature
