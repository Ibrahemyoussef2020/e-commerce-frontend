import { useDispatch} from 'react-redux'
import {
removeProduct,
incrementProduct,
decrementProduct} from '../../../redux/slices/ShoppingSlice'

import './Purchas.css'

const Purchas = ({id,name,brand,img,price,qty,total}) => {

  const dispatch = useDispatch()

  const decrement_remove = (id,qty)=>{
    if(qty > 1){
      console.log('dec');
       dispatch(decrementProduct({id:id,qty:qty})) 
    }else{
      console.log('rem');
       dispatch(removeProduct({id:id}))
    }
  }
  
    return (
      <div className='Purchas  d-flex justify-content-between my-4' key={id}>
          <section className='img-con bg-white'>
            <img className='h-100' src={img} alt={brand}/>
          </section>

          <section className='details-con position-relative bg-white py-1 px-2'>
            <header className='d-flex justify-content-between px-1'>
              <h6 className='text-danger'>{name}</h6>
              
              <div onClick={()=>dispatch(removeProduct({id:id}))}>
                <i className="fa-solid fa-xmark text-danger clicked"></i>
              </div>
            </header>

            <footer className='purshas-footer position-absolute pos-right pos-left bottom d-flex justify-content-between my-2 text-danger'>
                <section className='d-flex justify-content-between'>
                  <div className='text-secondary mx-2'>{price}</div>
                  <div className='text-danger mx-2'>{qty}</div>
                  <div className='text-sucssess mx-2'>{total}</div>
                </section>
                
                <section className='d-flex justify-content-between'>
                  <div onClick={()=>decrement_remove(id,qty)}>
                    <i className="fa-solid fa-minus clicked mx-2"></i>
                  </div>

                  <div onClick={()=>dispatch(incrementProduct({id:id,qty:qty}))}>
                    <i className="fa-solid fa-plus clicked mx-2"></i>
                  </div>              
                </section>
              </footer>
          </section>
      </div>
    )
}

export default Purchas