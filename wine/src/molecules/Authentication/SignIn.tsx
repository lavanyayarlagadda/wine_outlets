import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { Email, Lock as LockIcon, Visibility, VisibilityOff } from "@mui/icons-material";
import palette from "../../themes/palette";
import { CustomTextField } from "../../atoms";

const SignIn = ({ setTab, onClose }: { setTab: any; onClose: any }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Min 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onClose();
      console.log("Form submitted ✅", form);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
      <CustomTextField
        label="Email Address"
        value={form.email}
        onChange={(val) => handleChange("email", val)}
        startIcon={<Email />}
        required
        error={errors.email}
      />

      <CustomTextField
        label="Password"
        value={form.password}
        onChange={(val) => handleChange("password", val)}
        required
        error={errors.password}
        type={showPassword ? "text" : "password"}
        endIcon={
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />

      <Typography
        variant="body2"
        textAlign="right"
        sx={{ cursor: "pointer", color: palette.primary.dark }}
      >
        Forgot password?
      </Typography>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: palette.primary.dark,
          borderRadius: "8px",
          py: 1.2,
          fontWeight: "bold",
        }}
      >
        Submit
      </Button>

      {/* Bottom Sign Up Text */}
      <Typography variant="body2" align="center">
        Don’t have an account?{" "}
        <Typography
          component="span"
          sx={{ color: palette.primary.dark, cursor: "pointer", fontWeight: "bold" }}
          onClick={() => setTab("signup")}
        >
          Sign Up
        </Typography>
      </Typography>
    </Box>
  );
};

export default SignIn;
