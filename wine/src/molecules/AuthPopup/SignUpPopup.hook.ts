// src/hooks/signUp.hook.ts
import { useState } from "react";
import { signUpValidationSchema } from "../../validationSchemas/authPopupSchema";

export interface SignUpForm {
  fullName: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
  vipId: string;
}

export interface SignUpErrors {
  fullName?: string;
  email?: string;
  contact?: string;
  password?: string;
  confirmPassword?: string;
  vipId?: string;
}

export const useSignUp = (onClose: () => void) => {
  const [form, setForm] = useState<SignUpForm>({
    fullName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    vipId: "",
  });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (name: keyof SignUpForm, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validate = async (): Promise<boolean> => {
    try {
      await signUpValidationSchema.validate(form, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const newErrors: SignUpErrors = {};
      if (err.inner) {
        err.inner.forEach((validationError: any) => {
          if (validationError.path) {
            newErrors[validationError.path as keyof SignUpForm] = validationError.message;
          }
        });
      }
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      console.log("Form Submitted", form);
      onClose();
    }
  };

  return {
    form,
    errors,
    showPassword,
    handleChange,
    setShowPassword,
    handleSubmit,
  };
};
