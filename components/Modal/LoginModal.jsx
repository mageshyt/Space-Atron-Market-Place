import Image from 'next/image'
import React, { useContext } from 'react'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'
const style = {
  description: `text-md text-gray-500 font-medium`,
  blue_word: `text-blue-500 cursor-pointer`,
  icon: `h-[80px] mt-3 w-[80px]`,
  name: `text-md text-gray-100  font-medium`,
  iconContainer: `flex hover:bg-[#30333989] h-full   cursor-pointer rounded-lg flex-col items-center justify-between `,
  popular: `text-sm text-gray-500 font-medium`,
  wallet: 'border-[0.1px]  border-[#424242be] ',
}
const LoginModal = () => {
  const { connectToWallet, currentAccount, appStatus } =
    useContext(SpaceAtronContext)
  console.log('connectToWallet 👉', currentAccount, appStatus)
  return (
    <div className="h-[350px] w-[400px] rounded-lg bg-[#0c0b0a] lg:h-[350px]  lg:w-[600px]">
      <div className=" grid h-full w-full grid-cols-2 grid-rows-2">
        <div
          onClick={() => connectToWallet()}
          className={
            appStatus === 'connected'
              ? `${style.wallet}`
              : 'border-[0.1px] border-[#424242be] '
          }
        >
          <Wallet
            appStatus={appStatus}
            name="MetaMask"
            img_url="https://opensea.io/static/images/logos/metamask-alternative.png"
            popular={true}
          />
        </div>
        <div className={style.wallet}>
          <Wallet
            name="Coinbase wallet "
            img_url="https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png"
            popular={false}
          />
        </div>
        <div className={style.wallet}>
          <Wallet
            name="WalletConnect"
            img_url="https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png"
            popular={false}
          />
        </div>
        <div className={style.wallet}>
          {/* Fortmatic */}
          <Wallet
            img_url="https://static.opensea.io/logos/fortmatic-alternative.png"
            name="Fortmatic"
          />
        </div>
      </div>
    </div>
  )
}
const Wallet = ({ name, img_url, popular, appStatus }) => (
  <div
    className={
      popular ? `${style.iconContainer}` : `${style.iconContainer}`
      // : `${style.iconContainer} cursor-not-allowed`
    }
  >
    <div className="flex flex-col items-center space-y-3 ">
      <img className={style.icon} src={img_url} alt="" />
      <p className={`${style.name}`}>{name}</p>
    </div>

    {popular ? (
      <p
        className={
          appStatus === 'connected'
            ? `${style.popular} text-green-400`
            : `${style.popular}`
        }
      >
        {appStatus === 'connected' ? `Connected` : `popular`}
      </p>
    ) : null}
  </div>
)

export default LoginModal
