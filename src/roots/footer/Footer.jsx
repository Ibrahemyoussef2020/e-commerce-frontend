import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer id='Us' className='Footer p-4 mt-4'>
      <div className="summaries row">
        <div className='col col-12 col-md-6'>
          <h4 className='text-white my-2'>you will find here : </h4>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>Discounts up 30%</h6>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>Return serveses within 15 days</h6>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>Export from another continent</h6>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>Draws and gifts</h6>
        </div>
        <div className='col col-12 col-md-6'>
          <h4 className='text-white my-2'>why us : </h4>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>All products are brands</h6>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>Authorized outlet</h6>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>Our Dates are on the time</h6>
          <h6 className='text-white'><i className="fa-solid fa-arrow-right-long my-2 mx-2"></i>So fast arriving</h6>
        </div>
      </div>
      <hr/>
      <div className='icons mt-4 d-flex justify-content-between'>
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