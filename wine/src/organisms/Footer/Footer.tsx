import React from "react";
import Grid from "@mui/material/Grid";
import {
  FooterContainer,
  SocialIconsContainer,
  StyledIconButton,
  SectionTitle,
  LinksContainer,
  StyledLink,
  InnerWrapper,
  LogoImage,
  CustomizedGrid,
  FooterContent,
  FooterGridRow,
  CopyrightText,
} from "./Footer.style";
import { FOOTER_DATA, SOCIAL_ICONS } from "../../constant/footerData";
import { logo } from "../../assets";
import { StoreLocator } from "../../molecules";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../../molecules/NavigationBar/Navigation.hook";
import { useHomeLogic } from "../../pages/Home/Home.hook";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const Footer: React.FC = () => {
  const [isStoreLocator, setIsStoreLocator] = React.useState(false);

  const { stores, storesData } = useHomeLogic();
  const { searchTerm } = useSelector((store: RootState) => store.homeSlice);
  const { selectedStore } = useNavigation(searchTerm ? storesData : stores);
  const navigate = useNavigate();
  const renderFooterSection = (sectionData: (typeof FOOTER_DATA)[keyof typeof FOOTER_DATA]) => (
    <>
      <SectionTitle variant="h6">{sectionData.title}</SectionTitle>
      <LinksContainer>
        {sectionData.links.map((link, index) => (
          <StyledLink
            key={index}
            // href={link.href}
            onClick={(e) => {
              if (link.text.toLowerCase() === "store locator") {
                e.preventDefault(); // optional: stop navigation
                setIsStoreLocator(true);
              } else {
                navigate(link.href); // Wines, Beer, Liquor go here
              }
            }}
          >
            {link.text}
          </StyledLink>
        ))}
      </LinksContainer>
      <StoreLocator
        open={isStoreLocator}
        onClose={() => setIsStoreLocator(false)}
        selectedStoreId={Number(selectedStore)}
        stores={stores}
        onSelect={(id) => localStorage.setItem("selectedStore", id.toString())}
        navigation={true}
      />
    </>
  );

  return (
    <FooterContainer>
      <InnerWrapper>
        {/* Logo and Social Media Section */}
        <Grid>
          <LogoImage src={logo} />
          <SocialIconsContainer>
            {SOCIAL_ICONS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{ textDecoration: "none" }}
              >
                <StyledIconButton>
                  <img src={social.icon} alt={social.label} />
                </StyledIconButton>
              </a>
            ))}
          </SocialIconsContainer>
        </Grid>
        <FooterContent>
          <FooterGridRow>
            {Object.values(FOOTER_DATA).map((section, index) => (
              <CustomizedGrid key={index}>{renderFooterSection(section)}</CustomizedGrid>
            ))}
          </FooterGridRow>

          <CopyrightText>© 2025 Wine Outlet. All Rights Reserved.</CopyrightText>
        </FooterContent>
      </InnerWrapper>
    </FooterContainer>
  );
};

export default Footer;
