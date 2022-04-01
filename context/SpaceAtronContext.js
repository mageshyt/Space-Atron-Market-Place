import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
export const SpaceAtronContext = createContext()
// ! providers
export const SpaceAtronProvider = ({ children }) => {
  const connectWithMetamask = useMetamask()
  const currentAccount = useAddress()
  const disconnect = useDisconnect()
  // ! app status
  const [appStatus, SetAppStatus] = useState('notConnected')
  // ! router
  const router = useRouter()
  //! connect to wallet
  const connectToWallet = async () => {
    if (!window.ethereum) return SetAppStatus('noMetaMask')
    try {
      SetAppStatus('loading')
      await connectWithMetamask()
      SetAppStatus('connected')
    } catch (err) {
      console.log(err)
      return SetAppStatus('noMetaMask')
    }
  }
  //! disconnect from wallet
  const disconnectFromWallet = async () => {
    try {
      disconnect()
      SetAppStatus('notConnected')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SpaceAtronContext.Provider
      value={{
        appStatus,
        SetAppStatus,
        disconnectFromWallet,
        currentAccount,
        connectToWallet,
      }}
    >
      {children}
    </SpaceAtronContext.Provider>
  )
}
