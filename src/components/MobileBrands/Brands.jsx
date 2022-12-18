import {BrandFilter,BrandMarket} from './index'

import './Brands.css'

const Brands = () => {
  return (
      <section className='Brands mx-auto mt-3 row container-fluid bg-white'>
        <BrandFilter />
        <BrandMarket/>
      </section>
  )
}

export default Brands