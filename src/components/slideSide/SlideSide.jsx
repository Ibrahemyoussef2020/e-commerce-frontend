import {MainSliders} from './index'
import {StaticSide} from './index'
import './SlideSide.css'

const SlideSide = () => {
  return (
      <section className='SlideSide mx-auto mt-3 row container-fluid bg-white'>
        <StaticSide />
        <MainSliders/>
      </section>
  )
}

export default SlideSide