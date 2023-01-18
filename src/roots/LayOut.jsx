import {useState,useEffect} from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
import Aside from './navAside'

function LayOut() {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>setLoading(false),7000)
  },[loading])

  const OutPut = loading ? <div className='full-center'>
  <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
  </div> : <>
    <Header />
        <Aside/>
        <Outlet />
    <Footer />
    </>
  
  return OutPut
}

export default LayOut