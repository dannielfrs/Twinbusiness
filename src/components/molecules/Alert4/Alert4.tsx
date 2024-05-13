import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Button from '../Button/Button/Button'
import time from '@/../public/images/icons/time.svg'
import success from '@/../public/images/icons/success.png'
import cancel from '@/../../public/images/icons/cancel.png'
import { Modal } from '@/components/atoms/Modal/Modal'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  dismissableMask?: boolean
  className?: string
  title?: string;
  icon?: string | StaticImport
  content?: string;
  labelButton1?: string
  labelButton?: string
  onClickButton1?: () => void
  onClickButton?: () => void
}

export const Alert4: React.FC<ComponentProps> = ({
  visible,
  onHide = () => { },
  dismissableMask,
  className = '',
  title,
  content,
  icon,
  labelButton1,
  labelButton,
  onClickButton1,
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
        {icon &&
          <div className={styles.alert_icon}>
            <Image
              src={alertIcon}
              alt='icon'
              width={90}
              height={100}
            />
          </div>}
        <p className={styles.alert_title} style={{ height: content ? 'auto' : '100%' }}>{title}</p>
        {content && <p className={styles.alert_content}>{content}</p>}
        <div className={styles.alert_buttons}>
          {labelButton1 &&
            <div style={{ width: '220px' }}>
              <Button
                onClick={onClickButton1}
                variant='whiteAlert'
                height='50px'
                borderRadius="20px"
              >
                {labelButton1}
              </Button>
            </div>
          }
          {labelButton &&
            <div style={{ width: '220px' }}>
              <Button
                onClick={onClickButton}
                variant='blackAlert'
                height='50px'
                borderRadius="20px"
              >
                {labelButton}
              </Button>
            </div>
          }
        </div>
      </div>
    </Modal>
  )
}
