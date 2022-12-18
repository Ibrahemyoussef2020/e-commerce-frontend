import {useSelector,useDispatch} from 'react-redux'
import {removeFavorite} from '../../redux/slices/FavoriteSlice'
import {Routing} from '../../utilities'

import './Account.css'

const Account = () => {
  const dispatch = useDispatch()
  const {favorites} = useSelector(state => state.favorite)
  
  return (
    <section className='user'>
      
      <div className='user-inform container p-2 mt-4 bg-white  d-flex justify-content-center align-items-center'>
        <div className="user-img">
          <img src='imges/the-moon.jpg' alt='no img' className='rounded'/>
        </div>
        <div className="user-details px-2">
          <h6 className='mb-4'> <span>Name : </span>Ibrahim Yo</h6>
          <h6 className='my-4'> <span>Title : </span>Cairo,ground flour</h6>
          <h6 className='d-flex mt-4'><Routing/></h6>
          <h6>Hi! : <small className='text-danger fw-900'>
            { favorites?.length ? 'you liked following...'
              : 'plz select your favorites list'
            }
            </small>
          </h6>
        </div>
      </div>

      <div className='user-fav mt-4 bg-white'>
        {favorites?.map(favorite => 
        <div key={favorite.id + Math.random()} 
            className='favorite position-relative d-flex align-items-center'
          >
          <div className='x px-1' onClick={()=>dispatch(removeFavorite({id:favorite.id}))}>
            <i className="fa-solid fa-xmark postion-absolute text-danger clicked"></i>  
          </div>  
            <div className='fav-img'>
              <img src={favorite.img} alt={favorite.name} className='w-100 h-100'/>
            </div>
            <div className='fav-details w-100 mx-1 px-2'>
              <div className='mb-1'> <small className='text-success'>Name : </small><small>{favorite.name}</small></div>
              <div className='my-1'> <small className='text-success'>brand : </small><small>{favorite.brand || 'Flash'}</small></div>
              <div className='my-1 d-flex'>
              <small className='text-success'><Routing/></small> 
                 <i className="f fa-solid fa-heart mt-1 text-danger"></i></div>
            </div>
        </div>)}
      </div>
    </section>
  )
}

export default Account