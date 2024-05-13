import { memo } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import success from '@/../public/images/icons/success.png'
import { Modal } from '@/components/atoms/Modal/Modal'
import Button from '@/components/molecules/Button/Button/Button'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
}

export const ModalEventCreated: React.FC<ComponentProps> = memo(({
  visible,
  onHide = () => { },
}) => {

  const router = useRouter()

  return (
    <Modal
      visible={visible}
      onHide={onHide}
      closable={false}
      className={styles.alert}
    >
      <div className={styles.alert_container}>
        <div className={styles.alert_icon}>
          <Image
            src={success}
            alt='icon'
            width={65}
            height={65}
          />
        </div>
        <div className={styles.alert_title}>Evento creado con éxito</div>
        <div className={styles.alert_body}>
          <p>Expo auto 2023</p>
          <p>Su evento está siendo procesado y se le notificará dentro de 48 hrs si fue aceptado</p>
          <p>Al ser aprobado, <b>se le solicitará el pago de la membresía.</b> El cual activará todas las funciones de la plataforma, y podrás ver el alcance y visitas a tu empresa</p>
        </div>
        <div className={styles.alert_buttons}>
          <div style={{ width: '220px' }}>
            <Button
              onClick={() => router.push('/system/profile/company')}
              variant='thirdGreen'
              height='50px'
              borderRadius="15px"
            >
              Panel de Control
            </Button>
          </div>
          <div style={{ width: '220px' }}>
            <Button
              onClick={() => router.push('/system/home')}
              variant='blackbtn'
              height='50px'
              borderRadius="15px"
            >
              Ir al Home
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
})

ModalEventCreated.displayName = 'ModalEventCreated'
