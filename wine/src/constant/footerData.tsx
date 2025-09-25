import { facebook, twitter, instagram, linkedin } from "../assets";
export const FOOTER_DATA = {
  companyInfo: {
    title: "Company Info",
    links: [
      { text: "About Us", href: "/aboutUs" },
      { text: "Careers", href: "/careers" },
      { text: "Store Locator", href: "#" },
    ],
  },
  customerService: {
    title: "Customer Service",
    links: [
      { text: "Contact Us", href: "/contactUs" },
      { text: "FAQs", href: "#" },
      { text: "Pickup Process", href: "/pickupProcess" },
    ],
  },
  shopByCategory: {
    title: "Shop By Category",
    links: [
      { text: "Wines", href: "/productsList?category=wines" },
      { text: "Beer", href: "/productsList?category=beers" },
      { text: "Liquor", href: "/productsList?category=liquor" },
    ],
  },
  legalInfo: {
    title: "Legal & Info",
    links: [
      { text: "Terms & Conditions", href: "/terms" },
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Accessibility Statement", href: "#" },
    ],
  },
} as const;

export const LOGO_TEXT = "LOGO TEXT";

export const SOCIAL_ICONS = [
  { icon: instagram, href: "https://www.instagram.com/wine_outlet/#", label: "Instagram" },
  { icon: facebook, href: "https://www.facebook.com/WineOutletNJ/", label: "Facebook" },
  { icon: linkedin, href: "https://www.linkedin.com/company/wine-outlet/", label: "LinkedIn" },
  { icon: twitter, href: "https://x.com/wineoutletnj", label: "Twitter" },
] as const;
