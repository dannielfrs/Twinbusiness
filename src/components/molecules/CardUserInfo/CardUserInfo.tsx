'use client'

import { memo } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import defaultPicture from '@/../public/images/icons/default_user.jpg'

interface ComponentProps {
  name?: string
  profilePicture: string
  country?: string
  email?: string
  role?: string
}

export const CardUserInfo: React.FC<ComponentProps> = memo(({
  name,
  profilePicture,
  country,
  email,
  role,
}) => {

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={profilePicture || defaultPicture}
          alt='image'
          loader={({ src }) => src}
          width={20}
          height={20}
          className={styles.card_profilepicture}
        />
        <Image
          src={country || ''}
          alt='image'
          loader={({ src }) => src}
          width={20}
          height={20}
          className={styles.card_country}
        />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_header}>{name}</div>
        <div className={styles.card_group}>
          <div>{email}</div>
          <div>Rol: {role}</div>
        </div>
      </div>
    </div>
  )
})

CardUserInfo.displayName = 'CardUserInfo'
