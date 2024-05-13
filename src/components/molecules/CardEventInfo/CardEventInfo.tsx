'use client'

import { memo } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface ComponentProps {
  name?: string
  imageUrl: string
  startDate?: string
  startTime?: string
  endDate?: string
  endTime?: string
}

export const CardEventInfo: React.FC<ComponentProps> = memo(({
  name,
  imageUrl,
  startDate,
  startTime,
  endDate,
  endTime,
}) => {

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={imageUrl}
          alt='image'
          loader={({ src }) => src}
          width={20}
          height={20}
        />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_header}>{name}</div>
        <div className={styles.card_row}>
          <div className={styles.card_item}>
            <div>Inicia</div>
            <div>{startDate}</div>
          </div>
          <div>Hora {startTime}</div>
        </div>
        <div className={styles.card_row}>
          <div className={styles.card_item}>
            <div>Finaliza</div>
            <div>{endDate}</div>
          </div>
          <div>Hora {endTime}</div>
        </div>
      </div>
    </div>
  )
})

CardEventInfo.displayName = 'CardEventInfo'
