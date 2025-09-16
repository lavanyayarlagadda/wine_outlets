// src/hooks/signUp.hook.ts
import { useState } from "react";
import { signUpValidationSchema } from "../../validationSchemas/authPopupSchema";
import { useSignUpMutation } from "../../store/apis/Authentication/AuthAPI";
import { useDispatch } from "react-redux";
import type { SignUpResponse } from "../../store/Interfaces/AuthInterface/AuthIterface";
import { setCredentials } from "../../store/slices/Auth/AuthSlice";

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
  vipId: string;
}

export interface SignUpErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  contact?: string;
  password?: string;
  confirmPassword?: string;
  vipId?: string;
  form?: string;
}

export const useSignUp = (onClose: () => void) => {
  const dispatch = useDispatch();
  const [signUp] = useSignUpMutation();
  const [form, setForm] = useState<SignUpForm>({
    firstName: "",
    lastName: "",
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

  // const validate = async (): Promise<boolean> => {
  //   try {
  //     await signUpValidationSchema.validate(form, { abortEarly: false });
  //     setErrors({});
  //     return true;
  //   } catch (err: any) {
  //     const newErrors: SignUpErrors = {};
  //     if (err.inner) {
  //       err.inner.forEach((validationError: any) => {
  //         if (validationError.path) {
  //           newErrors[validationError.path as keyof SignUpForm] = validationError.message;
  //         }
  //       });
  //     }
  //     setErrors(newErrors);
  //     return false;
  //   }
  // };

  const validate = async (): Promise<boolean> => {
  try {
    await signUpValidationSchema.validate(form, { abortEarly: true }); // faster, stops at first error
    setErrors({});
    return true;
  } catch (err: any) {
    const firstError = err.inner?.[0];
    const newErrors: SignUpErrors = {};
    if (firstError && firstError.path) {
      newErrors[firstError.path as keyof SignUpForm] = firstError.message;
    }
    setErrors(newErrors);
    return false;
  }
};


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const isValid = await validate();
  //   console.log("Validation result:", isValid);
  //   if (isValid) {
  //     console.log("Form data being sent:", form);
  //     try {
  //       const result: SignUpResponse = await signUp({
  //         userName: `${form.firstName} ${form.lastName}`,
  //         firstName: form.firstName,
  //         lastName: form.lastName,
  //         Email: form.email,
  //         contactNumber: form.contact,
  //         createPwd: form.password,
  //         confirmPwd: form.confirmPassword,
  //         vipCustomerId: form.vipId,
  //       }).unwrap();

  //       // Dispatch user data and token to Redux store
  //       dispatch(
  //         setCredentials({
  //           token: result.token,
  //           customer: result,
  //         })
  //       );

  //       console.log("Signup Successful", result);

  //       onClose();
  //     } catch (error: any) {
  //       console.error("Signup failed:", error);
  //       setErrors({ form: error.data?.error || "Signup failed. Please try again." });
  //     }
  //   }
  // };


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("fommmm")
  try {
    const isValid = await validate();
    if (isValid) {
      console.log("valid");
      const result: SignUpResponse = await signUp({
        userName: `${form.firstName} ${form.lastName}`,
        firstName: form.firstName,
        lastName: form.lastName,
        Email: form.email,
        contactNumber: form.contact,
        createPwd: form.password,
        confirmPwd: form.confirmPassword,
        vipCustomerId: form.vipId,
      }).unwrap();
      
      console.log("Signup Successful", result);

      dispatch(setCredentials({
        token: result.token,
        customer: result,
      }));

      onClose();
    } else {
      console.log("Form validation failed");
    }
  } catch (err: any) {
    console.error("Unexpected error in handleSubmit:", err);
    setErrors({ form: err.data?.error || "Signup failed." });
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
