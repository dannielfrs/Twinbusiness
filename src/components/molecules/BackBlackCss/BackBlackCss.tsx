'use client'
import React, { ReactNode } from 'react'
import styles from './BackBlackCss.module.scss'
import logo from '@/../public/images/Events/logo_big.png'

interface BackBlackCssProps {
  children?: ReactNode;
}

export default function BackBlackCss ({ children }: BackBlackCssProps) {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.content}>
          <img className={styles.imageLogo} src={logo?.src} />
          <h2>El primer centro comercial Digital que acepta <strong>CRIPTOMONEDAS</strong></h2>
        </div>
      </div>
      <div className={styles.backRadius}>
        <div className={styles.backWhite}>
          {children}
        </div>
      </div>
    </>
  )
}
