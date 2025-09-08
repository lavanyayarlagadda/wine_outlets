import React, { useState } from "react";
import { StyledButton } from "../../organisms/Authentication/AuthDialog.style";
import ProfileInformation from "../ProfilePages/ProfileInformation";
import VIPMembership from "../ProfilePages/VIPMembership";
import Password from "../ProfilePages/Password";
import * as Styled from "./ProfileTabs.style";

const ProfileTabs = () => {
  const [tab, setTab] = useState<"profile" | "vip" | "pwd">("profile");

  return (
    <Styled.ProfileTabsContainer>
      <Styled.TabsWrapperStyled profile={true}>
        <StyledButton active={tab === "profile"} onClick={() => setTab("profile")} fullWidth>
          Profile Information
        </StyledButton>
        <StyledButton active={tab === "vip"} onClick={() => setTab("vip")} fullWidth>
          VIP Membership
        </StyledButton>
        <StyledButton active={tab === "pwd"} onClick={() => setTab("pwd")} fullWidth>
          Password
        </StyledButton>
      </Styled.TabsWrapperStyled>

      <Styled.TabFieldsStyled>
        {tab === "profile" ? (
          <ProfileInformation
            initialData={{
              firstName: "Wine",
              lastName: "Outlets",
              email: "wineOutlets@example.com",
              phoneNumber: "(123) 456-7890",
              address: "Hyderabad, Telangana",
              zipCode: "500001",
            }}
          />
        ) : tab === "vip" ? (
          <VIPMembership />
        ) : (
          <Password />
        )}
      </Styled.TabFieldsStyled>
    </Styled.ProfileTabsContainer>
  );
};

export default ProfileTabs;
