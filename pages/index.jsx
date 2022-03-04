import Head from 'next/head'
import SideBar, { Sidebar } from '../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className="flex  h-screen w-full justify-center  ">
      <Head>
        <title>My MarketPlace</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className=" w-full justify-evenly  ">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
