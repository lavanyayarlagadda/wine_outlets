import React from "react";
import {
    DetailsTitle,
    DetailRow,
    DetailLabel,
    DetailValue,
    HighlightsContainer
} from "./ProductView.style";

interface DetailItem {
    label: string;
    value: string;
}

interface ProductDetailsBlockProps {
    title?: string;
    details: DetailItem[];
}

const ProductDetailsBlock: React.FC<ProductDetailsBlockProps> = ({
    title = "Product Details",
    details,
}) => {
    return (
        <HighlightsContainer>
            <DetailsTitle >{title}</DetailsTitle>
            {details.map((detail, index) => (
                <DetailRow key={index}>
                    <DetailLabel >{detail.label}:</DetailLabel>
                    <DetailValue>{detail.value}</DetailValue>
                </DetailRow>
            ))}
        </HighlightsContainer>
    );
};

export default ProductDetailsBlock;
