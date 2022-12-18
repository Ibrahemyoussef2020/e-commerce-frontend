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
        <h4 className='text-danger'>mobile brands</h4>
        <h5 className='text-success'>opp : <a href='@'>oppo</a></h5>
        <h5 className='text-success'>shawmi : <a href='@'>shawmi</a></h5>
        <h5 className='text-success'>sumsung : <a href='@'>sumsung</a></h5>
        <h5 className='text-success'>iphone : <a href='@'>iphone</a></h5>
        <h5 className='text-success'>infenix : <a href='@'>infenix</a></h5>
        <h4 className='text-danger'>clothes brands</h4>
        <h5 className='text-success'>laqoust : <a href='@'>laqoust</a></h5>
        <h5 className='text-success'>nike : <a href='@'>nike</a></h5>
        <h5 className='text-success'>ark : <a href='@'>ark</a></h5>
        <h4 className='text-danger'>our pages</h4>
        <h5 className='text-success'>our phone : <a href='@'>011215*2455*</a></h5>
      </div>
    </section>
  )
}

export default Pages