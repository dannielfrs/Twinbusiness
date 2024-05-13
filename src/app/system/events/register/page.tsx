'use client'

import { MultiForm } from '@/components/organisms/Events/Packages/Forms/MultiForm'
import { CompanyStepProvider } from '@/context/authenticated/events/register/companyStep/CompanyStepProvider'
import { EventStepProvider } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepProvider'

// export const metadata = {
//   title: 'Eventos'
// }

export default function Page () {
  return (
    <CompanyStepProvider>
      <EventStepProvider>
        <MultiForm />
      </EventStepProvider>
    </CompanyStepProvider>
  )
}
