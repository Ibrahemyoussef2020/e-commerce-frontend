import React, { useEffect, useState,Fragment } from 'react'
import { useDispatch } from 'react-redux'

import {filterBrand} from '../../../redux/slices/MobileSlice'

import {fetchData} from '../../../apis'

import './BrandFilter.css'


const BrandFilter = () => {
    const dispatch = useDispatch()

    const [categories,setCategories] = useState([])
    const [active,setActive] = useState('all')

    useEffect(()=>{
      fetchData('mobileFilter',setCategories)   
    },[])

    

    const chooseBrand = (title)=>{
      dispatch(filterBrand(title))
      setActive(title)
      console.log(title);
    }

    

  return (
    <aside className='BrandFilter'>
        <h6 className='text-primary text-center my-0 py-1'>
          choose Brand
        </h6>
        <ul className="mobile-ul py-2 d-flex px-0 flex-column align-items-center justify-content-between">
            <li className={`fw-bold ${active === 'all' ? 'active' : 'inActive'}`}>
              <span onClick={(title)=>chooseBrand('all')}>all Brands</span>
            </li>
            {
              categories?.map(({id,img,title},index)=> 
                <Fragment key={id}>
                  <li className={`d-flex w-100 align-items-center justify-content-start p-1 ${active === title ? 'active' : 'inActive'}  `}
                  onClick={()=>chooseBrand(title)}
                  >                
                    <div className="cat-title">
                      <img className='h-100 mx-4' src={img} alt={title} />
                    </div>
                    <div className="cat-title">
                      {title}
                    </div>
                  </li>
                </Fragment> 
              )
            }
        </ul>
    </aside>
  )
}

export default BrandFilter