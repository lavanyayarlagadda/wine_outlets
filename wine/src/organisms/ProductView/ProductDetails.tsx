import React, { useState } from 'react';
import { Rating, Select, MenuItem, Typography, Box, IconButton, Divider } from '@mui/material';
import type { ProductViewResponse } from '../../constant/productViewData';
import { starIcon, groupIcon, sizeIcon, originIcon } from '../../assets';
import SimpleDropdown from '../../atoms/CustomDropdown/SimpleDropdown';
import CustomCounter from '../../atoms/CustomCounter/CustomCounter';
import CustomWishlist from '../../atoms/CustomWishlist/CustomWhisList';
import { CustomButton } from '../../atoms';
import AddToCart from '../../atoms/CustomButton/AddToCart';
import ProductDetailsBlock from '../../molecules/ProductView/ProductDetailsBlock';

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
    DescriptionText,
    StyledDivider,
    InfoIcon
} from '../../molecules/ProductView/ProductView.style';
import ProductHighlights from '../../molecules/ProductView/ProductHighlights';
import { useFontSize } from '../../themes/fontSize';
import palette from '../../themes/palette';

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
        <RatingBox>
            <VipPriceText >VIP: ${vipPrice}</VipPriceText>
            <StyledDivider orientation="vertical" flexItem />
            <RegularPriceText>${price}</RegularPriceText>
        </RatingBox>
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
    const fontSize24 = useFontSize(24)
    const fontSize16 = useFontSize(16)
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
            <ProductTitle >{product.name}</ProductTitle>
            <ProductInfoRow>
                <RatingBox>
                    <Rating value={Number(product.rating)} precision={0.5} readOnly />
                    <RatingTypography >
                        ({product.review_count} Reviews)
                    </RatingTypography>
                </RatingBox>
            </ProductInfoRow>
            <ProductInfoRow>
                <InfoItem icon={<InfoIcon src={originIcon} alt="origin"  />} label="Origin:" value={product.origin} />
                <InfoItem icon={<InfoIcon src={starIcon} alt="brand"  />} label="Brand:" value={product.brand} />
            </ProductInfoRow>
            <ProductInfoRow>
                <InfoItem icon={<InfoIcon src={sizeIcon} alt="size" />} label="Size:" value={product.size} />
                <InfoItem
                    // icon={<img src={groupIcon} alt="alcohol" width={18} />}
                    label="Alcohol by Volume:"
                    value={<span style={{ color: palette.primary.dark }}>{product.alcoholByVolume}</span>}
                />
            </ProductInfoRow>
            <ProductInfoRow>
                <InfoItem
                    icon={<InfoIcon src={groupIcon} alt="alcohol" />}
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

            <DescriptionText>
                {product.description}
            </DescriptionText>
            <ProductHighlights
                title="Product Highlights"
                highlights={product.highlights}
            />
            <ProductDetailsBlock
            title="Product Details"
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