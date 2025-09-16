import React, { useState } from "react";
import { CustomPopup } from "../../atoms";
import SignIn from "../../molecules/AuthPopup/SignIn";
import SignUp from "../../molecules/AuthPopup/SignUp";
import { TabsWrapper, StyledButton, TabFields } from "./AuthDialog.style";

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose }) => {
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

      <TabFields>
        {tab === "signin" ? (
          <SignIn setTab={setTab} onClose={onClose} />
        ) : (
          <SignUp setTab={setTab} onClose={onClose} />
        )}
      </TabFields>
    </CustomPopup>
  );
};

export default AuthDialog;
