import { useState, useEffect } from "react";
import { useTheme, useMediaQuery, Box, } from "@mui/material";
import {
  CarouselContainer,
  OfferCard,
  CardImage,
  CarouselWrapper,
  CarouselTrack,
  CarouselSlide,
  DotsContainer,
  Dot,
  MobileScrollWrapper,
  GridContainer,
  GridItem,
} from "./TimeOfferCarousel.style";
import { CustomTitleSection } from "../../atoms";
import { useNavigate } from "react-router-dom";
import {
  type BannerImageItem,
  type LayoutType,
} from "../../constant/LandingPageData";


interface Props {
  content?: BannerImageItem[];
  title?: string;
  subtitle?: string;
  layout?: LayoutType;
  isVisible?: boolean;
}
export const renderOfferCard = (offer: BannerImageItem, id: number) => (
  <OfferCard key={id}>
    <CardImage src={offer.imageUrl} alt={`offer-${id}`} />
    {/* this part may be needed later on */}
    {/* <CardOverlay>
        {offer.highlight && <HighlightText>{offer.highlight}</HighlightText>}
        <OfferText>{offer.highlight ? offer.title : offer.title}</OfferText>
        <OfferSubtext>
          {offer.subtitle.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < offer.subtitle.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </OfferSubtext>
      </CardOverlay> */}
  </OfferCard>
);
const slidesPerView = 3;
const LimitedTimeOffersCarousel = ({
  content = [],
  title = "",
  subtitle = "",
  layout = "carousel",
  isVisible = true,
}: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const pageCount = Math.max(1, Math.ceil(content.length / slidesPerView));
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (currentIndex >= pageCount) {
      setCurrentIndex(0);
    }
  }, [pageCount, currentIndex]);

  if (!isVisible) return null;

  return (
    <CarouselContainer>
      <CustomTitleSection title={title || ""} subtitle={subtitle} />
      {layout === "4-column-grid" || layout === "3-column-grid" ? (
        <Box sx={{ pt: 2 }}>
          <GridContainer columns={layout === "3-column-grid" ? 3 : 4}>
            {content.map((offer, index) => (
              <GridItem
                key={index}
                onClick={() => navigate(`/productsList?tags=${(offer.tags || []).join(",")}`)}
                role="button"
              >
                <img src={offer.imageUrl} alt={`offer-${index}`} />
              </GridItem>
            ))}
          </GridContainer>
        </Box>
      ) : (
        <>
          {!isMobile && (
            <>
              <CarouselWrapper>
                <CarouselTrack currentIndex={currentIndex}>
                  {content.map((offer, index) => (
                    <CarouselSlide
                      key={index}
                      slideWidthPercent={100 / slidesPerView}
                      onClick={() =>
                        navigate(`/productsList?tags=${(offer.tags || []).join(",")}` || "/")
                      }
                    >
                      {renderOfferCard(offer, index)}
                    </CarouselSlide>
                  ))}
                </CarouselTrack>
              </CarouselWrapper>

              {pageCount > 1 && <DotsContainer>
                {Array.from({ length: pageCount }).map((_, index) => (
                  <Dot
                    key={index}
                    active={index === currentIndex}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </DotsContainer>}
            </>
          )}

          {isMobile && (
            <MobileScrollWrapper>
              {content.map((offer, index) => (
                <CarouselSlide key={index}>{renderOfferCard(offer, index)}</CarouselSlide>
              ))}
            </MobileScrollWrapper>
          )}
        </>
      )}
    </CarouselContainer>
  );
};

export default LimitedTimeOffersCarousel;
