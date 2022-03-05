import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const styles = {
  wrapper: `relative m-4 h-[320px] w-[300px] select-none  rounded-2xl bg-[#151620]`,
  NftImage: 'h-[200px] w-full rounded-t-2xl ',
  like: 'cursor-pointer text-xl text-white',
  ActiveLike: 'cursor-pointer text-xl text-red-500',
}
const NftCollection = ({ collection: { url, name, price, owner } }) => {
  // ! for handle like
  const [liked, setLiked] = React.useState(false)
  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.NftImage} src={url} alt={name} />
      </div>
      {/* name */}
      <div className="p-2">
        <span className="text-xl text-white">{name}</span>
      </div>
      {/* Heart Icons */}
      <div className="absolute top-1 flex w-full items-center justify-between p-2">
        <LikeComponent liked={liked} setLiked={setLiked} />
        {/* Nft left */}
        <div className=" center h-8 w-12 rounded-2xl bg-[#0b1a2944] ">
          <span className="text-sm text-white">{14}</span>
        </div>
      </div>
      {/* Owner and price */}
      <div className=" flex items-center justify-between p-4">
        <img
          src={owner}
          className="h-8 w-8 rounded-full object-contain"
          alt=""
        />
        <div className="flex cursor-pointer items-center space-x-2 rounded-xl bg-[#2b3f3c] p-3 text-[#73BC7F] hover:bg-[#334340]">
          <FaEthereum className=" " />
          <span>{price} ETH</span>
        </div>
      </div>
    </div>
  )
}

export default NftCollection

function LikeComponent({ liked, setLiked }) {
  return (
    <div className="center h-8 w-8 rounded-full bg-[#13151543] ">
      {liked ? (
        <AiFillHeart
          onClick={() => setLiked(!liked)}
          className={styles.ActiveLike}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => setLiked(!liked)}
          className={styles.like}
        />
      )}
    </div>
  )
}
