import React from 'react'
import { NFtCategory, NftCollectionsData } from '../../assets/data'
import NftCollection from './NftCollection'
const styles = {
  headerContainer: 'flex justify-between items-center',
  title: 'text-2xl font-bold text-gray-50',
  seeAll: 'text-md text-green-500',
  category:
    'flex cursor-pointer justify-between space-x-4 select-none overflow-x-scroll mt-10 items-center',
  item: 'bg-[#151620] py-2 flex rounded-md items-center text-sm space-x-2 px-4 text-white',
  collections:
    'grid  h-screen pb-[100px] grid-cols-1 place-items-center  lg:grid-cols-2 gap-10 overflow-y-scroll  mt-10',
}
const TrendingNft = () => {
  return (
    <div className=" mt-10 w-full overflow-y-scroll p-4 ">
      {/* Header */}
      <div className={styles.headerContainer}>
        <span className={styles.title}>Trending NFTs</span>
        <span className={styles.seeAll}>see all</span>
      </div>
      {/* Category */}
      <NftCategorySession NFtCategory={NFtCategory} />
      {/* COllection */}
      <div className={styles.collections}>
        {NftCollectionsData.map((collection, index) => {
          return <NftCollection key={index} collection={collection} />
        })}
      </div>
    </div>
  )
}

export default TrendingNft
// 1C1628

const NftCategorySession = ({ NFtCategory }) => {
  return (
    <div className={styles.category}>
      {NFtCategory.map((category, index) => {
        return (
          <div key={index} className={styles.item}>
            <span className=" center h-8 w-8 rounded-full bg-[#5b566368] p-2">
              {category.emoji}
            </span>
            <span>{category.name}</span>
          </div>
        )
      })}
    </div>
  )
}
