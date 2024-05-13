import React from 'react'
import styles from './AcceptError.module.scss'
import Image from 'next/image'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import TWINBUSINESS from '@/../public/images/Home/logoGrande2.png'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Button from '@/components/molecules/Button/Button/Button'

interface ModalAlertProps {
    title?: string;
    imgs?: string;
    text?: string;
    variant?: string;
    type?: string;
    closeModal?: any;
    textBtn?: string;
    textwo?: string;
    texthre?: string;
    pass?: string;
    passConfirm?: string;
    // onClick?: () => void;
    // onClick?: (() => void) | undefined;
    // setAlertVisible?:()=>void;
    setAlertVisible: (value: boolean) => void;
    buttons?: any[];
}

const ModalSignature: React.FC<ModalAlertProps> = (props) => {
    const {
        title,
        imgs,
        text,
        // onClick,
        variant,
        type,
        textBtn,
        closeModal,
        buttons,
    } = props;

    const methods = useForm()

    const handleLoginSubmit: SubmitHandler<FieldValues> = () => { }

    return (
        <div className={styles.Alerts}>
            <FormHookProvider methods={methods} onSubmit={handleLoginSubmit}>
                <div className={styles.modalback}>
                    <div className={styles.modal}>
                        <div className={styles.imageTime}>
                            <Image alt='' src={TWINBUSINESS} />
                        </div>
                        <div className={styles.fDiv}>
                            <div className={styles.imgs}>
                                {imgs && (
                                    <Image
                                        alt='icon'
                                        src={imgs}
                                        width={50}
                                        height={50}
                                    />
                                )}
                            </div>
                            <div className={styles.title}>{title}</div>
                            <div className={styles.btns}>
                                <Button
                                    borderRadius="10px"
                                    variant={'blackbtn'}
                                    onClick={closeModal}
                                >
                                    {textBtn}
                                </Button>
                            </div>
                        </div>
                        <div className={styles.passback}>
                            <div className={styles.text}>
                                {text}
                            </div>
                        </div>
                    </div>
                </div>
            </FormHookProvider>
        </div>
    );
};

export default ModalSignature;
