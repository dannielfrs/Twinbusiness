import React from 'react'
import styles from './QrCash.module.scss'
import Image from 'next/image'
import qrTwin from '@/../public/images/icons/qrTwin.png'
import Card from '@/components/molecules/Card/Card';
import DownloadImage from '@/../public/images/icons/DownloadImage.svg'
import ImagePrint from '@/../public/images/icons/ImagePrint.svg'

export default function QrCash ({closeModal}: {closeModal?: () => void;}) {
    return(
        <>
         <div className={styles.QrCash}>
            <div className={styles.modalback}>
                <div className={styles.modal}>
                    <Card className={styles.cardQr}>
                        <div className={styles.circle}>
                            <div className={styles.closed} onClick={closeModal}>x</div>
                        </div>
                        <p className={styles.title}>QR para efectivo</p>
                        <div className={styles.qr}>
                            <Image alt='' src={qrTwin}/>
                        </div>
                    </Card>
                    <div className={styles.containers}>
                        <div className={styles.contDownload}>
                            <p>Descargar</p>
                            <Image alt='' src={DownloadImage}/>
                        </div>
                        <div className={styles.contPrint}>
                            <p>Imprimir</p>
                            <Image alt='' src={ImagePrint}/>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}