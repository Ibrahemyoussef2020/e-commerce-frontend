import{ Fragment, useEffect, useState } from 'react'
import {fetchData} from '../../../apis'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
Slider,
SectionHeder
} from '../../../utilities/index'

import FlashItem from '../flashItem'

import './FlashContainer.css'

const FlashContainer = () => {
  const [data,setData] = useState([])
  
  useEffect(()=>{
    fetchData('flashData',setData)
  },[])

  if(!data.length){
    return(
      <div className={`row text-center bg-inhrit`} style={{overflowX:'hidden'}}>
       <div className='Skeleton-container col-sm-6 col-md-4   my-3 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container col-sm-6 col-md-4   my-3 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container col-sm-6 col-md-4  my-3 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container col-sm-6 col-md-4  my-3 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container col-sm-6 col-md-4  my-3 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
      </div>
    )
}

  return (
    <div id='Flash' className='Flash section row'>
      <SectionHeder icon='fa-bolt' title='Flash Deals' v='empty'/>
      <Slider num={4} dots={false} arrow={true}>
      
      {data.length && data?.map(item =>(
          <Fragment key={item.id}>   
            <FlashItem id={item.id}
              name={item.name}
              brand={item.brand}
              img={item.img}
              price={item.price}
              qty={item.qty}
              total={item.total}
              discount={item.discount} 
            />
          </Fragment>
      ))}
      </Slider>
    </div>
  )
}

export default FlashContainer