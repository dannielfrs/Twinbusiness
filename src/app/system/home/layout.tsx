import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import { ReactNode } from "react"

export const metadata = {
  title: 'Inicio'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutAuth showSearch={false} showSidebar={false}>{children}</LayoutAuth>
  )
}
