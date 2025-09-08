import React, { useState } from "react";
import { StyledButton } from "../../organisms/Authentication/AuthDialog.style";
import ProfileInformation from "../ProfilePages/ProfileInformation";
import VIPMembership from "../ProfilePages/VIPMembership";
import Password from "../ProfilePages/Password";
import * as Styled from "./ProfileTabs.style";

const ProfileTabs = () => {
  const [tab, setTab] = useState<"profile" | "vip" | "pwd">("profile");
  const ProfileData = {
    CustomerID: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 9876543210",
    address: "abc",
    zipCode: "1234",
    vipMembership: {
      isActive: true,
      barcodeNumber: "VIP123456789",
      expiryDate: "2025-12-31",
      memberId: "1234",
      memberName: "MEMBERNAME",
    },
  };

  return (
    <Styled.ProfileTabsContainer>
      <Styled.TabsWrapperStyled profile={true}>
        <StyledButton
          active={tab === "profile"}
          onClick={() => setTab("profile")}
          fullWidth
          profile={true}
        >
          Profile Information
        </StyledButton>
        <StyledButton active={tab === "vip"} onClick={() => setTab("vip")} fullWidth profile={true}>
          VIP Membership
        </StyledButton>
        <StyledButton active={tab === "pwd"} onClick={() => setTab("pwd")} fullWidth profile={true}>
          Password
        </StyledButton>
      </Styled.TabsWrapperStyled>

      <Styled.TabFieldsStyled>
        {tab === "profile" ? (
          <ProfileInformation initialData={ProfileData} />
        ) : tab === "vip" ? (
          <VIPMembership initialData={ProfileData.vipMembership} />
        ) : (
          <Password />
        )}
      </Styled.TabFieldsStyled>
    </Styled.ProfileTabsContainer>
  );
};

export default ProfileTabs;
