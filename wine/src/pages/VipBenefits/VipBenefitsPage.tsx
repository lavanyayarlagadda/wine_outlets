import React from "react";
import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import {
  VIPContainer,
  SectionHeading,
  SubHeading,
  BodyText,
  IconList,
  ListItemContent,
  VIPMainContainer,
} from "./VipBenefits.style";
import { ListItem, ListItemIcon } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WineBarIcon from "@mui/icons-material/WineBar";
import CelebrationIcon from "@mui/icons-material/Celebration";

const VipBenefitsPage = () => {
  return (
    <>
      <PrivacyBaneer
        heading="VIP Membership"
        description="Join our exclusive club and elevate your wine experience."
      />

      <VIPMainContainer>
        <SectionHeading>VIP Membership - $10/year</SectionHeading>
        <BodyText>
          Enjoy exclusive access to savings, tastings, and events designed for wine lovers.
        </BodyText>

        <VIPContainer>
          <SubHeading> Exclusive Discounts on Wines</SubHeading>
          <IconList dense>
            <ListItem>
              <ListItemIcon>
                <LocalOfferIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Special VIP Pricing: Hundreds of wines across the store are marked with yellow VIP tags." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalOfferIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="750ml Bottle Discounts: Save more on standard-sized bottles — perfect for stocking up." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalOfferIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="12-Bottle Case Savings: Purchase any 12 bottles and unlock additional discounts." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalOfferIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Stacked Value: VIP discounts are designed to offer savings beyond everyday promotions." />
            </ListItem>
          </IconList>
        </VIPContainer>

        <VIPContainer>
          <SubHeading> Wine Sampling Experience</SubHeading>
          <IconList dense>
            <ListItem>
              <ListItemIcon>
                <WineBarIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Daily Tastings: Sample up to 8 half-ounce pours every day from our Wine Sampling Machine." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WineBarIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Taste Before You Buy: Discover new varietals and regions without committing to a full bottle." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WineBarIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Curated Selections: Our sampling machine rotates featured wines weekly." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WineBarIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Exclusive Access: Certain rare or limited wines may only be available for VIP members." />
            </ListItem>
          </IconList>
        </VIPContainer>

        <VIPContainer>
          <SubHeading> Member-Only Exclusives & Events</SubHeading>
          <IconList dense>
            <ListItem>
              <ListItemIcon>
                <CelebrationIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Early Access to Limited Releases: Be the first to secure rare and special edition wines." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CelebrationIcon color="primary" />
              </ListItemIcon>
              <ListItemContent primary="Exclusive Recommendations: Monthly VIP newsletters with curated wine picks and pairing guides." />
            </ListItem>
          </IconList>
        </VIPContainer>

        <VIPContainer>
          <SubHeading>Important Notes</SubHeading>
          <BodyText>• Offers cannot be combined with other promotions.</BodyText>
          <BodyText>• Lost VIP cards must be repurchased.</BodyText>
          <BodyText>• Membership is valid for 1 year from the date of purchase.</BodyText>
        </VIPContainer>
      </VIPMainContainer>
    </>
  );
};

export default VipBenefitsPage;
