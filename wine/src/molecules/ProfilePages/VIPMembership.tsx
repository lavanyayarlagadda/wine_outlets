import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { theme } from "../../themes/theme";
import { CustomButton, CustomTextField } from "../../atoms";
import * as Styled from "./ProfilePages.style";
import shape from "../../themes/shape";
import { useProfileForm } from "./ProfilePages.hook";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import palette from "../../themes/palette";

const VipMembership = ({ initialData }: { initialData?: any }) => {
  const { vipCode, handleVipCodeChange, setShowPassword, showPassword } =
    useProfileForm(initialData);
  return (
    <>
      <Styled.Container>
        <Styled.HeaderBox>
          <Styled.TextBox>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                VIP Membership
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your exclusive access to member-only rewards and events.
              </Typography>
            </Box>
            <CustomButton
              text={"View VIP Benefits"}
              onClick={() => {}}
              bgColor={palette.white.main}
              color={theme.palette.primary.dark}
              btnBorderColor={theme.palette.primary.dark}
              border={shape.borderRed}
              profile={true}
            />
          </Styled.TextBox>
          <Styled.DividerLine />
        </Styled.HeaderBox>

        <Styled.VIPContainer>
          {/* VIP Card */}
          <Styled.GridItem>
            <Styled.VIPCard active={initialData.isActive}>
              {/* Top Row: Title + Expiry Date */}
              <Styled.CardTopRow>
                <Typography variant="h6" fontWeight="bold">
                  VIP Card
                </Typography>
                <Box>
                  <Typography variant="body2">Expire Date</Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {initialData.isActive ? initialData.expiryDate : ""}
                  </Typography>
                </Box>
              </Styled.CardTopRow>

              {/* Bottom Row: Member Name + Member ID */}
              <Styled.CardBottomRow>
                <Box>
                  <Typography variant="body2">Member Name</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {initialData.isActive ? initialData.memberName : ""}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">Member ID</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {initialData.isActive ? initialData.memberId : ""}
                  </Typography>
                </Box>
              </Styled.CardBottomRow>
            </Styled.VIPCard>
          </Styled.GridItem>

          {/* Barcode Form & Note */}
          <Styled.GridItem>
            <Styled.BarcodeForm>
              <CustomTextField
                label="VIP Bar-Code"
                value={vipCode}
                onChange={handleVipCodeChange} // pass string
                required
                type={showPassword ? "text" : "password"}
                endIcon={
               <IconButton
  onClick={() =>
    setShowPassword((prev) => ({ ...prev, old: !prev.old }))
  }
>
  {showPassword.old ? <VisibilityOff /> : <Visibility />}
</IconButton>

                }
                placeholder="Enter Your VIP-Bar Code"
              />

              <Styled.ButtonWrapper>
                <CustomButton
                  text={"Save"}
                  bgColor={theme.palette.primary.dark}
                  onClick={() => console.log("save")}
                  color=""
                />
              </Styled.ButtonWrapper>
            </Styled.BarcodeForm>

            <Styled.NoteAlert icon={false}>
              <Styled.AlertIcon>!</Styled.AlertIcon>
              VIP benefits gonna expire within this month. Please check and recharge the card to
              enjoy the benefits.
            </Styled.NoteAlert>
          </Styled.GridItem>
        </Styled.VIPContainer>
      </Styled.Container>
    </>
  );
};

export default VipMembership;
