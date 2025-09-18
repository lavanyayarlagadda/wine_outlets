import React from "react";
import { BannerContainer, BannerDiscription, BannerHeading } from "./PrivacyBanner.style";

const PrivacyBaneer = () => {
  return (
    <BannerContainer>
      <BannerHeading>Privacy Policy</BannerHeading>
      <BannerDiscription>
        Wine Outlet is committed to your privacy we are making our information policies transparent.
      </BannerDiscription>
    </BannerContainer>
  );
};

export default PrivacyBaneer;
