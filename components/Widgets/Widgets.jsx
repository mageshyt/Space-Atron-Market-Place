import React from 'react'
import BalanceChart from './BalanceChart.js'
import { creators } from '../../assets/data'
import TopCreators from './TopCreators'
const Widgets = () => {
  return (
    <div
      className=" mt-[30px] mr-1 hidden  h-full
     flex-col items-center space-y-4 overflow-y-scroll  lg:flex"
    >
      {/* Balance and chart  */}
      <div className="h-[300px] w-[350px] rounded-xl bg-[#151620] p-4 ">
        <div className="center flex-col space-y-4 ">
          <span className="w-full text-center text-2xl text-gray-500">
            Balance
          </span>
          {/* amount */}
          <span className="text-md text-white">$ 100,424.00</span>
        </div>
        <BalanceChart />
      </div>
      {/* Top Creators */}
      <div className="flex h-[400px] w-[350px] flex-col  rounded-2xl bg-[#151620] p-4">
        <div className=" flex items-center justify-between">
          <span className="  text-center text-2xl text-gray-100">
            Top Creators
          </span>
          <span className={'text-md cursor-pointer text-green-400'}>
            see all
          </span>
        </div>
        {/* Collection */}
        <div className=" overflow-y-scroll">
          {creators.map((creator, index) => {
            return <TopCreators creator={creator} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Widgets
