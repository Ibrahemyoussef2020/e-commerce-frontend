import{ Fragment, useEffect, useState } from 'react'
import {fetchData} from '../../apis'
import {
TitleLabel,
FaveCounter,
LargCard as Card,
Routing,
CardFooter,
SectionHeder
} from '../../utilities'


import './Arrivals.css'

const Arrivals = () => {
    const [data,setData] = useState([])
  
    useEffect(()=>{
      fetchData('arrivals',setData)
    },[])

    const imgStyle ={
        height:'40px',
        width:'40px'
    }

    return (
        <div id='Arrivals' className='Arrivals section row mb-4' style={{marginTop:'70PX'}}>
          
          <header className='d-flex justify-content-between px-1'>
            <div>
                <img style={imgStyle} src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                <span>New Arrivals</span>
            </div>
            <div>
                <span className='view-all closed'>view all <i className="fa-solid fa-caret-right"></i></span>
            </div>    
          </header>
          {data.length && data?.map(item =>(
              <div className='col' key={item.id}>
                <Card>
                  <div className='imgContainer'>
                    <img src={item.img} className='w-100 h-100 mt-4'/>
                  </div>
                </Card>
              </div>
          ))}
      </div>
      )
}

export default Arrivals