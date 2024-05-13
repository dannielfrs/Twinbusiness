'use client'

import React from 'react'
import styles from '../Profile/Profile.module.scss'
import Card from '@/components/molecules/Card/Card'
import Soon from '../Profile/Soon/Soon'
import { AuthProvider } from '@/context'

export default function Guest () {
  //
  return (
    <AuthProvider>
      {false && <Soon />}
      <div className={`${styles.Profile} ${styles.noScroll}`}>
        <Card className={styles.CardProfile}>
          <div className='card'>
            Invitado
          </div>
        </Card>
      </div>
    </AuthProvider>
  )
}
