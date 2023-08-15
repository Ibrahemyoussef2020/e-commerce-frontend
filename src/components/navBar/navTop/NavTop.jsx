import { useDispatch } from 'react-redux'
import {toggleSide} from '../../../redux/slices/AsideSlice'
import './NavTop.css'


import {addProduct} from '../../../redux/slices/ShoppingSlice'

import {IconsCon as IconsContainer} from '../index'

const NavTop = () => {
  window.addEventListener('scroll',function(){
    const NavTop = this.document.querySelector('.NavTop-con-sticky');
    NavTop.classList.toggle('sticky',this.window.scrollY > 100)
  })

  const dispatch = useDispatch()
  
  return (
    <section className='NavTop-con-sticky  my-3 px-1'>
      <div className='row w-100 justify-content-around align-items-center'>
        
        <div className='logo col col-2'>
          <h1 className='logo__heading'>Book</h1>
        </div>

        <div className='search col col-6 px-2 position-relative'>
            <input type='search' className='position-absolute py-1'/>
            <i className="search-icon f fa-solid fa-magnifying-glass position-absolute"></i>
        </div>

        <div className='icons col col-0 col-sm-2 d-none d-sm-flex'>
          <IconsContainer d='none' sm='flex'/>
        </div>

        <div className='side-list col col-1 ml-1  d-block  d-sm-none text-right'>
            <button onClick={()=>dispatch(toggleSide())} className='f'>
                &#xf0ca;
            </button>
        </div>
       
       </div> 
    </section>
  )}

export default NavTop