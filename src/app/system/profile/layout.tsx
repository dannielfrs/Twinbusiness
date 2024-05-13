import { LayoutAuth } from '@/components/layouts/LayoutAuth/LayoutAuth'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutAuth showSearch={false} showProfileMenu={true} showSidebar={true} showMenu={true}>{children}</LayoutAuth>
  )
}
