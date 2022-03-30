import React from 'react'

const TopCreators = ({ creator: { profileImg, name, AtUser } }) => {
  return (
    <div className="m-3">
      {/* Profile image */}
      <div className="center justify-between">
        <div className=" flex  items-center space-x-2">
          <img
            src={profileImg}
            alt="profile"
            className="nftCreator h-10 w-10 rounded-full "
          />
          {/* Name */}
          <div className="flex flex-col text-clip  text-sm text-gray-500">
            <span className="text-md">{name}</span>
            <span className="text-white">{AtUser}</span>
          </div>
        </div>
        {/* Follow btn */}
        <div className="cursor-pointer rounded-full bg-white p-2 text-sm">
          Follow
        </div>
      </div>
    </div>
  )
}

export default TopCreators
