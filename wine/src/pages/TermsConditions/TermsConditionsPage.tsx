import React from "react";
import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import DynamicAccordian from "../../molecules/DynamicAccordian/DynamicAccordian";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

const TermsConditionsPage = () => {
  return (
    <>
      <PrivacyBaneer
        heading="Terms of Agreement"
        description="Please read these terms carefully before using our website."
      />

      <DynamicAccordian
        title="Agreement overview"
        content="This is an Agreement between you and Wine Outlet (“Company”). This Agreement governs your use of this Web site (the “Site”). You represent that you are at least 21 years of age. THE COMPANY OFFERS THE SITE TO YOU CONDITIONED ON YOUR ACCEPTANCE WITHOUT MODIFICATION OF THIS AGREEMENT. YOUR USE OF THE SITE CONSTITUTES YOUR ACCEPTANCE OF THIS AGREEMENT. THIS AGREEMENT CONTAINS DISCLAIMERS OF WARRANTIES AND LIABILITY (SEE SECTIONS 5 AND 6) AND AN EXCLUSIVE REMEDY (SEE SECTION 7). THESE PROVISIONS FORM AN ESSENTIAL BASIS FOR YOUR USE OF THE SITE."
        contentTwo="This Agreement constitutes the entire agreement of the parties with respect to its subject matter, and supersedes all previous written or oral agreements of the parties with respect to such subject matter. No waiver by either party of any breach or default by the other shall be deemed to be a waiver of any preceding or subsequent breach or default."
        icon={<DescriptionOutlinedIcon />}
      />

      <DynamicAccordian
        title="Site usage"
        content="You agree not to use the Site in any way that is unlawful."
        contentTwo=" The Company reserves the right to modify the terms, conditions and notices under which it offers the Site without notice. Your continued use of the Site after any such changes constitutes your agreement to such changes."
        contentThree=" The Company further reserves the right to change prices and other information on the Site at any time without notice. The posting of prices and other terms of sale shall not constitute a binding order to sell products on such terms."
        icon={<LanguageOutlinedIcon />}
      />

      <DynamicAccordian
        title="Intellectual property"
        content="All content, including without limitation graphics, logos, text, images and other features, appearing on the Site, are the copyrights, trademarks and other intellectual property owned, controlled or licensed by the Company or third parties. This content is protected by copyright separately and as a collective work or compilation under U.S. and international copyright law and is the property of the Company, its licensors, or the party credited as the provider of the content or other third-party owners of the content, as the case may be."
        icon={<FingerprintOutlinedIcon />}
      />

      <DynamicAccordian
        title="Restrictions"
        content="As the user of this Site you may not copy, distribute, transmit, reproduce, publish, create derivative works or in any way use any of the content on this Site without the prior written permission of Beverage Media Group of New York (“BMG”), the Company’s authorized representative. This prohibition includes without limitation the publication of any part of this content on any other Web site, selling or offering it for sale, or using it to create any kind of database. Any requests for permission to use content on this Site should be directed to Legal."
        icon={<NotInterestedOutlinedIcon />}
      />

      <DynamicAccordian
        title="Disclaimer of warranties"
        content="This site is provided by the company on an “as is” Basis. The company, to the maximum extent permitted by applicable law, makes no representations or warranties of any kind, express or implied, as to the operation of the site or the information, content, materials, or products included on this site. The company disclaims all warranties, express, statutory or implied, including without limitation implied warranties of merchantability and fitness for a particular purpose; warranties or conditions of workmanlike effort, accuracy, title, quiet enjoyment, no encumbrances, no liens and non-infringement; warranties or conditions arising through course of dealing or usage of trade; and warranties or conditions that access to or use of the site will be uninterrupted or error free."
        icon={<GppGoodOutlinedIcon />}
      />

      <DynamicAccordian
        title="Limitation of liability"
        content="The company will not be liabile for any damages of any kind arising from the use of this site, including without limitation direct, indirect, incidental, punitive and consequential damages, even if the company or an authorized representative has been advised of the possibility of such damages. Applicable law may not permit the limitation or exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you. This exclusion of damages is independent of the exclusive remedy described below and shall survive in the event that such remedy fails of its essential purpose or is otherwise deemed unenforceable."
        icon={<WarningAmberOutlinedIcon />}
      />

      <DynamicAccordian
        title="Exclusive remedy"
        content="In no event shall the company’s total liability to you for all damages, losses and causes of action (whether or not in contract, tort (including without limitation negligence), or otherwise) exceed the amount paid by you, if any, for accessing this or any other company site."
        icon={<NoteAltOutlinedIcon />}
      />

      <DynamicAccordian
        title="Links to other site"
        content="This Site contains links to additional resources. The Company does not have any control over, and, therefore, is not responsible for, the content or availability of these other resources."
        icon={<InsertLinkOutlinedIcon />}
      />

      <DynamicAccordian
        title="Governing law"
        content="This Agreement shall be governed by, and construed in accordance with, the laws of the State of New York, without regard to its conflict of laws rules."
        icon={<BalanceOutlinedIcon />}
      />
    </>
  );
};

export default TermsConditionsPage;
