import { useDispatch,useSelector } from 'react-redux'
import { toggleFavorite } from '../../../redux/slices/FavoriteSlice'
import {addProduct} from '../../../redux/slices/ShoppingSlice'
import {
TitleLabel,
FaveCounter,
LargCard as Card,
Routing
} from '../../../utilities'


const FlashItem = ({loading,id,name,brand,img,price,qty,total,discount}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(state => state.favorite)

    const toggle_favorite = (e,{id,name,brand,img})=>{
        if(e.target.classList.contains('fa-heart')){
            dispatch(toggleFavorite({
                id, name,brand,img
            }))
        }
    }




return (
    <div>
        <Card loading={loading}>
            <TitleLabel>{discount}% Off</TitleLabel>
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
            <div>
            </div>
            <Routing/>
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
  )
}

export default FlashItem