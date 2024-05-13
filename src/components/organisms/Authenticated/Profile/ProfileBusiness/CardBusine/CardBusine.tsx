import React, { useState } from 'react'
import styles from './CardBusine.module.scss'
import Image from 'next/image'
import { type } from './type'
import notification from '@/../../public/images/IconosBlancos/notification.png'
import share from '@/../../public/images/IconosBlancos/share.png'
import edit from '@/../../public/images/IconosBlancos/edit.png'
import Path from '@/../../public/images/icons/Path.svg'
import codigoqr from '@/../../public/images/icons/codigoqr.png'
import Button from '@/components/molecules/Button/Button/Button'
import qr from '@/../../public/images/icons/codigoqr.png'
import certificate_icon from '@/../public/images/Home/ProfileBussines/certifcate.png'
import user from '@/../public/images/Home/ProfileBussines/user.png'
//import qr_icon from '@/../public/images/icons/certificate_solid_icon.svg'

export default function CardBusine(props: type) {
  const {
    imageProfile,
    name,
    email,
    tel,
    profile,
    image,
    locationCompany,
    certification,
    setShowShareView,
    showShareView,
    showEditView,
    setShowEditView
  } = props;
  return (
    <>
      <div className={styles.CardProfile}>
        <div className={`${styles.ContProfile} ${imageProfile ? styles.withimage : styles.withoutimage}`}>
          {imageProfile &&
            <div className={styles.image}>

              <Image src={user} alt='' />

            </div>
          }

          <div className={styles.divinfo}>

            <div className={styles.info}>
              <p className={styles.name}>{name}</p>
              <p className={styles.email}>{email}</p>
              <p className={styles.tel}>TEL. {tel}</p>
              <p className={styles.profile}>{profile}</p>
              <div className={styles.images}>
                {certification &&
                  <div className={styles.certificate}>
                    <Image alt='' src={certificate_icon} />
                  </div>
                }
                {image &&
                  <div className={styles.imageNationality}>
                    <Image alt='' src={image} />
                  </div>
                }

              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.act}>
                <Image src={notification} alt='' />
              </div>
              <div className={styles.act}>
                <Image src={edit} alt='' onClick={() => setShowEditView(!showEditView)} />
              </div>
              <div className={styles.act}>
                <Image src={share} alt='' onClick={() => setShowShareView(!showShareView)} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}