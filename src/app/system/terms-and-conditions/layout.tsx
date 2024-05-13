import { LayoutAuth } from "@/components/layouts/LayoutAuth/LayoutAuth"
import { ReactNode } from "react"

export const metadata = {
  title: 'Términos'
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutAuth showSearch={false} showSidebar={true} showMenu={false}>{children}</LayoutAuth>
  )
}
