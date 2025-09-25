import React from "react";
import CustomCards from "../../molecules/CustomCard/CustomCards";

const TransparencyCard: React.FC = () => {
  return (
     <CustomCards
      header="Transparency at Wine Outlet"
      description="We want to make our information policies clear and accessible. This privacy policy outlines how we collect, use, and protect your personal information."
      innerTitle="In this policy, you'll learn about:"
      items={[
        "What personal data we collect",
        "With whom it is shared",
        "How we ensure its security",
        "How we use it",
        "How you can correct inaccuracies",
      ]}
    />
  );
};

export default TransparencyCard;
