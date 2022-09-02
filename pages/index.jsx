import Sidebar from './Sidebar/Sidebar'
import BottomBar from './BottomBar/BottomBar'
import Head from 'next/head'
import Content from './MainBlock/Content'
import Footer from './footer'

export default function Main() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className='pageContainer'>
        <Sidebar />
        <Content />
        <BottomBar />
      </div>
      <Footer />
    </>
  )
}