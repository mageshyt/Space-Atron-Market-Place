import Head from 'next/head'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import TrendingNft from '../components/NFT Session/TrendingNft'
const Home = () => {
  return (
    <div className="flex h-screen w-full justify-center overflow-hidden  ">
      <Head>
        <title>My MarketPlace</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className=" flex w-full  ">
        <Sidebar />
        <div className="flex w-full flex-col">
          <div className="w-full">
            <Header />
            <div className="center  w-full flex-col  lg:block lg:w-[65%]">
              <Banner />

              <TrendingNft />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
