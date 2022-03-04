import React from 'react'
import { FaEthereum } from 'react-icons/fa'
const NftCollection = ({ collection: { url, name, price, owner } }) => {
  return (
    <div className="m-4 h-[320px] w-[300px]  rounded-2xl bg-[#151620]">
      <div>
        <img className="h-[200px] w-full rounded-t-2xl " src={url} alt={name} />
      </div>
      {/* name */}
      <div className="p-2">
        <span className="  text-xl text-white">{name}</span>
      </div>
      {/* Owner and price */}
      <div className="flex items-center justify-between p-4">
        <img
          src={owner}
          className="h-8 w-8 rounded-full object-contain"
          alt=""
        />
        <div className="flex items-center space-x-2 rounded-xl bg-[#2b3f3c] p-3 text-[#73BC7F]">
          <FaEthereum className=" " />
          <span>{price}</span>
        </div>
      </div>
    </div>
  )
}

export default NftCollection
