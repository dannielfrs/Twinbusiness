import React from 'react'
import styles from './CardPackage.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import Image from 'next/image'
import paqueteSocio from '@/../public/images/icons/paqueteSocio.svg'

export default function CardPackage({
  title,
  subtitle,
  text1,
  text2,
  name,
  type,
  time,
  price,
  buttonType,
  onClickSelect
}: {
  title: string,
  subtitle: string,
  text1: string,
  text2: string,
  name: string,
  type: string,
  time: string,
  price: string,
  buttonType: 'gray' | 'black'
  onClickSelect: () => any
}) {

  return (
    <>
      <div className={styles.CardPackage}>
        <div className={styles.imagePackage}>
          <Image alt='' src={paqueteSocio} />
          <p className={styles.namePackage}>{name}</p>
        </div>
        <div className={styles.black}>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>{price}</p>
          <div className={styles.textMoney}>
            <p className={styles.type}>{type}</p>
            <p className={styles.time}>{time}</p>
          </div>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.contBottom}>
          <p className={styles.text1}>{text1}</p>
          <p className={styles.text2}>{text2}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ width: '226px' }}>
            <Button
              variant={buttonType === 'gray' ? 'gray-color' : 'primary'}
              height='33px'
              onClick={onClickSelect}
            >
              {buttonType === 'gray' ? 'PRÓXIMAMENTE' : 'Organiza tu evento'}
            </Button>
          </div>
          <div style={{ width: '226px' }}>
            <Button
              variant='transparent-static'
              height='33px'
            >
              Ver lo que incluye
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}