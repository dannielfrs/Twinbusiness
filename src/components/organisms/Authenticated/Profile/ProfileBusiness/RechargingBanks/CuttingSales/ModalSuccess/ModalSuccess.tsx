import React from 'react'
import styles from './ModalSuccess.module.scss'
import Image from 'next/image'
import success from '@/../public/images/icons/success.png'
import publicidad2 from '@/../public/images/icons/publicidad2.jpg'

export default function ModalSuccess ({closeModal}: {closeModal?: () => void;}) {
    return(
        <>
        <div className={styles.ModalSuccess}>
            <div className={styles.modalback}>
                <div className={styles.modal}>
                    <div className={styles.success}>
                        <p className={styles.title}>¡Arqueo exitoso!</p>
                        <div className={styles.imageSuccess}>
                            <Image alt='' src={success}/>
                        </div>
                        <div className={styles.buttonOk} onClick={closeModal}>
                            <p>OK</p>
                        </div>
                        <p className={styles.text}>Publicidad</p>
                        <div className={styles.contimage}>
                            <Image src={publicidad2} alt=''/>
                        </div>
                     </div> 
                </div>
            </div>
        </div>
        </>
    )
}