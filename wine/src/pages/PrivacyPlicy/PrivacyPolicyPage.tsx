import React from "react";
import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import DynamicAccordian from "../../molecules/DynamicAccordian/DynamicAccordian";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import star from "../../assets/productView/star.svg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ShareIcon from "@mui/icons-material/Share";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TransparencyCard from "../../organisms/TransparencyCard/TransparencyCard";
const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyBaneer
        heading="Privacy Policy"
        description="Wine Outlet is committed to your privacy. We are making our information policies transparent."
      />
      <TransparencyCard />
      <DynamicAccordian
        title="Information Collection and Use"
        content="Wine Outlet is the sole owner of the information collected on this site. We will not sell, share, or rent this information to others in ways different from what is disclosed in this statement. Wine Outlet collects information from our customers at several different points on our website."
        icon={<DatasetOutlinedIcon />}
      />

      <DynamicAccordian
        title="Registration"
        content="No registration is required in order to use this website, although a customer must create an account prior to any purchase. During account creation a customer is required to give their name, email address, zip code, and a password. This information is used to contact our customers about the services on our site for which they have expressed interest. It is optional for a customer to provide a phone number, but encouraged so we can have another means to contact you regarding your order."
        icon={<PersonOutlineOutlinedIcon />}
      />

      <DynamicAccordian
        title="Ordering"
        content="We request information from our customers on our order form. Here a customer must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill the customer’s orders. If we have trouble processing an order, this contact information is used to get in touch with the user. If a requested vintage is unavailable, we hold the right to substitute the most current vintage for the particular item."
        icon={<ShoppingCartOutlinedIcon />}
      />

      <DynamicAccordian
        title="Pricing Policy"
        content='Prices on internet items are not applicable when shopping at our store location. To purchase items for internet prices, simply place an order online and choose "In Store Pick Up" as your shipping option.'
        icon={<MonetizationOnOutlinedIcon />}
      />

      <DynamicAccordian
        title="Gift Recipients"
        content="We collect contact information for gift recipients in order to ensure correct gift delivery. We do not sell or rent any contact information for gift recipients. Beyond completing delivery of their gift, we do not contact gift recipients in any way."
        icon={<CardGiftcardIcon />}
      />

      <DynamicAccordian
        title="Cookies"
        content="A cookie is a piece of data stored on the visitor's hard drive containing information specific to that visitor's use of the website. Any information placed in the cookie is accessible only to www.wineoutlet.com, and will not be sold or shared with anyone else under any circumstances. We use a cookie to store a unique session identifier, and this allows us to maintain your shopping cart from one page request to the next. We are also able to maintain your session information from one visit to the next. By setting a cookie on our site, our customers do not have to log in more than once, thereby saving time while on our site. If a customer rejects the cookie, they may still browse our site. Unfortunately, the customer experience will be greatly curtailed, as the customer will be unable to log in or make a purchase."
        icon={<img src={star} alt="star" style={{ width: 24, height: 24 }} />}
      />

      <DynamicAccordian
        title="Log Files"
        content="We use IP addresses to analyze trends, administer the site, track customer's movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information."
        icon={<DescriptionOutlinedIcon />}
      />

      <DynamicAccordian
        title="Sharing"
        content="Wine Outlet will share aggregate demographic information with its partners. This is not linked to any personal information that can identify any individual person."
        contentTwo="We use an outside shipping company to ship orders, and a credit card processing company to bill customers for goods and services. Our website is supported by the Beverage Network who help with the technical operation of our website and provide additional service as required. These companies do not retain, share, store or use personally identifiable information for any secondary purposes"
        contentThree="We value your privacy very much at Wine Outlet, and will never release any account information to anyone outside of the necessary core groups that help our business function, like those mentioned above unless our customers give us the authority to do so."
        icon={<ShareIcon />}
      />

      <DynamicAccordian
        title="Links to Other Sites"
        content="This web site contains links to other sites. Please be aware that Wine Outlet is not responsible for the privacy practices of such other sites. We encourage our customers to be aware when they leave our site and to read the privacy statements of each and every web site that collects personally identifiable information. This privacy statement applies solely to information collected by this Web site."
        icon={<InsertLinkIcon />}
      />

      <DynamicAccordian
        title="Newsletter"
        content="If a customer wishes to subscribe to our newsletter, we ask for contact information such as name and email address and zip code. If at any time you should wish to unsubscribe, simply follow the link in your newsletter to update your email preferences. You may reach us through our Customer Service department."
        icon={<MailOutlineIcon />}
      />

      <DynamicAccordian
        title="Security"
        content="When our order form asks customers to enter sensitive information (such as credit card number and/or social security number), that information is encrypted and is protected with the best encryption software in the industry - SSL (Secure Socket Layers), provided by Thawte, a leading encryption software company available today. While on a secure page such as our order form, the lock icon on the bottom of Web browsers such as Netscape Navigator and Microsoft Internet Explorer becomes locked, as opposed to unlocked, or open, when you are just 'surfing'."
        contentTwo="While we use SSL encryption to protect sensitive information online, we also do everything in our power to protect customer-information offline. All of our customers' information, like the sensitive information mentioned above, is restricted in our offices. Only employees who need the information to perform a specific job (for example, a salesperson) are given access to personally identifiable information."
        contentThree="If you have any questions about the security at our website, you can send an email to our Customer Service department"
        icon={<HttpsOutlinedIcon />}
      />

      <DynamicAccordian
        title="Correcting/Updating Personal Information"
        content='If your personal information changes (such as your shipping or billing address, etc.), you can add new information or delete any addresses or credit cards from your account at the "My Account" page of our site. You can also modify your login information and opt out of our newsletter from the same page. Of course, if you prefer speak to a human, we can be reached at 732-528-0123.'
        icon={<EditNoteOutlinedIcon />}
      />
    </>
  );
};

export default PrivacyPolicyPage;
