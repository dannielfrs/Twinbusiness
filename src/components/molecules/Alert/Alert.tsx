import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import time from '@/../public/images/icons/time.svg'
import success from '@/../public/images/icons/success.png'
import cancel from '@/../../public/images/icons/cancel.png'
import advertising from '@/../public/images/icons/TWINBUSINESS.svg'
import Button from '@/components/molecules/Button/Button/Button'
import { Modal } from '@/components/atoms/Modal/Modal'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  dismissableMask?: boolean
  className?: string
  title?: string;
  icon?: string | StaticImport
  labelButton?: string
  onClickButton?: () => void
}

export const Alert: React.FC<ComponentProps> = ({
  visible,
  onHide = () => { },
  dismissableMask,
  className = '',
  title,
  icon,
  labelButton,
  onClickButton
}) => {

  let alertIcon = time

  switch (icon) {
    case 'loading':
      alertIcon = time
      break
    case 'success':
      alertIcon = success
      break
    case 'error':
      alertIcon = cancel
      break
    default:
      break
  }

  return (
    <Modal
      visible={visible}
      onHide={onHide}
      closable={false}
      dismissableMask={dismissableMask}
      maskClassName={styles.mask}
      className={styles.alert}
    >
      <div className={styles.alert_container}>
        <p className={styles.alert_title}>{title}</p>
        <div className={styles.alert_icon}>
          <Image src={alertIcon} alt='icon' />
        </div>
        {labelButton &&
          <div style={{ width: '219px' }}>
            <Button
              onClick={onClickButton}
              variant='primary'
            >
              {labelButton}
            </Button>
          </div>
        }
        <div className={styles.alert_advertising}>
          <Image src={advertising} alt='advertising' />
        </div>
      </div>
    </Modal>
  )
}