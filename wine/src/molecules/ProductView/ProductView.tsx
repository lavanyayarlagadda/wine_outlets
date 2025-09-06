import TastingNotesCarousel from '../TastingNotesCarousel/TastingNotesCarousel';
import { ratingBreakDown } from '../../constant/dealProduct';
import RatingsBreakdown from '../../organisms/RatingsBreakDown/RatingsBreakDown';
const ProductView = () => {
  return (
    <>   
      <TastingNotesCarousel />
      <RatingsBreakdown data={ratingBreakDown} />
    </>
  )
}

export default ProductView