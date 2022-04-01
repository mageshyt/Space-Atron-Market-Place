import React, { useContext } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'

const PreView = () => {
  const { userData, RenderImage } = useContext(SpaceAtronContext)
  const collection = {
    url:
      RenderImage ||
      'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
    name: userData?.name,
    price: '0.05',
    profileImage: userData?.profileImage,
    mint: true,
  }
  return (
    <div className=" flex h-[440px] w-[390px] flex-col items-center justify-center  rounded-xl bg-[#121212] ">
      {/* image preview */}
      <UserDetail otherProps={collection} />

      {/* name and profile image */}
    </div>
  )
}

export default PreView

const UserDetail = ({ otherProps: { url, name, profileImage } }) => (
  <div className=" h-[400px] w-[370px]  rounded-xl  ">
    <img
      className=" h-[300px] w-full  cursor-pointer rounded-xl object-cover"
      src={
        url ||
        'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
      }
    />
    {/* minter details */}
    <div className="m-4 flex justify-between">
      {/* Profile img and name */}
      <div className="center space-x-4 font-bold text-white">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={profileImage}
        />
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-light">created by</span>
          <span className="font-sm">{name}</span>
        </div>
      </div>
      {/* price */}
      <div className="flex flex-col space-y-2">
        <span className="text-sm text-white">current bid</span>
        {/* Bir price */}
        <div className="flex cursor-pointer items-center space-x-2 rounded-xl bg-[#2b3f3c] p-3 text-[#73BC7F] hover:bg-[#334340]">
          <FaEthereum className="text-white" />
          <span className="text-white">0.05 ETH</span>
        </div>
      </div>
    </div>
  </div>
)
