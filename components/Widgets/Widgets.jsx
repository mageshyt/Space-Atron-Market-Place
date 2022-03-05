import React from 'react'
import BalanceChart from './BalanceChart.js'
import { creators } from '../../assets/data'
import TopCreators from './TopCreators'
const Widgets = () => {
  return (
    <div className=" mt-[30px] flex h-full flex-col items-center space-y-4">
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
      <div className="flex h-[400px] w-[350px] flex-col space-y-3 overflow-y-scroll rounded-2xl bg-[#151620] p-4">
        {creators.map((creator, index) => {
          return <TopCreators creator={creator} key={index} />
        })}
      </div>
    </div>
  )
}

export default Widgets
