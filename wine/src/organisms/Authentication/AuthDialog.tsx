import React, { useState } from "react";
import { Box } from "@mui/material";
import { CustomPopup } from "../../atoms";
import SignIn from "../../molecules/AuthPopup/SignIn";
import SignUp from "../../molecules/AuthPopup/SignUp";
import { TabsWrapper, StyledButton } from "./AuthDialog.style";

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose, setIsSubmit }) => {
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <CustomPopup
      open={open}
      onClose={onClose}
      title={tab === "signin" ? "Login Account" : "Sign Up Account"}
    >
      <TabsWrapper>
        <StyledButton active={tab === "signin"} onClick={() => setTab("signin")} fullWidth>
          Sign In
        </StyledButton>
        <StyledButton active={tab === "signup"} onClick={() => setTab("signup")} fullWidth>
          Sign Up
        </StyledButton>
      </TabsWrapper>

      <Box sx={{ pt: 2 }}>
        {tab === "signin" ? (
          <SignIn setTab={setTab} onClose={onClose} setIsSubmit={setIsSubmit} />
        ) : (
          <SignUp setTab={setTab} onClose={onClose} setIsSubmit={setIsSubmit} />
        )}
      </Box>
    </CustomPopup>
  );
};

export default AuthDialog;
