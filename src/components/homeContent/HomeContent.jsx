import React from 'react'
import {SlideSide} from '../slideSide'
import FlashContainer from '../flash'
import Categories from '../categories'
import Arrivals from '../arrivals'
import Discounts from '../discounts'
import { Brands } from '../MobileBrands'

const HomeContent = () => {
  return (
    <>
        <SlideSide/>        
        <FlashContainer/>
        <Categories/>
        <Arrivals/>
        <Discounts/>
        <Brands/>
    </>
  )
}

export default HomeContent