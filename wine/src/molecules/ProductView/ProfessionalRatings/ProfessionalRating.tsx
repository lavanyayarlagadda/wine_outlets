// import React from 'react';
// import { HighlightsContainer, LayoutContainer, ProductTitle } from '../ProductView.style';
// import type { ProductViewResponse } from '../../../constant/productViewData';
// import ProfessionalRatingCard from './ProfessionalRatingCard';
// import { Grid } from '@mui/material';


// interface ProductDetailsProps {
//     productViewData: ProductViewResponse;
// }
// const ProfessionalRating: React.FC<ProductDetailsProps> = ({ productViewData }) => {
//     console.log("productViewData in ProfessionalRating:", productViewData.professionalRating);
//     return (
//         <LayoutContainer>
//             <HighlightsContainer>
//                <ProductTitle>Professional Rating</ProductTitle>
//                 {productViewData?.professionalRating && productViewData.professionalRating.length > 0 ? (
//                     <Grid container spacing={2} marginTop={2}>
//                         {productViewData.professionalRating.map((rating, index) => {
//                             const total = productViewData.professionalRating.length;
//                             const isLastRowStart = Math.floor(index / 3) === Math.floor((total - 1) / 3);
//                             const remaining = total % 3;

//                             let gridSize = 4; // default 3 per row (12/3=4)

//                             if (isLastRowStart && remaining !== 0) {
//                                 // Distribute remaining cards to fill the row
//                                 if (remaining === 1) {
//                                     gridSize = 12; // last card full width
//                                 } else if (remaining === 2) {
//                                     gridSize = index === total - 2 ? 4 : 8;
//                                     // 4th card = 1/3 width, 5th card = 2/3 width
//                                 }
//                             }

//                             return (
//                                 <Grid size={{ xs: 12, sm:gridSize, md:gridSize }} key={index}>
//                                     <ProfessionalRatingCard
//                                         title={rating.title}
//                                         score={rating.score}
//                                         description={rating.description}
//                                     />
//                                 </Grid>
//                             );
//                         })}
//                     </Grid>
//                 ) : (
//                     <p>No professional ratings available.</p>
//                 )}
//             </HighlightsContainer>
//         </LayoutContainer>
//     )
// }

// export default ProfessionalRating



import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { HighlightsContainer, LayoutContainer, ProductTitle, AccordianHead } from '../ProductView.style';
import type { ProductViewResponse } from '../../../constant/productViewData';
import ProfessionalRatingCard from './ProfessionalRatingCard';


interface ProductDetailsProps {
    productViewData: ProductViewResponse;
}

const ProfessionalRating: React.FC<ProductDetailsProps> = ({ productViewData }) => {
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <LayoutContainer>
            <div style={{ border: `1px solid #E0E0E0`, borderRadius: "8px", padding:2 }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        backgroundColor: "#FAFAFA",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        // border:"none"
                    }}
                >
                    <ProductTitle>Professional Rating</ProductTitle>
                    <IconButton onClick={toggleExpand}>
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>


                </div>
                {/* <HighlightsContainer> */}
                {expanded && productViewData?.professionalRating?.length ? (
                    <Grid container spacing={2} bgcolor={"#FAFAFA"} padding={2} >
                        {productViewData.professionalRating.map((rating, index) => {
                            const total = productViewData.professionalRating.length;
                            const isLastRowStart = Math.floor(index / 3) === Math.floor((total - 1) / 3);
                            const remaining = total % 3;

                            let gridSize = 4; // default 3 per row (12/3=4)

                            if (isLastRowStart && remaining !== 0) {
                                if (remaining === 1) {
                                    gridSize = 12; // last card full width
                                } else if (remaining === 2) {
                                    gridSize = index === total - 2 ? 4 : 8;
                                }
                            }

                            return (
                                <Grid size={{ xs: 12, sm: gridSize, md: gridSize }} key={index}>
                                    <ProfessionalRatingCard
                                        title={rating.title}
                                        score={rating.score}
                                        description={rating.description}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                ) : expanded && (
                    <p>No professional ratings available.</p>
                )
                }
                {/* </HighlightsContainer> */}

            </div>
        </LayoutContainer>
    );
};

export default ProfessionalRating;
