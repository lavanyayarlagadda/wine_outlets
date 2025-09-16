import ImageGallery from "../../molecules/ProductView/ProductImage";
import { UseProductView } from "./UseProductView.hook";

const ProductImageWrapper: React.FC = () => {
  const { productViewData } = UseProductView();
  if (!productViewData) return null;
  return (
    <ImageGallery
      images={productViewData?.product?.images}
      initialIndex={0}
      thumbnailPosition="left"
      imageFit="contain"
      height={400}
      onImageChange={(i, url) => console.log("Selected image:", url, i)}
    />
  );
};

export default ProductImageWrapper;
