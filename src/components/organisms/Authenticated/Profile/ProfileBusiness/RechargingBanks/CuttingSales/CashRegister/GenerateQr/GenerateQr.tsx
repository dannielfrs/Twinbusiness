import React from 'react'
import styles from './GenerateQr.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import QRMenuPublico from '@/../public/images/icons/QRMenuPublico.svg'

export default function GenerateQr ({closeModal}: {closeModal?: () => void;}) {
    return(
        <>
         <div className={styles.GenerateQr}>
            <div className={styles.modalback}>
                <div className={styles.modal}>
                    <Card className={styles.cardQr}>
                        <div className={styles.circle}>
                            <div className={styles.closed} onClick={closeModal}>x</div>
                        </div>
                        <p className={styles.title}>QR para arqueo</p>
                        <div className={styles.qr}>
                            <Image alt='' src={QRMenuPublico}/>
                        </div>
                        <div className={styles.containerText}>
                            <p className={styles.title}>Monto en efectivo que entrega el banco de venta para cerrar arqueo</p>
                            <Card className={styles.cont}>
                                <p className={styles.text}>100,000.00</p>
                                <p className={styles.text}>MXN</p>
                            </Card>
                            <p className={styles.title}>Monto restante que queda en banco de venta al realizar arqueo</p>
                            <Card className={styles.cont}>
                                <p className={styles.text}>78,250.00</p>
                                <p className={styles.text}>MXN</p>
                            </Card>
                        </div>
                    </Card>
                </div>
            </div>
         </div>
        </>
    )
}