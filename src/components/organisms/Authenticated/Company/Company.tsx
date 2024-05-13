'use client'

import React from 'react'
import styles from '../Profile/Profile.module.scss'
import Card from '@/components/molecules/Card/Card'
import ProfileBusiness from '../Profile/ProfileBusiness/ProfileBusiness'
import { AuthProvider } from '@/context'
import { CompanyProfileProvider } from '@/context/authenticated/profile/company/CompanyProfile/CompanyProfileProvider'

export default function Company () {
  //
  return (
    <AuthProvider>
      <div className={`${styles.Profile} ${styles.noScroll}`}>
        <Card className={styles.CardProfile}>
          <div className='card'>
            <CompanyProfileProvider>
              <ProfileBusiness />
            </CompanyProfileProvider>
          </div>
        </Card>
      </div>
    </AuthProvider>
  )
}
