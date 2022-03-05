import React from 'react'

const TopCreators = ({ creator: { profileImg, name } }) => {
  return (
    <div>
      
      <div>

      <img
        src={profileImg}
        alt="profile"
        className="nftCreator h-10 w-10 rounded-full border-[1px]"
      />
      </div>
    </div>
  )
}

export default TopCreators
