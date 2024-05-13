'use client'

import EventControlPanel from '@/components/organisms/Authenticated/Profile/EventControlPanel/EventControlPanel'
import { EventControlPanelProvider } from '@/context/authenticated/profile/company/eventControlPanel/EventControlPanelProvider'

// export const metadata = { // No disponible con use client
//   title: 'Perfil'
// }

export default function Page () {
  return (
    <EventControlPanelProvider>
      <EventControlPanel />
    </EventControlPanelProvider>
  )
}
