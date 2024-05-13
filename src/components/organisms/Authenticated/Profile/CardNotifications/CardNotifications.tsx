import React from 'react'
import styles from './CardNotifications.module.scss'
import Image from 'next/image'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'

interface type {
  width?: string
  titleFontSize?: string
  subtitleFontSize?: string
  title?: string
  subtitle?: string
  imageSrc?: string | StaticImport
  number?: number
  backgroundColor?: string
  textButton?: string
  showButton?: boolean
  style?: any
  url?: string
}

export default function CardNotifications(props: type) {
  const {
    width,
    titleFontSize,
    subtitleFontSize,
    imageSrc,
    number,
    title,
    subtitle,
    backgroundColor,
    textButton,
    showButton,
    url,
    style
  } = props

  const router = useRouter()

  const cardStyle = {
    width: width || '100%',
    background: backgroundColor || 'linear-gradient(233deg, #2B2929 0%, #4E4E4E 100%) 0% 0% no-repeat padding-box',
  }

  const titleStyle = {
    fontSize: titleFontSize || '16px',
  }

  const subtitleStyle = {
    fontSize: subtitleFontSize || '14px',
  }

  return (
    <div className={styles.CardNotifications} style={style ? style : cardStyle} onClick={() => url && router.push(url)}>
      <div className={styles.Icon}>
        {imageSrc && <Image src={imageSrc} alt='icon' width={10} height={10} />}
      </div>
      <div className={styles.ContText}>
        <p className={styles.title} style={titleStyle}>{title}</p>
        <div className={styles.ButtonText}>
          <p className={styles.subtitle} style={subtitleStyle}>{subtitle}</p>
          <div>
            {showButton &&
              <Button variant='White' onClick={() => url && router.push(url)}>
                {textButton || 'Ver'}
              </Button>
            }
          </div>
        </div>
      </div>
      <p className={styles.number}>{number}</p>
    </div>
  )
}