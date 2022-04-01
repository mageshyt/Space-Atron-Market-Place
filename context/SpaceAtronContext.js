import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { client } from '../lib/client'
import { fetchUserDetails } from '../lib/UserDetails'
export const SpaceAtronContext = createContext()
// ! providers
export const SpaceAtronProvider = ({ children }) => {
  const connectWithMetamask = useMetamask()
  const currentAccount = useAddress()
  const disconnect = useDisconnect()
  // ! app status
  const [appStatus, SetAppStatus] = useState('notConnected')
  //! user Data
  const [userData, setUserData] = useState({})
  //! render image
  const [RenderImage, setRenderImage] = useState(null)
  //! Active
  const [active, setActive] = useState('Dashboard')
  useEffect(() => {
    if (currentAccount) {
      createAccount(useAddress)
    }
  }, [currentAccount])
  useEffect(async () => {
    if (currentAccount) {
      const res = await fetchUserDetails(currentAccount)
      setUserData({
        name: res?.name,
        profileImage: res?.profileImage,
        walletAddress: res?.walletAddress,
      })
    }
  }, [currentAccount])
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
  //! Create Account in sanity
  const createAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return SetAppStatus('noMetaMask')
    try {
      const name = faker.name.findName()
      const img = faker.image.avatar()
      // ! create user doc
      const userDoc = {
        _type: 'users',
        _id: userWalletAddress,
        name: name,
        profileImage: img,
        walletAddress: userWalletAddress,
      }
      await client.createIfNotExists(userDoc) //! if the user not exist in the database, create it
    } catch (err) {
      router.push('/')
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
        userData,
        RenderImage,
        setRenderImage,
        active,
        setActive,
      }}
    >
      {children}
    </SpaceAtronContext.Provider>
  )
}
