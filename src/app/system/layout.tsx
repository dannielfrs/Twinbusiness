'use client'

import { HomeProvider } from "@/context/authenticated/home"
import { ReactNode } from "react"

export default function Layout ({ children }: { children: ReactNode }) {
  return (
    <HomeProvider>{children}</HomeProvider>
  )
}
