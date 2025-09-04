import React, { useState } from 'react';
import { Rating, Select, MenuItem, Typography, Box, IconButton, Divider } from '@mui/material';
import type { ProductViewResponse } from '../../constant/productViewData';
import { starIcon, groupIcon, sizeIcon, originIcon } from '../../assets';
import SimpleDropdown from '../../atoms/CustomDropdown/SimpleDropdown';
import CustomCounter from '../../atoms/CustomCounter/CustomCounter';
import CustomWishlist from '../../atoms/CustomWishlist/CustomWhisList';
import { CustomButton } from '../../atoms';
import AddToCart from '../../atoms/CustomButton/AddToCart';
import ProductDetailsBlock from './ProductDetailsBlock';
import {
    DetailsContainer,
    ProductTitle,
    ProductInfoRow,
    PriceRow,
    AddToCartBtn,
    StyledChip,
    RatingBox,
    RatingTypography,
    InfoValues,
    PricingBox,
    VipPriceText,
    RegularPriceText,
    DescriptionText
} from './ProductView.style';
import ProductHighlights from './ProductHighlights';

interface ProductDetailsProps {
    productViewData: ProductViewResponse;
}

interface InfoItemProps {
    icon?: React.ReactNode;
    label: string;
    value: React.ReactNode;
}

interface PricingProps {
    price: number;
    vipPrice?: number;
}

const Pricing: React.FC<PricingProps> = ({ vipPrice, price }) => {
    return (
        <Box display="flex" alignItems="center">
            <VipPriceText variant="h6">VIP: ${vipPrice}</VipPriceText>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 28 }} />
            <RegularPriceText variant="h6">${price}</RegularPriceText>
        </Box>
    );
};

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
    <RatingBox>
        {icon}
        <RatingTypography as="span">
            {label} <InfoValues as="span">{value}</InfoValues>
        </RatingTypography>
    </RatingBox>
);

const ProductDetails: React.FC<ProductDetailsProps> = ({ productViewData }) => {
    const { product } = productViewData;
    console.log("Product Data:", product);
    const [selectedSize, setSelectedSize] = useState(product.bottle_size[0]?.id || '');
    const [selectedVintage, setSelectedVintage] = useState(product.other_vintages[0]?.year || '');
    const [count, setCount] = useState(0);

    const sizeOptions = product.bottle_size.map((size) => ({
        value: size.id,
        label: size.label,
    }));
    const vintageOptions = product.other_vintages.map((vintage) => ({
        value: vintage.year,
        label: vintage.year.toString(),
    }));

    const handleWishlistToggle = (selected: boolean) => {
        console.log("Wishlist toggled:", selected);
    };
    return (
        <DetailsContainer>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductInfoRow>
                <RatingBox>
                    <Rating value={Number(product.rating)} precision={0.5} readOnly />
                    <RatingTypography>
                        ({product.review_count} Reviews)
                    </RatingTypography>
                </RatingBox>
            </ProductInfoRow>
            <ProductInfoRow>
                <InfoItem icon={<img src={originIcon} alt="origin" width={18} />} label="Origin:" value={product.origin} />
                <InfoItem icon={<img src={starIcon} alt="brand" width={18} />} label="Brand:" value={product.brand} />
            </ProductInfoRow>
            <ProductInfoRow>
                <InfoItem icon={<img src={sizeIcon} alt="size" width={18} />} label="Size:" value={product.size} />
                <InfoItem
                    // icon={<img src={groupIcon} alt="alcohol" width={18} />}
                    label="Alcohol by Volume:"
                    value={<span style={{ color: '#AD1113' }}>{product.alcoholByVolume}</span>}
                />
            </ProductInfoRow>
            <ProductInfoRow>
                <InfoItem
                    icon={<img src={groupIcon} alt="alcohol" width={18} />}
                    label="Grape Composition:"
                    value={<StyledChip label={product.grapheComposition} />}
                />

            </ProductInfoRow>
            <ProductInfoRow>
                <SimpleDropdown
                    label="Bottle Size"
                    value={selectedSize}
                    onChange={setSelectedSize}
                    options={sizeOptions}
                    placeholder="Select size"
                />
                <SimpleDropdown
                    label="Other Vintages"
                    value={selectedVintage}
                    onChange={setSelectedVintage}
                    options={vintageOptions}
                    placeholder="Select vintage"
                />
            </ProductInfoRow>
            {/* Price and Rating */}
            <PriceRow >

                <CustomCounter value={count} onChange={setCount} />
                <CustomWishlist onToggle={handleWishlistToggle} />


                <PricingBox>
                    <Pricing vipPrice={product?.pricing.vipPrice} price={product.pricing.price} />
                </PricingBox>
            </PriceRow>

            <AddToCart onClick={() => console.log("Added to cart")} label='Add to Cart' />

            <DescriptionText variant="body2">
                {product.description}
            </DescriptionText>
            <ProductHighlights
                title="Product Highlights"
                highlights={product.highlights}
            />
            <ProductDetailsBlock
                details={Object.entries(product.details).map(([label, value]) => ({ label, value }))}
            />
             <ProductHighlights
                title="Food Pairings"
                highlights={product.foodPairings}
            />
        </DetailsContainer>
    );
};

export default ProductDetails;