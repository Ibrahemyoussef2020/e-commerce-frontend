import HeadBar from "../../components/headBar"
import {NavTop}  from "../../components/navBar"
import {NavBottom } from "../../components/navBar"

import './Header.css'
const Header = () => {
  return (
    <section className='Header text-capitalize bg-white'>
        <HeadBar/>
        <NavTop />
        <NavBottom />
    </section>
  )
}

export default Header