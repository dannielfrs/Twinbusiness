'use client'

import Wallet from '@/components/organisms/Authenticated/Wallet/Wallet'
import { WalletProvider } from '@/context/authenticated/wallet/wallet/WalletProvider'
import { WalletDocumentsProvider } from '@/context/authenticated/wallet/walletDocuments'

export default function Page () {
  return (
    <WalletDocumentsProvider>
      <WalletProvider>
        <Wallet />
      </WalletProvider>
    </WalletDocumentsProvider>
  )
}
