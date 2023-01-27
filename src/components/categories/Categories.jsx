import React, {useEffect, useState } from 'react'
import {fetchData} from '../../apis'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
TitleLabel,
FaveCounter,
LargCard as Card,
Slider,
Routing,
CardFooter,
SectionHeder
} from '../../utilities'


const Categories = () => {
    const [data,setData] = useState([])
  
    useEffect(()=>{
      fetchData('categories',setData)
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
          <div className='Skeleton-container col-sm-6 col-md-4  my-3 text-center bg-inhrit'>
              <Skeleton height={200} width={'100%'}/>
          </div>
        </div>
      )
    }

    return (
        <div id='Categories' className='Categories section  mt-4 ' style={{marginTop:'70PX'}}>
          <SectionHeder icon='fa-border-all' title='Categories'/>
          <Slider num={3} dots={false} arrow={true}>
          {data.length && data?.map(item =>(
                <React.Fragment key={item.id}>
                <Card>
                  <TitleLabel bg='#2196f3'>{item.title}</TitleLabel>
                  <div className='imgContainer'>
                    <img src={item.img} className='w-100 h-100 mt-4'/>
                  </div>
                </Card>
                </React.Fragment>
          ))}
          </Slider>
        </div>
      )
}

export default Categories