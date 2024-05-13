import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import { ReactNode } from "react"

export const metadata = {
  title: 'Soporte'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutAuth showSearch={true} showSidebar={true} showMenu={false}>{children}</LayoutAuth>
  )
}
