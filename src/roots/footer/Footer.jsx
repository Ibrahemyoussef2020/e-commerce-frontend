import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer id='Us' className='Footer p-4 mt-4'>
      <div className="summaries row">
        <div className='col col-12 col-md-6'>
          <p className='text-white my-2'>you will find here : </p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>Discounts up 30%</p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>Return serveses within 15 days</p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>Export from another continent</p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>Draws and gifts</p>
        </div>
        <div className='col col-12 col-md-6 left'>
          <p className='text-white my-2'>why us : </p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>All products are brands</p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>Authorized outlet</p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>Our Dates are on the time</p>
          <p className='text-white'><i className="fa-regular fa-face-smile my-2 mx-2"></i>So fast arriving</p>
        </div>
      </div>
      <hr/>
      <div className='icons mt-4 d-flex justify-content-center gap-3'>
        <i className="fa-brands fa-facebook text-white"></i>
        <i className="fa-brands fa-twitter text-white"></i>
        <i className="fa-brands fa-instagram text-white"></i>
        <i className="fa-brands fa-yahoo text-white"></i>
        <i className="fa-brands fa-whatsapp text-white"></i>
        <i className="fa-solid fa-square-phone text-white"></i>
      </div>
    </footer>
  )
}

export default Footer