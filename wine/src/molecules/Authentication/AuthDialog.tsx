import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Tabs,
  Tab,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import { CustomPopup } from "../../atoms";
import palette from "../../themes/palette";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <CustomPopup
        open={open}
        onClose={onClose}
        title={tab === "signin" ? "Login Account" : "Sign Up Account"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#f5f5f5",
            borderRadius: "8px",
            p: 0.5,
          }}
        >
          <Button
            onClick={() => setTab("signin")}
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              minHeight: "36px",
              bgcolor: tab === "signin" ? palette.primary.light : "transparent",
              color: tab === "signin" ? "black" : "text.secondary",
              boxShadow: tab === "signin" ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => setTab("signup")}
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              minHeight: "36px",
              bgcolor: tab === "signup" ? palette.primary.light : "transparent",
              color: tab === "signup" ? "black" : "text.secondary",
              boxShadow: tab === "signup" ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Box sx={{ pt: 2 }}>
          {tab === "signin" ? <SignIn setTab={setTab} onClose={onClose} /> : <SignUp setTab={setTab} onClose={onClose} />}
        </Box>
      </CustomPopup>
    </>
  );
};

export default AuthDialog;
