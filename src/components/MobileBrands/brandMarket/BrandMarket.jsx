import{useEffect, useState,} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {addProduct} from '../../../redux/slices/ShoppingSlice'
import {toggleFavorite} from '../../../redux/slices/FavoriteSlice'
import { fetchData} from '../../../apis'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  FaveCounter,
  LargCard as Card,
  Routing
  } from '../../../utilities/index'

import './BrandMarket.css'

const BrandMarket = () => {
  const {brand} = useSelector(state => state.mobile)

  const dispatch = useDispatch()

  const [loading,setLoading]= useState(true)
  const [data,setData] = useState([])

    const toggle_favorite = (e,{id,name,brand,img})=>{
      if(e.target.classList.contains('fa-heart')){
          dispatch(toggleFavorite({
              id, name,brand,img
          }))
      }
    }

    useEffect(()=>{
        fetchData('mobileList',setData)
        setTimeout(()=>setLoading(false),500)
    },[])
    
  return (
    <div id='Mobile' className="BrandMarket h-100 ">
        <div className='Mobile'>
          <div className='Mobile-container row'>
          {data?.length && data
            ?.filter(item => item.brand.includes(brand))
            ?.map((item) =>{
            const {id,name,brand,img,price} = item

           return <div className='Mobile-slice col col-sm-4 my-1' key={item.id}>
              <Card loading={loading}>
              <div 
                onClick={(e)=> toggle_favorite(e,{id,name,brand,img})}
                className='position-absolute'
                style={{
                  top:"0",
                  right:"7px",
                  maxWidth:"20px",
                }}
              >
                <FaveCounter id={id}/>
            </div> 
                <div className='imgContainer'>
                  <img src={img} className='w-100 h-100'/>
                </div>
                <Routing/>             
              <div>

              </div>
              <footer className='d-flex justify-content-between py-2 text-danger'>
                <div className='price clicked'>{price}</div>
                <div onClick={()=>dispatch(addProduct({
                        id,name,brand,img,price,
                        qty:1, total:price
                    }))}>
                    <i className="fa-solid fa-plus clicked"></i>
                </div>              
              </footer>
              </Card>
            </div>
            })}
          </div>
      </div>
    </div>
  )
}

export default BrandMarket