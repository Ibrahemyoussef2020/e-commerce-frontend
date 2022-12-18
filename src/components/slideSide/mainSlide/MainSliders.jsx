import{ Fragment, useEffect, useState } from 'react'

import { fetchData} from '../../../apis'

import MainSlider from './slider'

import {Slider} from '../../../utilities'

import './MainSliders.css'
const MainSliders = () => {

  const [data,setData] = useState([])

    useEffect(()=>{
        fetchData('Sdata',setData)
    },[])

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