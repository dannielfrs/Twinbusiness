'use client'
import React from 'react'
import styles from './BackBlackTwin.module.scss'
import Image from 'next/image'
import black from '@/../public/images/Home/black.png'
import logo_big from '@/../public/images/Events/logo_big.png'

export default function BackBlackTwin () {
    return(
        <>
         <div className={styles.BackBlackTwin}>
          <div className={styles.imageBlack}>
            <Image src={black} alt='' />
          </div>
          <div className={styles.ImageText}>
            <div className={styles.imageLogo}>
              <Image alt='' src={logo_big}/>
            </div> 
            <p className={styles.text}>El primer centro comercial Digital que acepta CRIPTOMONEDAS</p>
          </div>
         </div>
        </>
    )
}