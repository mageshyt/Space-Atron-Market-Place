import React, { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'
import { AiOutlineBell } from 'react-icons/ai'
import ModalBox from '../Modal/ModalBox'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'
const Header = () => {
  const { currentAccount } = useContext(SpaceAtronContext)
  return (
    <div className="flex h-[100px]  w-full  select-none  items-center ">
      <div className=" flex w-full justify-center space-x-2 lg:justify-around  lg:space-x-0 ">
        <SearchBar />
        {/* Theme switch */}
        <ThemeSwitch />
        {/* Notification */}
        <Notification />
        {/* User profile */}
        <UserDetail currentAccount={currentAccount} />
      </div>
    </div>
  )
}

export default Header

const ThemeSwitch = () => {
  return (
    <div className=" hidden h-12 items-center justify-around space-x-4 rounded-xl  bg-[#151620] p-4 px-8 lg:flex ">
      {/* Dark Theme */}
      <div className="cursor-pointer rounded-full bg-[#56585e7c] p-2 text-white">
        <BsMoonFill />
      </div>
      {/* Light */}
      <div>
        <BsFillSunFill className="text-xl text-yellow-300" />
      </div>
    </div>
  )
}

const Notification = () => {
  return (
    <div className="relative hidden h-12 items-center justify-around  rounded-xl  bg-[#151620] p-4  xl:flex ">
      <AiOutlineBell className="text-xl font-bold text-white" />
      <span className="absolute top-[-12px] left-[30px] flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-xs ">
        10
      </span>
    </div>
  )
}

const UserDetail = ({ currentAccount }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className=" flex h-12 items-center justify-around space-x-2 rounded-xl bg-[#151620] py-4 px-[12px] text-white   lg:flex lg:px-[40px]">
      <Link href={'/?login=1'}>
        <div className="center space-x-2">
          {currentAccount.length > 0 ? (
            <>
              <img
                className="h-[40px] w-[40px] cursor-pointer rounded-full border-2 border-green-400 object-cover"
                src="https://avatars.githubusercontent.com/u/70838644?v=4"
                alt="profile"
              />
              <span className="hidden xl:block">Magesh</span>
            </>
          ) : (
            <>
              <BiUser
                onClick={() => setModalIsOpen(!modalIsOpen)}
                className="text-xl"
              />
              <span>Login</span>
            </>
          )}
        </div>
      </Link>
      <ModalBox />
    </div>
  )
}
