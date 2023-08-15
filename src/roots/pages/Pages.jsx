import React from 'react'

import './Pages.css'

const Pages = () => {
  return (
    <section className='Pages'>
      <div  className='d-sm-flex gap-2'>
        <h2 className='text-success'> Hi Ibrahim! :</h2>
        <h3> There are our brand's websites</h3>
      </div>
      <div>
        <p className='text-danger'>mobile brands</p>
        <p className='text-success'>opp : <a href='@'>oppo</a></p>
        <p className='text-success'>shawmi : <a href='@'>shawmi</a></p>
        <p className='text-success'>sumsung : <a href='@'>sumsung</a></p>
        <p className='text-success'>iphone : <a href='@'>iphone</a></p>
        <p className='text-success'>infenix : <a href='@'>infenix</a></p>
        <p className='text-danger'>clothes brands</p>
        <p className='text-success'>laqoust : <a href='@'>laqoust</a></p>
        <p className='text-success'>nike : <a href='@'>nike</a></p>
        <p className='text-success'>ark : <a href='@'>ark</a></p>
        <p className='text-danger'>our pages</p>
        <p className='text-success'>our phone : <a href='@'>011215*2455*</a></p>
      </div>
    </section>
  )
}

export default Pages