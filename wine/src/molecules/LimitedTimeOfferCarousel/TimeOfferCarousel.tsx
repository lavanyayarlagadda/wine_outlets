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
// import { OFFERS } from "../../constant/offerData";
import { LandingPageData } from "../../constant/LandingPageData";
import { CustomTitleSection } from "../../atoms";
import { useNavigate } from "react-router-dom";

interface Offer {
  id: string;
  media: {
    type: string;
    url: string;
  };
  offerAction?: string;
}
interface OfferData {
  isVisible: boolean;
  title: string;
  subtitle: string;
  highlight?: string;
  offers: Offer[];
}

const { title, subtitle, offers }: OfferData = LandingPageData?.limitedTimeOffer ?? {
  title: "",
  subtitle: "",
  offers: [],
};

const LimitedTimeOffersCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.max(0, offers.length);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const renderOfferCard = (offer: Offer) => (
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

  const navigate = useNavigate();

  return (
    <CarouselContainer>
      <CustomTitleSection title={title} subtitle={subtitle} />
      {!isMobile && (
        <>
          <CarouselWrapper>
            <CarouselTrack currentIndex={currentIndex}>
              {offers.map((offer) => (
                <CarouselSlide key={offer.id} onClick={() => navigate("/productsList")}>
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
