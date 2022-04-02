import React from 'react'

const InputComponent = ({ placeholder, setNft, setValue_for_nft }) => {
  return (
    <div className="w-full rounded-xl  border ">
      <input
        value={setValue_for_nft}
        onChange={(e) => setNft(e.target.value)}
        className=" h-full w-full bg-transparent p-3  text-white outline-none "
        placeholder={placeholder}
        type="text"
      />
    </div>
  )
}

export default InputComponent
