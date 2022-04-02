import { title } from 'process'
import React from 'react'
import { useContext } from 'react'
import { SpaceAtronContext } from '../../context/SpaceAtronContext'
import { client } from '../../lib/client'
import { contractAddress } from '../../lib/contracts'
import { pinFileToIPFS, pinJSONToIPFS } from '../../lib/pinata'
import InputComponent from './InputComponent'

const style = {
  selectImage: ' w-[110px] rounded-full bg-sky-400 p-3 px-4',
  TitleInput: 'text-xl font-extrabold text-sky-500',
}
const NFTDetail = () => {
  let metamask
  if (typeof window !== 'undefined') {
    metamask = window.ethereum
  }
  const [mintStatus, setMintStatus] = React.useState('Mint')
  const {
    setNftDescription,
    setNftTitle,
    nftDescription,
    nftTitle,
    getEthereumContract,
    price,
    setPrice,
    setBid,
    bid,
    mintImage,
    currentAccount,
    RenderImage,
  } = useContext(SpaceAtronContext)
  const mintNft = async () => {
    if (!nftTitle || !nftDescription || !mintImage) return
    setMintStatus('loading')
    const pinataMetaData = {
      name: `${nftTitle} - ${nftDescription}`,
    }

    const ipfsImageHash = await pinFileToIPFS(mintImage, pinataMetaData)
    const imageMetaData = {
      name: nftTitle,
      description: nftDescription,
      image: `ipfs://${ipfsImageHash}`,
    }
    const ipfsJsonHash = await pinJSONToIPFS(imageMetaData)

    const contract = await getEthereumContract()
    const transactionParameters = {
      to: contractAddress,
      from: currentAccount,
      data: await contract.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
    }
    try {
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })
    } catch (error) {
      console.log(error)
    }
    const nftId = `${currentAccount}-${Date.now()}`
    //! lets set the nft to sanity
    //! lets set the nft to sanity
    const nftDoc = {
      _type: 'mintNft',
      _id: nftId,
      title: nftTitle,
      description: nftDescription,
      image: ipfsImageHash,
      price: Number(price),
      timestamp: new Date(Date.now()).toISOString(),
      author: {
        _key: nftId,
        _type: 'reference',
        _ref: currentAccount,
      },
    }
    const res = await client.createIfNotExists(nftDoc)
    // ! now we will add this tweet in out user schema
    await client
      .patch(currentAccount)
      .setIfMissing({ Nfts: [] })
      .insert('after', 'Nfts[-1]', [
        {
          _key: nftId,
          _ref: nftId,
          _type: 'reference',
        },
      ])
      .commit()
    setMintStatus('finished')
  }
  return (
    <div className="mt-4 flex flex-col">
      {/* title ,description */}
      <div className="flex flex-col space-y-4">
        {/* details */}
        <div className="space-y-4">
          <span className={style.TitleInput}>Title</span>
          <InputComponent
            setNft={setNftTitle}
            setValue={nftTitle}
            placeholder="Title"
          />
        </div>
        {/* price */}
        <div className="space-y-4">
          <span className={style.TitleInput}>Price</span>
          <InputComponent
            setNft={setPrice}
            setValue_for_nft={price}
            placeholder="Price"
          />
        </div>
        {/* Minimum bid */}
        <div className="space-y-4">
          <span className={style.TitleInput}>Minimum bid</span>
          <InputComponent
            setValue_for_nft={bid}
            setNft={setBid}
            placeholder="Minimum bid"
          />
        </div>
        {/* description */}
        <div className="space-y-4">
          <span className={style.TitleInput}>Description</span>
          <div>
            <textarea
              value={nftDescription}
              onChange={(e) => setNftDescription(e.target.value)}
              className="h-full w-full rounded-xl border bg-transparent p-3  text-white outline-none "
              placeholder="Description"
              type="text"
            />
          </div>
        </div>
      </div>
      {/* submit bt */}
      <div className="center mt-4 pb-2">
        <button
          onClick={() => mintNft()}
          className=" w-[70%]  rounded-xl bg-sky-500 p-3 px-8  text-white hover:bg-sky-600"
        >
          {setMintStatus === 'loading' ? 'Loading...' : mintStatus}
        </button>
      </div>
    </div>
  )
}

export default NFTDetail
