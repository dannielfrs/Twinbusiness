import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Button from '../Button/Button/Button'
import time from '@/../public/images/icons/time.svg'
import success from '@/../public/images/icons/success.png'

export default function Alert2({
  title,
  content,
  icon,
  labelButton1 = 'Cancelar',
  labelButton2,
  onClickButton1,
  onClickButton2
}: {
  title?: string
  content?: string
  icon?: string | StaticImport
  labelButton1?: string
  labelButton2?: string
  onClickButton1?: () => void
  onClickButton2?: () => void
}) {

  let alertIcon = time

  switch (icon) {
    case 'loading':
      alertIcon = time
      break
    case 'success':
      alertIcon = success
      break
    default:
      break
  }

  return (
    <div className={styles.alert}>
      <div className={styles.alert_modal}>
        <div className={styles.alert_container}>
          {icon &&
            <div className={styles.alert_icon}>
              <Image
                src={alertIcon}
                alt='icon'
                width={60}
                height={60}
              />
            </div>
          }
          <p className={styles.alert_title}>{title}</p>
          <p className={styles.alert_content}>{content}</p>
          <div className={styles.alert_buttons}>
            <div style={{ width: '219px' }}>
              <Button
                onClick={onClickButton1}
                variant='whiteAlert'
                height='60px'
              >
                {labelButton1}
              </Button>
            </div>
            <div style={{ width: '219px' }}>
              <Button
                onClick={onClickButton2}
                variant='blackAlert'
                height='60px'
              >
                {labelButton2}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
