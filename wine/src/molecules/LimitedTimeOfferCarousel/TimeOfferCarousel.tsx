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
import { useGetHomeSectionsQuery } from "../../store/apis/Home/homeAPI";
import type {
  LimitedTimeOfferSection,
  OfferItem,
} from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";

const LimitedTimeOffersCarousel = () => {
  const { data: sections } = useGetHomeSectionsQuery();
  const { title, subtitle, offers, isVisible }: LimitedTimeOfferSection = sections?.sections
    ?.limitedTimeOffer ?? {
    isVisible: false,
    title: "",
    subtitle: "",
    offers: [],
  };
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.max(0, offers.length);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderOfferCard = (offer: OfferItem) => (
    <OfferCard key={offer.id}>
      <CardImage src={offer.media?.url} alt={`offer-${offer.id}`} />
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

  if (!isVisible) return null;

  return (
    <CarouselContainer>
      <CustomTitleSection title={title || ""} subtitle={subtitle} />
      {!isMobile && (
        <>
          <CarouselWrapper>
            <CarouselTrack currentIndex={currentIndex}>
              {offers.map((offer) => (
                <CarouselSlide key={offer.id} onClick={() => navigate(offer?.offerAction || "/")}>
                  {renderOfferCard(offer)}
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
          {offers.map((offer) => (
            <CarouselSlide key={offer.id}>{renderOfferCard(offer)}</CarouselSlide>
          ))}
        </MobileScrollWrapper>
      )}
    </CarouselContainer>
  );
};

export default LimitedTimeOffersCarousel;
