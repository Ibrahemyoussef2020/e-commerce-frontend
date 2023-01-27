import{ Fragment, useEffect, useState } from 'react'

import { fetchData} from '../../../apis'

import MainSlider from './slider'

import {Slider} from '../../../utilities'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './MainSliders.css'
const MainSliders = () => {

  const [data,setData] = useState([])

    useEffect(()=>{
        fetchData('Sdata',setData)
    },[])

    if(!data.length){
      return(
        <div className={`MainSliders h-100 row text-center bg-inhrit`} style={{justifyContent:'center'}}>
         <div className='Skeleton-container col-12 flex-1 text-center bg-inhrit' style={{height:'100%'}}>
              <Skeleton height={200} width={'100%'}/>
          </div>
          <div className='Skeleton-container col-12 flex-1 text-center bg-inhrit' style={{height:'100%'}}>
              <Skeleton height={200} width={'100%'}/>
          </div>
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