import React, { useState } from 'react';
import { CardMedia } from '@mui/material';
import type { ProductViewResponse } from '../../constant/productViewData';
import { StyledCardMedia, StyledCard, StyledThumbnailCard, StyledImageContainer, StyledThumbnailList } from './ProductView.style';

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
                        <CardMedia
                            component="img"
                            image={img.url}
                            alt={`Thumbnail ${idx + 1}`}
                            sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
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