'use client'

import Packages from '@/components/organisms/Authenticated/Packages/Packages'
import { CompanyStepProvider } from '@/context/authenticated/events/register/companyStep/CompanyStepProvider'
import { WebEventProvider } from '@/context/authenticated/events/webEvent'
import { PackagesProvider } from '@/context/authenticated/home/packages'

export default function Page () {
  return (
    <CompanyStepProvider>
      <WebEventProvider>
        <PackagesProvider>
          <Packages />
        </PackagesProvider>
      </WebEventProvider>
    </CompanyStepProvider>
  )
}
