import { useContext, useEffect, useMemo, useState } from 'react'
import styles from './EmptyAlert.module.scss'
// import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import logo from '@/../public/icons/x.svg'
import { ReactNode } from 'react';
import Image from 'next/image';

interface ModalAlertProps {
    children?: ReactNode;
    onClickX?: () => void;
}

const EmptyAlert: React.FC<ModalAlertProps> = (props) => {
    const {
        children,
        onClickX
    } = props

    return (
        <div className={styles.Alert}>
            <div className={styles.modalback}>
                <div className={styles.modal}>
                    <div style={{width: '100%', display: 'flex'}}>
                        <div style={{margin: 'auto'}}></div>
                        <Image 
                            src={logo} alt=''
                            onClick={onClickX}
                            height={24}
                            width={24}
                            style={{cursor: 'pointer'}}
                        ></Image>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default EmptyAlert
