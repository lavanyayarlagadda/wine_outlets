import React from "react";
import { BannerContainer, BannerDiscription, BannerHeading } from "./PrivacyBanner.style";

interface BannerProps {
  heading: string;
  description?: string;
}

const PrivacyBaneer: React.FC<BannerProps> = ({ heading, description }) => {
  return (
    <BannerContainer>
      <BannerHeading>{heading}</BannerHeading>
      {description && <BannerDiscription>{description}</BannerDiscription>}
    </BannerContainer>
  );
};

export default PrivacyBaneer;
