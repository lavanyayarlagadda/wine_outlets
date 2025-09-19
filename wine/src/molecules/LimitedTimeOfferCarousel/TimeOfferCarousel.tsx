import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
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
} from "./TimeOfferCarousel.style";
import { CustomTitleSection } from "../../atoms";
import { useNavigate } from "react-router-dom";
// import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";
import {
  SITE_SETTING_DEMO_DATA,
  type BannerCollectionSection,
  type BannerImageItem,
} from "../../constant/LandingPageData";
// import type {
//   LimitedTimeOfferSection,
//   OfferItem,
// } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";

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

const LimitedTimeOffersCarousel = () => {
  const timeOfferData = SITE_SETTING_DEMO_DATA.pageSections.find(
    (s) => s.id === "collection-1"
  ) as BannerCollectionSection;
  // const { data: sections } = useGetHomeSectionsQuery();
  const { title, subtitle, content, isVisible }: BannerCollectionSection = timeOfferData ?? {
    isVisible: false,
    title: "",
    subtitle: "",
    content: [],
  };
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.max(0, content.length);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isVisible) return null;

  return (
    <CarouselContainer>
      <CustomTitleSection title={title || ""} subtitle={subtitle} />
      {!isMobile && (
        <>
          <CarouselWrapper>
            <CarouselTrack currentIndex={currentIndex}>
              {content.map((offer, index) => (
                <CarouselSlide
                  key={index}
                  onClick={() => navigate(`/productsList?tags=${offer.tags.join(",")}` || "/")}
                >
                  {renderOfferCard(offer, index)}
                </CarouselSlide>
              ))}
            </CarouselTrack>
          </CarouselWrapper>

          <DotsContainer>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </DotsContainer>
        </>
      )}

      {/* Mobile horizontal scroll */}
      {isMobile && (
        <MobileScrollWrapper>
          {content.map((offer, index) => (
            <CarouselSlide key={index}>{renderOfferCard(offer, index)}</CarouselSlide>
          ))}
        </MobileScrollWrapper>
      )}
    </CarouselContainer>
  );
};

export default LimitedTimeOffersCarousel;
