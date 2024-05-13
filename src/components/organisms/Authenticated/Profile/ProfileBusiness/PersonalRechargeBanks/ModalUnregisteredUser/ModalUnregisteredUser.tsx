import React from 'react'
import styles from './ModalUnregisteredUser.module.scss'
import Image from 'next/image'
import Button from '@/components/molecules/Button/Button/Button'
import Card from '@/components/molecules/Card/Card'
import danger from '@/../public/images/icons/danger.png'
import { useRouter } from 'next/navigation'

export default function ModalUnregisteredUser ({closeModal}: {closeModal?: () => void;}) {
  const router = useRouter();
  return(
    <>
     <div className={styles.ModalSuccess}>
        <div className={styles.modalback}>
          <div className={styles.modal}>
            <div className={styles.closed} onClick={closeModal}>
              <p>x</p>
            </div>
            <Card className={styles.cardCenter}>
                <div className={styles.ImageDanger}>
                  <Image src={danger} alt=''/>
                </div>
                <p className={styles.title}>Usuario no encontrado</p>
                <p className={styles.text}>3322343738</p>
                <div style={{width: '240px'}}>
                  <Button variant='third' onClick={() => { router.push('/system/profile/businessman/dashboard/personal-recharge-banks/invite/unregistered-user') }}>Invitar</Button>
                </div>
            </Card>
          </div>
        </div>
      </div>          
    </>
  )
}