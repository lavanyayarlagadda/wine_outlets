import React from "react";
import { Box, Typography } from "@mui/material";
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
            <DetailsTitle variant="subtitle1">{title}</DetailsTitle>
            {details.map((detail, index) => (
                <DetailRow key={index}>
                    <DetailLabel variant="body2">{detail.label}:</DetailLabel>
                    <DetailValue variant="body2">{detail.value}</DetailValue>
                </DetailRow>
            ))}
        </HighlightsContainer>
    );
};

export default ProductDetailsBlock;
