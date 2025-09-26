import React from "react";
import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EmailIcon from "@mui/icons-material/Email";

import { ListItem, ListItemIcon } from "@mui/material";
import {
  AccessibilityPaper,
  HeaderTypography,
  SubHeadingTypography,
  BodyTypography,
  FeaturesList,
  // FeedbackContent,
  ListItemContent,
  AccessibilityMainContainer,
} from "./AccessibilityStatement.styles";

const AccessibilityStatementPage = () => {
  return (
    <>
      <PrivacyBaneer
        heading="Accessibility Statement"
        description="Wine Outlet is committed to ensuring that our website is accessible to all users, including people with disabilities. We want every customer to be able to shop, access information, and use our services with ease."
      />

      <AccessibilityMainContainer>
        {/* Header */}
        <HeaderTypography>Accessibility Statement</HeaderTypography>

        {/* Our Commitment */}
        <AccessibilityPaper>
          <SubHeadingTypography>Our Commitment</SubHeadingTypography>
          <FeaturesList dense>
            {[
              "We strive to follow recognized accessibility standards such as the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.",
              "Our website is designed to be compatible with modern browsers and assistive technologies.",
              "We are continuously working to improve accessibility as we add new features and content.",
            ].map((text, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemContent primary={text} />
              </ListItem>
            ))}
          </FeaturesList>
        </AccessibilityPaper>
        {/* Features */}
        <AccessibilityPaper>
          <SubHeadingTypography>Features That Support Accessibility</SubHeadingTypography>
          <FeaturesList dense>
            {[
              "Clear navigation and consistent layout",
              "Alternative text for images where applicable",
              "Keyboard-friendly navigation",
              "Readable fonts and sufficient color contrast",
              "Responsive design for different devices and screen sizes",
            ].map((feature, idx) => (
              <ListItem key={idx}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemContent primary={feature} />
              </ListItem>
            ))}
          </FeaturesList>
        </AccessibilityPaper>

        <AccessibilityPaper>
          {/* Ongoing Efforts */}
          <SubHeadingTypography>Ongoing Efforts</SubHeadingTypography>
          <BodyTypography>
            We recognize that accessibility is an ongoing process. We regularly review our site and
            welcome feedback to identify areas for improvement.
          </BodyTypography>
        </AccessibilityPaper>
        {/* Feedback */}
        {/* <AccessibilityPaper>
          <SubHeadingTypography>Feedback & Assistance</SubHeadingTypography>
          <FeedbackContent>
            <EmailIcon color="primary" />
            <BodyTypography>
              <a href="mailto:support@wineoutlet.com">support@wineoutlet.com</a>
            </BodyTypography>
          </FeedbackContent>
        </AccessibilityPaper> */}
      </AccessibilityMainContainer>
    </>
  );
};

export default AccessibilityStatementPage;
