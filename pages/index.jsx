import Head from 'next/head'
import SideBar, { Sidebar } from '../components/Sidebar'

const Home = () => {
  return (
    <div className="flex  h-screen w-full justify-center  bg-[#212030]">
      <Head>
        <title>My MarketPlace</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className=" w-full justify-evenly   lg:w-[80%] lg:max-w-[1900px] lg:justify-between">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
