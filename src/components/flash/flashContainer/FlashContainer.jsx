import{ Fragment, useEffect, useState } from 'react'

import {fetchData} from '../../../apis'

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