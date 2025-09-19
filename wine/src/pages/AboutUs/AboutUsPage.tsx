import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import {
  PhilosophyContainer,
  PhilosophyHeader,
  PhilosophySubText,
  PhilosophyBox,
  PhilosophyContent,
    TechSectionContainer,
  TechHeader,
  TechDescription,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureSubtitle,
  TechGridContainer,
  TechGridLeft,
  TechGridRight,
  FeatureBoxRed,
  FeatureBoxGreen,
} from "./AboutUsPage.style";
import { NewsletterContainer } from "../../molecules/Newsletter/Newsletter.style";

import { Newsletter } from "../../molecules";
import StarIcon from "@mui/icons-material/Star";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
import { useTheme } from "@mui/material/styles";
// import EcoIcon from "@mui/icons-material/Eco";
import Vector from "../../assets/icons/Vector.svg"
import zerowaste from "../../assets/icons/zerowaste.svg"
const AboutUsPage = () => {
    const theme = useTheme()
  return (
    <>
      <PrivacyBaneer heading="About Wine Outlet" />

      {/* philosophy */}
      <PhilosophyContainer>
        <PhilosophyHeader>Our Philosophy</PhilosophyHeader>

        <PhilosophySubText>
          Here at Wine Outlet we believe that finding a great bottle of wine, discovering a unique
          craft beer, or experiencing a boutique spirit, has the ability to bring people together,
          enjoy the moment and create lasting memories.
        </PhilosophySubText>

        <PhilosophyBox>
          <PhilosophyContent>
            This is why at Wine Outlet we believe it is our duty to create an exceptional customer
            experience from the moment you enter through our door or navigate to our website. By
            interacting with each and every customer our friendly and knowledgeable staff is ready
            to provide advice or recommendations from pairing wines, finding a variety of craft
            beers, or mixing that perfect cocktail for any occasion.
          </PhilosophyContent>
        </PhilosophyBox>
      </PhilosophyContainer>

      {/* innovative technology */}
     <NewsletterContainer>
      <TechSectionContainer>
        <TechGridContainer container>
          {/* Left side: Title + Description */}
          <TechGridLeft size={{xs:12, md:7}}>
            <TechHeader>
              <StarIcon htmlColor={theme.palette.primary.dark} />
              Innovative Technology
            </TechHeader>

            <TechDescription>
              Our Enomatic systems dispense wine directly from the bottle using revolutionary
              inert gas preservation (nitrogen or argon). The flavours and characteristics of the
              wine remain intact for more than three weeks, as if the bottle had just been opened.
            </TechDescription>

            <TechDescription>
              With portion control technology, Enomatic allows wine establishments to create
              extended wine by the glass or tasting menus which are enticing to customers and
              allow businesses to maximize servings while eliminating waste.
            </TechDescription>
          </TechGridLeft>

          {/* Right side: Features */}
          <TechGridRight size={{xs:12, md:4}}>
            <FeatureBoxRed>
              <FeatureIcon>
               <img src={Vector} alt="Vector" style={{ width: 24, height: 24 }} />
              </FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Fresh for 3+ Weeks</FeatureTitle>
                <FeatureSubtitle>Revolutionary preservation technology</FeatureSubtitle>
              </FeatureContent>
            </FeatureBoxRed>

            <FeatureBoxGreen>
              <FeatureIcon>
                  <img src={zerowaste} alt="zerowaste" style={{ width: 24, height: 24 }} />
              </FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Zero Waste</FeatureTitle>
                <FeatureSubtitle>Perfect portion control technology</FeatureSubtitle>
              </FeatureContent>
            </FeatureBoxGreen>
          </TechGridRight>
        </TechGridContainer>
      </TechSectionContainer>
    </NewsletterContainer>

      <Newsletter />
    </>
  );
};

export default AboutUsPage;
