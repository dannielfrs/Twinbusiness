import React from 'react'
import styles from './Ticket.module.scss'
import Image from 'next/image'
import qr from '@/../public/images/icons/qr.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import twinEvents from '@/../public/images/icons/twinEvents.png'

export default function Ticket({
  title,
  date,
  door,
  zone,
  hourStart,
  endHour,
  image,
  dateStart,
  dateEnd
}: {
  title?: string,
  date?: string,
  door?: string,
  zone?: string,
  hourStart?: string,
  endHour?: string,
  image?: string | StaticImport,
  dateStart?: string,
  dateEnd?: string
}) {

  return (
    <div className={styles.ticket}>
      <div className={styles.twinevents}>
        <Image alt='logo' src={twinEvents} />
      </div>
      <div className={styles.imageTicket}>
        {image &&
          <Image
            alt='image'
            src={image}
            loader={({ src }) => src}
            width={328}
            height={423}
          />}
      </div>
      <div className={styles.circle}></div>
      <div className={styles.circleRight}></div>
      <div className={styles.contBottom}>
        <p className={styles.title}>{title}</p>
        <p className={styles.dateT}>{date}</p>
        <div className={styles.TextCode}>
          <div className={styles.left}>
            <div className={styles.bothText}>
              <p className={styles.text}>Ingreso: <label>{door}</label></p>
              <p className={styles.text}>Zona: <label>{zone}</label></p>
            </div>
            <div className={styles.date}>
              <div className={styles.left}>
                <p className={styles.textDate}>FECHA</p>
                <div className={styles.start}>
                  <p className={styles.textStart}>INICIA</p>
                  <p className={styles.dateText}>{dateStart}</p>
                </div>
                <div className={styles.start}>
                  <p className={styles.textStart}>FINALIZA</p>
                  <p className={styles.dateText}>{dateEnd}</p>
                </div>
              </div>
              <div className={styles.right}>
                <p className={styles.textHour}>HORA</p>
                <p className={styles.startHour}>{hourStart}</p>
                <p className={styles.endHour}>{endHour}</p>
              </div>
            </div>
          </div>
          <div className={styles.CodeQr}>
            <Image alt='qr' src={qr} />
          </div>
        </div>
      </div>
    </div>
  )
}