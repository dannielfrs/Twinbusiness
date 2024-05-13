'use client'

import { ReactNode } from "react"
import styles from './LayoutAuth.module.scss'
import AuthHeader from "@/components/organisms/Authenticated/AuthHeader/AuthHeader"
import Sidebar from '@/components/organisms/Home/Sidebar/Sidebar'
import { AuthProvider } from "@/context"

interface ComponentProps {
  showHeader?: boolean
  showSearch?: boolean
  showProfileMenu?: boolean
  showSidebar?: boolean
  showMenu?: boolean
  backUrl?: string
  children?: ReactNode
}

export const LayoutAuth: React.FC<ComponentProps> = ({
  showHeader = true,
  showSearch = true,
  showProfileMenu = false,
  showSidebar = true,
  showMenu = true,
  backUrl,
  children
}) => {

  return (
    <div className={styles.layout}>
      <div className={styles.template_header}>
        {showHeader && <AuthHeader showSearch={showSearch} showProfileMenu={showProfileMenu} />}
      </div>
      <div className={styles.template_sidebar}>
        {showSidebar &&
          <AuthProvider>
            <Sidebar backHref={backUrl} showMenu={showMenu} />
          </AuthProvider>}
      </div>
      <main className={styles.template_page}>
        {children}
      </main>
    </div>
  )
}
