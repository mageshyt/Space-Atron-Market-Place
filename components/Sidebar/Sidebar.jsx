import React from 'react'
import { AiFillBank } from 'react-icons/ai'
import { sideBarData, userOptions } from '../../assets/data'
import SideBarOptions from './SideBarOptions'
import UserOption from './UserOption'
import { RiLogoutCircleLine } from 'react-icons/ri'
const styles = {
  wrapper: 'bg-[#151620] w-[320px] flex  items-center flex-col h-full',
  logoInfo:
    'flex ml-3 items-center justify-around mt-10 h-[70px] mb-10  bg-[#151620]',
  logo: 'text-3xl font-bold text-sky-400',
}
export const Sidebar = () => {
  // !for active class
  const [active, setActive] = React.useState('Dashboard')
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
      <div className="mt-auto mb-4 flex cursor-pointer items-center space-x-2">
        <RiLogoutCircleLine className="text-2xl text-red-500" />
        <span className="text-gray-500">Log out</span>
      </div>
    </div>
  )
}
