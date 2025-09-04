import React, { useState } from "react";
import { Box, TextField, InputAdornment, IconButton, Button, Typography } from "@mui/material";
import { Email, Lock as LockIcon, Visibility, VisibilityOff } from "@mui/icons-material";
import palette from "../../themes/palette";

interface SignInProps {
  setTab: (tab: "signin" | "signup") => void;
  onClose:()=>void;
}

const SignIn: React.FC<SignInProps> = ({ setTab,onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        onClose()
      console.log("Form submitted ✅", form);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
      <Box>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Email Address <span style={{ color: palette.primary.dark }}>*</span>
        </Typography>
        <TextField
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email}
          InputLabelProps={{ shrink: true }} // 👈 keeps label always on top
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Password<span style={{ color: palette.primary.dark }}>*</span>
        </Typography>
        {/* Password Field */}
        <TextField
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          required
          fullWidth
          error={Boolean(errors.password)}
          helperText={errors.password}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Typography
        variant="body2"
        textAlign="right"
        sx={{ cursor: "pointer", color: palette.primary.dark }}
      >
        Forgot password?
      </Typography>

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
