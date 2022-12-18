import {NavList} from '../index'
import {IconsCon as IconsContainer} from '../index'

import './NavBottom.css'

const NavBottom = () => {

  return (
    <div className='NavBottom container-fluid py-2 mx-0 my-2 d-flex justify-content-between'>

        <div className='category-con d-flex px-2'>
            <section>
                <i className="f fa-solid fa-border-all"></i>
            </section>
            <section>
                <span className='text-lowercase'>
                    categories
                </span>
            </section>
            <section>
                <i className="f fa-thin fa-caret-down"></i>
            </section>
        </div>

        
        <IconsContainer d='flex' sm='none'/>
        

        <div className='nav-con d-none d-sm-flex justify-content-end'>
            <NavList />
        </div>
</div>
)}

export default NavBottom