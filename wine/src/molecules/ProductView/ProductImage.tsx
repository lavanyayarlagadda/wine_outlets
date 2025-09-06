import React, { useState } from 'react';
import type { ProductViewResponse } from '../../constant/productViewData';
import { StyledCardMedia, StyledCard, StyledThumbnailCard, StyledImageContainer, StyledThumbnailList, StyledThumbnailMedia } from './ProductView.style';

interface ProductImageProps {
    productViewData: ProductViewResponse;
}

const ProductImage: React.FC<ProductImageProps> = ({ productViewData }) => {
    const images = productViewData.product.images;
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <StyledImageContainer>
            {/* Thumbnails */}
            <StyledThumbnailList>
                {images.map((img, idx) => (
                    <StyledThumbnailCard
                        key={idx}
                        selected={selectedIndex === idx}
                        onClick={() => setSelectedIndex(idx)}
                    >
                        <StyledThumbnailMedia
                            as="img"
                            src={img.url}
                            alt={`Thumbnail ${idx + 1}`}
                            // sx={{ objectFit: 'cover', width: '100%', height: '100%', px:3 }}
                        />
                    </StyledThumbnailCard>
                ))}
            </StyledThumbnailList>
            {/* Main Image */}
            <StyledCard>
                <StyledCardMedia
                    as="img"
                    src={images[selectedIndex]?.url}
                    alt="Wine Bottle"
                />
            </StyledCard>
        </StyledImageContainer>
    );
};

export default ProductImage;