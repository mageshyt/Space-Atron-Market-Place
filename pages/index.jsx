import Head from 'next/head'
import Sidebar from '../components/Header&SideBar/Sidebar'
import Header from '../components/Header&SideBar/Header'
import Banner from '../components/Banner/Banner'
import TrendingNft from '../components/NFT Session/TrendingNft'
import Widgets from '../components/Widgets/Widgets'
const Home = () => {
  return (
    <div className="flex h-screen w-full justify-center overflow-hidden  ">
      <Head>
        <title>My MarketPlace</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className=" flex w-full  ">
        <Sidebar />
        <div className="mt-10 flex w-full flex-col ">
          {/* header and feed components */}
          <Header />
          <div className="flex">
            <div className="center  w-full flex-col  lg:block lg:w-[75%]">
              <Banner />

              <TrendingNft />
            </div>
            <div className="w-[35%]">
              <Widgets />
            </div>
          </div>
        </div>
        {/* Widgets */}
      </div>
    </div>
  )
}

export default Home
