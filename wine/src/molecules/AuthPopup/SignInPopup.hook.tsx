// src/hooks/signIn.hook.ts
import { useState } from "react";
import * as Yup from "yup";

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInErrors {
  email?: string;
  password?: string;
}

export const useSignIn = (onClose: () => void) => {
  const [form, setForm] = useState<SignInForm>({ email: "", password: "" });
  const [errors, setErrors] = useState<SignInErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (name: keyof SignInForm, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  });

  const validate = async (): Promise<boolean> => {
    try {
      await validationSchema.validate(form, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const newErrors: SignInErrors = {};
      if (err.inner) {
        err.inner.forEach((validationError: any) => {
          if (validationError.path)
            newErrors[validationError.path as keyof SignInForm] = validationError.message;
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
      onClose();
      console.log("Form submitted", form);
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
