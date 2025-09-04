import React from 'react'
import TastingNotesCarousel from '../TastingNotesCarousel/TastingNotesCarousel';
import Breadcrumbs, { type BreadcrumbItem } from '../../molecules/Breadcrumbs/BreadCrumbs';
import BreadcrumbHeader from '../Breadcrumbs/BreadCrumbsHeader';
import Product from './Product';
import ProfessionalRating from './ProfessionalRating';
import RatingsBreakdown from '../ReviewRating/ReviewRating';
import { ratingBreakDown } from '../../constant/dealProduct';
const ProductView = () => {
      const breadcrumbItems: BreadcrumbItem[] = [
        { label: "List", href:"/" }, 
        { label: "Category", href: "/" },
        { label: "Wines", href:"/" }, 
        { label: "Product" }, // current page, no href
      ];
  return (
    <>
    
    <BreadcrumbHeader items ={breadcrumbItems} showProductCount={false}/>
    
    <Product/>
    <ProfessionalRating/>
    <TastingNotesCarousel/> 
    <RatingsBreakdown data={ratingBreakDown}/>    
    </>
  )
}

export default ProductView