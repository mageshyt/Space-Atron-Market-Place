import React from 'react'
import PreView from '../components/Mint/PreView'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'
import SelectImage from '../components/Mint/SelectImage'
import NFTDetail from '../components/Mint/NFTDetail'
const style = {
  wrapper: 'h-screen cus    w-full  overflow-y-scroll flex ',
  selectImage: ' w-[110px] rounded-full bg-sky-400 p-3 px-4',
}
const Mint = () => {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <div className="flex w-full flex-col space-x-10  p-20 lg:flex-row">
        <div className="flex flex-col items-center space-y-4">
          <PreView />
          <div className={style.selectImage}>
            <SelectImage />
          </div>
        </div>
        <div className="flex-1">
          <NFTDetail />
        </div>
      </div>
      {/* Preview   */}
    </div>
  )
}

export default Mint
