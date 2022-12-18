import { useEffect, useState,Fragment } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {fetchData} from '../../../apis'

import './StaticSide.css'

const StaticSide = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
      fetchData('asideData',setCategories)
    },[])
    
  return (
    <aside className='StaticSide'>
        <ul className="static-ul h-100 py-2 d-flex px-0 flex-column align-items-center justify-content-between">
            {
              categories?.map(({id,img,title})=> 

              <Fragment key={id}>                 
                    <li className='d-flex w-100 align-items-center justify-content-start p-1'>
                        <div className="cat-title">
                          <img className='h-100 mx-4' src={img} alt={title} />
                        </div>
                        <div className="cat-title">
                        <Link to={title} className={`${title.startsWith('#') ? 'clicked' : 'unClicked'}`}>
                          {title}
                        </Link>  
                        </div>
                    </li>            
                </Fragment> 
              )
            }
        </ul>
    </aside>
  )
}

export default StaticSide