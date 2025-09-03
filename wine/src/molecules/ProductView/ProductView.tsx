import React from 'react'
import TastingNotesCarousel from '../TastingNotesCarousel/TastingNotesCarousel'
import RatingsBreakdown from '../ReviewRating/ReviewRating';
import { ratingBreakDown } from '../../constant/dealProduct';

const ProductView = () => {
    
  return (
    <>
    <TastingNotesCarousel/>
    <RatingsBreakdown data={ratingBreakDown}/>
    </>

  )
}

export default ProductView