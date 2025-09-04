import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import palette from '../../themes/palette';

interface SignUpProps {
   setTab: (tab: "signin" | "signup") => void;
     onClose:()=>void;
}

const SignUp: React.FC<SignUpProps> = ({ setTab,onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    vipId: ''
  });

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<typeof form> = {};

    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.contact) newErrors.contact = 'Contact Number is required';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!form.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    else if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted ✅', form);
     onClose()
    }
  };

  return (
    <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleSubmit}>
      
      {/* Full Name */}
      <Box>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Full Name <span style={{ color: palette.primary.dark }}>*</span>
        </Typography>
        <TextField
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          fullWidth
          error={!!errors.fullName}
          helperText={errors.fullName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Email */}
      <Box>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Email Address <span style={{ color: palette.primary.dark }}>*</span>
        </Typography>
        <TextField
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Contact Number */}
      <Box>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          Contact Number <span style={{ color: palette.primary.dark }}>*</span>
        </Typography>
        <TextField
          name="contact"
          type="tel"
          value={form.contact}
          onChange={handleChange}
          fullWidth
          error={!!errors.contact}
          helperText={errors.contact}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>

<Box display="flex" gap={2}>
  <Box flex={1}>
    <Typography variant="body2" fontWeight="bold" mb={0.5}>
      Create Password <span style={{ color: 'red' }}>*</span>
    </Typography>
    <TextField
      name="password"
      type={showPassword ? "text" : "password"}
      value={form.password}
      onChange={handleChange}
      fullWidth
      error={!!errors.password}
      helperText={errors.password}
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

  {/* Confirm Password */}
  <Box flex={1}>
    <Typography variant="body2" fontWeight="bold" mb={0.5}>
      Confirm Password <span style={{ color: 'red' }}>*</span>
    </Typography>
    <TextField
      name="confirmPassword"
      type="password"
      value={form.confirmPassword}
      onChange={handleChange}
      fullWidth
      error={!!errors.confirmPassword}
      helperText={errors.confirmPassword}
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
</Box>


      {/* VIP Customer ID */}
      <Box>
        <Typography variant="body2" fontWeight="bold" mb={0.5}>
          VIP Customer ID
        </Typography>
        <TextField
          name="vipId"
          value={form.vipId}
          onChange={handleChange}
          fullWidth
        />
      </Box>

      {/* Submit */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: palette.primary.dark,
          borderRadius: '8px',
          py: 1.2,
          fontWeight: 'bold'
        }}
      >
        Submit
      </Button>

      <Typography variant="body2" align="center">
        If you have existing account?{" "}
        <Typography
          component="span"
          sx={{ color: palette.primary.dark, cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => setTab('signin')}
        >
          Login
        </Typography>
      </Typography>
    </Box>
  );
}

export default SignUp;
