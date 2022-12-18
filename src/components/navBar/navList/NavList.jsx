import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavList.css'
const NavList = () => {
  return (
    <>
        <nav className='NavList position-relative d-flex justify-content-between align-items-center'>
            <ul className='vertical-list d-none d-sm-flex justify-content-end gap-4 align-items-center w-100'>
                <li><NavLink to='/'>home</NavLink></li>
                <li><NavLink to='/pages'>pages</NavLink></li>
                <li><NavLink to='/account'>account</NavLink></li>
                <li><NavLink to='/purchases'>purchases</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default NavList