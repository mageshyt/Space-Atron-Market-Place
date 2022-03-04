import Head from 'next/head'
import SideBar, { Sidebar } from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
const Home = () => {
  return (
    <div className="flex  h-screen w-full justify-center  ">
      <Head>
        <title>My MarketPlace</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className=" flex w-full  ">
        <Sidebar />

        <Header />
      </div>
    </div>
  )
}

export default Home
