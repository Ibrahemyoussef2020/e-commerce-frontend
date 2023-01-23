import{ Fragment, useEffect, useState } from 'react'

import { fetchData} from '../../../apis'

import MainSlider from './slider'

import {Slider} from '../../../utilities'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './MainSliders.css'
const MainSliders = () => {

  const [loading,setLoading]=useState(true)
  const [data,setData] = useState([])

    useEffect(()=>{
        fetchData('Sdata',setData)
        setTimeout(()=>setLoading(false),500)
    },[])

  if(loading){
    return(
      <div className="MainSliders h-100 bg-white">
        {data.length && data?.map((d)=>( 
          <Fragment key={Math.random()}>
            <div className='Skeleton-container'>
               <Skeleton width={'100%'} height={'100%'}/>
            </div>
          </Fragment>
      ))}
      </div>
    )
  }

  return (
    <div className="MainSliders h-100 bg-white">
      <Slider dots={true} arrow={false} logo={true}>
      {data.length && data?.map(({id,img,title,desc})=>( 
          <Fragment key={id}>
            <MainSlider id={id} title={title} img={img} desc={desc} />
          </Fragment>
      ))}
      </Slider>
    </div>
  )
}

export default MainSliders