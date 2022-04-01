import React, { useContext } from 'react'
import { AiFillBank } from 'react-icons/ai'
import { sideBarData, userOptions } from '../../assets/data'
import SideBarOptions from './SideBarOptions'
import UserOption from './UserOption'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'

const styles = {
  wrapper:
    'bg-[#151620] w-[320px] md:flex hidden   md:items-center flex-col h-full',
  logoInfo:
    'flex ml-3 items-center justify-around mt-10 h-[70px] mb-10  bg-[#151620]',
  logo: 'text-3xl font-bold text-sky-400',
}
export const Sidebar = () => {
  //! log out
  const {
    disconnectFromWallet,
    userData: { walletAddress },
    active,setActive
  } = useContext(SpaceAtronContext)
  // !for active class
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoInfo}>
        <AiFillBank className={styles.logo} />
        <h1 className={'header_title text-2xl font-bold text-white'}>
          Space Arton
        </h1>
      </div>
      {/* sidebar options */}
      {sideBarData.map((item, index) => {
        return (
          <SideBarOptions
            key={index}
            Icon2={item.icon2}
            Icon={item.icon}
            active={active}
            setActive={setActive}
            name={item.name}
          />
        )
      })}
      <div className="w-[80%] border-[1px] border-gray-600" />
      {/* user Option */}
      {userOptions.map((item, index) => {
        return <UserOption key={index} name={item.name} Icon={item.icon} />
      })}
      {/* Log out */}
      {/* wallet*/}
      <div>
        {walletAddress && (
          <span className="text-xl text-green-400 ">
            @ {walletAddress?.slice(0, 4)}...{walletAddress?.slice(38)}
          </span>
        )}
      </div>
      <div
        onClick={() => disconnectFromWallet()}
        className="mt-auto mb-4 flex cursor-pointer items-center space-x-2"
      >
        {walletAddress && (
          <>
            <RiLogoutCircleLine className="text-2xl text-red-500" />
            <span className="text-gray-500">Log out</span>
          </>
        )}
      </div>
    </div>
  )
}
