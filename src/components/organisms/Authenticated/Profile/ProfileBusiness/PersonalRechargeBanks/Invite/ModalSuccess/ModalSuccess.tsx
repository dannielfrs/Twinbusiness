'use client'
import React from 'react'
import styles from './ModalSuccess.module.scss'
import Image from 'next/image'
import TWINBUSINESS from '@/../public/images/Home/logoGrande2.png'
import success from '@/../public/images/icons/success.png'
import Button from '@/components/molecules/Button/Button/Button'
import Card from '@/components/molecules/Card/Card'
import { useRouter } from 'next/navigation'

export default function ModalSuccess ({closeModal2, closeModalElectronicSignature}: {closeModal2?: () => void; closeModalElectronicSignature?: () => void; }) {
  const router = useRouter();
  const handleCloseModals = () => {
    closeModal2?.();
    closeModalElectronicSignature?.();
    router.push('/system/profile/businessman/dashboard/personal-recharge-banks/assign-amount')
  };
  return(
    <>
      <div className={styles.ModalSuccess}>
        <div className={styles.modalback}>
          <div className={styles.modal}>
            <div className={styles.ImageTwin}>
              <Image src={TWINBUSINESS} alt=''/>
            </div>
            <div className={styles.ImageSuccess}>
              <Image src={success} alt=''/>
            </div>
            <p className={styles.text}>TU FIRMA HA SIDO REGISTRADA CON EXITO</p>
            <div style={{width: '240px'}}>
              <Button variant='third' onClick={handleCloseModals}>OK</Button>
            </div>
            <Card className={styles.CardText}>
                <p className={styles.text2}>Con esta firma podrás otorgar permisos para recargas de saldo</p>
            </Card>
          </div>
        </div>
      </div>     
    </>
  )
}