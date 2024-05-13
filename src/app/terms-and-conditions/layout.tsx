'use client'

import { ReactNode } from "react"
import Sidebar from '@/components/organisms/Home/Sidebar/Sidebar'
import GuestHeader from '@/components/organisms/Home/GuestHeader/GuestHeader'
import { useRouter } from 'next/navigation'
import { AuthProvider } from "@/context"

export default function Layout({ children }: { children: ReactNode }) {

  const router = useRouter()

  return (
    <div>
      <AuthProvider>
        <GuestHeader ShowSearch />
        <Sidebar />
      </AuthProvider>
      {children}
    </div>
  )
}
