import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
export const SpaceAtronContext = createContext()
// ! providers
export const SpaceAtronProvider = ({ children }) => {
  // ! app status
  const [appStatus, SetAppStatus] = useState('notConnected')
  // ! current Account
  const [currentAccount, SetCurrentAccount] = useState('')
  useEffect(() => {
    checkIsWalletConnected()
  }, [currentAccount])
  // ! router
  const router = useRouter()
  // ! for checking if our wallet is connected or not
  const checkIsWalletConnected = async () => {
    if (!window.ethereum) return SetAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        // you are connected
        SetAppStatus('connected')
        SetCurrentAccount(addressArray[0]) // ! by default we will connect to first account`
        createUserAccount(addressArray[0])
      } else {
        // you are not connected
        SetAppStatus('notConnected')
      }
    } catch (error) {
      console.log(error)
    }
  }
  //! connect to wallet
  const connectToWallet = async () => {
    if (!window.ethereum) return SetAppStatus('noMetaMask')
    try {
      SetAppStatus('loading')
      const AddressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (AddressArray.length > 0) {
        SetCurrentAccount(AddressArray[0])
        SetAppStatus('connected')
      } else {
        router.push('/')
        SetAppStatus('noAccount')
      }
    } catch (err) {
      console.log(err)
      return SetAppStatus('noMetaMask')
    }
  }
  return (
    <SpaceAtronContext.Provider
      value={{ appStatus, SetAppStatus, currentAccount, connectToWallet }}
    >
      {children}
    </SpaceAtronContext.Provider>
  )
}
