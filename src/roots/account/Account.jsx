import {useSelector,useDispatch} from 'react-redux'
import {removeFavorite} from '../../redux/slices/FavoriteSlice'
import {Routing} from '../../utilities'

import './Account.css'

const Account = () => {
  const dispatch = useDispatch()
  const {favorites} = useSelector(state => state.favorite)
  
  return (
    <section className='user'>
      
      <div className='user-inform bg-white container p-2 mt-4 d-flex justify-content-center align-items-center'>
        <div className="user-img">
          <img src='imges/the-moon.webp' alt='no img' className='rounded'/>
        </div>
        <div className="user-details px-2">
          <p className='mb-4'> <span>Name : </span>Ibrahim Yo</p>
          <p className='my-4'> <span>Title : </span>Cairo,ground flour</p>
          <div className='d-flex mt-4 mb-1'><Routing/></div>
          <div>Hi! : <small className='text-danger fw-900'>
            { favorites?.length ? 'you liked following...'
              : 'plz select your favorites list'
            }
            </small>
          </div>
        </div>
      </div>

      <div className='user-fav mt-4'>
        {favorites?.map(favorite => 
        <div key={favorite.id + Math.random()} 
            className='favorite position-relative d-flex align-items-center  bg-white mb-2 p-1'
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
              <div className='text-success'><Routing/></div> 
                <i className="f fa-solid fa-heart mx-2  mt-1 text-danger"></i></div>
            </div>
        </div>)}
      </div>
    </section>
  )
}

export default Account