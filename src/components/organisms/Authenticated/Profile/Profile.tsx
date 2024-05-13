'use client'

import React from 'react'
import styles from './Profile.module.scss'
import Card from '@/components/molecules/Card/Card'
import ProfilePersonal from './ProfilePersonal/ProfilePersonal'
import Soon from './Soon/Soon'
import { AuthProvider } from '@/context'

export default function Profile () {
  //
  return (
    <AuthProvider>
      {false && <Soon />}
      <div className={`${styles.Profile} ${styles.noScroll}`}>
        <Card className={styles.CardProfile}>
          <div className='card'>
            <ProfilePersonal />
          </div>
        </Card>
      </div>
    </AuthProvider>
  )
}
