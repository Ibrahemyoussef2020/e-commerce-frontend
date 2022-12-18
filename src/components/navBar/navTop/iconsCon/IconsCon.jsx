import { NavLink } from 'react-router-dom'

import './IconsCon.css'
import {useSelector} from 'react-redux'


const IconsCon = ({d,sm}) => {
  
  const {products} = useSelector(state => state.shopping)

  return (
    <div className={`prof-car w-100 d-${d} d-sm-${sm} justify-content-between `}>   
    
    <div className='prof position-relative gray-circle d-flex justify-content-center align-items-center'>
      <NavLink to='/account'>
        <i className="f fa-solid fa-user"></i>
        <i className='f position-absolute fa-solid fa-heart text-danger'></i>
      </NavLink>
    </div>

    <div className='gray-circle position-relative d-flex justify-content-center align-items-center'>
      <NavLink to='/purchases'>
        <i className="f fa-regular fa-cart-shopping"></i>
      </NavLink>
      <span className='red-circle d-flex justify-content-center align-items-center'>{products.length || 0}</span>
    </div>

  </div>
  )
}

export default IconsCon