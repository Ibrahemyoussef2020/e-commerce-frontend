import{ Fragment, useEffect, useState } from 'react'
import {fetchData} from '../../apis'
import {
TitleLabel,
LargCard as Card,
Slider,
Routing,
CardFooter,
SectionHeder
} from '../../utilities'

const Discounts = () => {
    const [loading,setLoading]= useState(true)
    const [data,setData] = useState([])
  
    useEffect(()=>{
      fetchData('discount',setData)
      setTimeout(()=>setLoading(false),500)
    },[])


    return (
        <div id='Discounts' className='Discounts section' style={{marginTop:'70PX'}}>
          <SectionHeder icon='fa-border-all' title='Discounts'/>
          <Slider num={3} dots={false} arrow={false}>
          {data.length && data?.map(item =>(
                <div key={item.id} className='discount-slice'>
                    <Card loading={loading}>
                    <div className='imgContainer'
                    style={{
                      backgroundImage:`url(${item.img})`,
                      backgroundSize:'100% 125%',
                      backgroundClip:'border-box', 
                      backgroundPosition:'50% 50%',
                      height:'150px'  
                    }}
                    >
                        
                    </div>
                    <div className='textContainer h-30'>
                        <span className='fw-bold mx-1'>{item.name}</span>
                        <span className='fz-6 mx-2'>{item.price}$</span>
                    </div>
                    </Card>
                </div>
          ))}
          </Slider>
        </div>
      )
}

export default Discounts