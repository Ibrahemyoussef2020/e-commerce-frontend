import { useEffect, useState,Fragment } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {fetchData} from '../../../apis'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './StaticSide.css'

const StaticSide = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
      fetchData('asideData',setCategories)
    },[])

    if(!categories.length){
      return (
        <aside className='StaticSide'>
        <ul className="static-ul h-100 py-2 d-flex px-0 flex-column align-items-center justify-content-between">
          <li>
            <div className='Skeleton-container'>
              <Skeleton width={'100%'} height={'100%'}/>
            </div>
          </li>  
          <li>
            <div className='Skeleton-container'>
              <Skeleton width={'100%'} height={'100%'}/>
            </div>
          </li>
          <li>
            <div className='Skeleton-container'>
              <Skeleton width={'100%'} height={'100%'}/>
            </div>
          </li>
          <li>
            <div className='Skeleton-container'>
              <Skeleton width={'100%'} height={'100%'}/>
            </div>
          </li>
          <li>
            <div className='Skeleton-container'>
              <Skeleton width={'100%'} height={'100%'}/>
            </div>
          </li>
        </ul>
        </aside>
      )
    }
    
  return (
    <aside className='StaticSide'>
        <ul className="static-ul h-100 py-2 d-flex px-0 flex-column align-items-center justify-content-between">
            {
              categories?.map(({id,img,title},index)=> 

              <Fragment key={id + index}>                 
                    <li className='d-flex w-100 align-items-center justify-content-start p-1'>
                        <div className="cat-title">
                          <img className='h-100 mx-4' src={img} alt={title} />
                        </div>
                        <div className="cat-title">
                        <Link to={title} className={`${title.startsWith('#') ? 'clicked' : 'unClicked'}`}>
                        {`${title.startsWith('#') ? title.slice(1,-1) : title}`}
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