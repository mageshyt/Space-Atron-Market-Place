import React from 'react'
import PreView from '../components/Mint/PreView'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'
import SelectImage from '../components/Mint/SelectImage'
import NFTDetail from '../components/Mint/NFTDetail'
const style = {
  wrapper: 'h-screen   w-full  overflow-hidden flex ',
}
const Mint = () => {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <div className="flex flex-col space-x-10  p-20 lg:flex-row">
        <PreView />
        <NFTDetail />
      </div>
      {/* Preview   */}
    </div>
  )
}

export default Mint
