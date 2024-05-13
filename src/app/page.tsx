import HomePage from '@/components/organisms/Home/HomePage'
import { getTokenGuestService } from '@/services/axios/passport/tokenGuest'

export default async function Page () {
  const tokenGuest = await getTokenGuestService()

  return (
    <main>
      <HomePage tokenGuest={tokenGuest} />
    </main>
  )
}
