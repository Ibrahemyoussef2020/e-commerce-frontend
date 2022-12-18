import { useDispatch, useSelector } from 'react-redux'
import {closeSide} from '../../redux/slices/AsideSlice'
import { NavLink } from 'react-router-dom'

import './Aside.css'

const Aside = () => {
    const dispatch = useDispatch()
    const {open }= useSelector(state => state.aside)

  return (
    <aside className={`nav-aside transform ${open ? 'scale' : 'shrink'} d-block d-sm-none  bg-white py-4 px-1 text-uppercase position-fixed text-danger`}>
        <div className='close-side position-absolute w-100 text-end'>
            <i onClick={()=>dispatch(closeSide())} className="fa-solid fa-xmark text-danger clicked"></i>
        </div>

        <ul className="asid-ul h-100 d-flex flex-column justify-content-between align-items-center">        
            <li className='w-100 d-flex justify-content-center align-items-center clicked'>
               <NavLink to='/'>
                <i className="fa-solid fa-house"></i>
                    <span>home</span>
                </NavLink> 
            </li>
            <li className='w-100 d-flex justify-content-center align-items-center clicked'>
                <NavLink to='/pages'>
                    <i className="fa-solid fa-note-sticky"></i>
                    <span>pages</span>
                </NavLink>
            </li>
            <li className='w-100 d-flex justify-content-center align-items-center clicked'>
                <NavLink to='/account'>
                    <i className="fa-solid fa-user"></i>
                    <span>account</span>
                </NavLink>
            </li>
            <li className='w-100 d-flex justify-content-center align-items-center clicked'>
                <NavLink to='/purchases'>
                    <i className="f fa-regular fa-cart-shopping"></i>
                    <span>purshases</span>
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Aside