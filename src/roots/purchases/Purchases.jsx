import { useState, useEffect ,Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeProduct} from '../../redux/slices/ShoppingSlice'
import Purchas from './purchas'


import './Purchases.css'

const Purchases = () => {

  const dispatch = useDispatch()

  const {products} = useSelector(state => state.shopping)

  console.log(typeof(products));
  console.log(products);

  const [bill , setBill] = useState(0)

  useEffect(()=>{
    const collection = ()=>{
      let collect = 0;
      products.map(product =>{
        collect += product.total 
      })
      setBill(collect)
    }
    collection()
  })
 return (
    <section className='Purchases d-flex justify-content-between flex-wrap my-4 py-1 px-3 flex-row-reverse'>
      <div className='bill position-relative bg-white mt-4 mb-2'>
          <header className='text-danger text-bold px-2 py-2'>
            <h6>cart summary</h6>
          </header>
          <footer className='position-absolute bottom pos-left pos-right d-flex justify-content-between'>
              <small className='text-secondary'>Total price</small>
              <span className='text-danger text-bold'>{bill} $</span>
          </footer>
      </div>

      <div className="itemes mx-2">
      {
        products?.map(product => {
          const {id,name,brand,img,price,qty,total}  = product
           if(qty > 0){
            
            return <Fragment key={id}>
                      <Purchas id={id} name={name} brand={brand} price={price} qty={qty} total={total} img={img} />
                  </Fragment>
           }    
        })
      }
      </div>
    </section>

    
 )
}

export default Purchases