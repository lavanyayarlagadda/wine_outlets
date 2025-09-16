import { useEffect, useState } from "react";
import { profileSchema } from "../../validationSchemas/profileInfoSchema";
import { passwordSchema } from "../../validationSchemas/passwordSchema";

export const useProfileForm = (initialData?: any) => {
  const [form, setForm] = useState({
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    email: initialData?.email || "",
    phoneNumber: initialData?.phoneNumber || "",
    address: initialData?.address || "",
    zipCode: initialData?.zipCode || "",
    ...initialData,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: "",
    oldPassword: "",
  });

  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [vipCode, setVipCode] = useState(initialData?.barcodeNumber || "");

  const handleVipCodeChange = (value: string) => {
    setVipCode(value);
  };

  useEffect(() => {
    if (initialData) {
      setForm((prev: any) => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (field: string, value: string) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await profileSchema.validate(form, { abortEarly: false });
      setErrors({});
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      if (err.inner) {
        err.inner.forEach((e: any) => {
          validationErrors[e.path] = e.message;
        });
      }
      setErrors(validationErrors);
    }
  };

  const handleChangePassword = (field: string, value: string) => {
    setPasswordForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await passwordSchema.validate(form, { abortEarly: false });
      setPasswordErrors({});
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      if (err.inner) {
        err.inner.forEach((e: any) => {
          validationErrors[e.path] = e.message;
        });
      }
      setPasswordErrors(validationErrors);
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
    setForm,
    passwordErrors,
    passwordForm,
    handleChangePassword,
    handleSubmitPassword,
    showPassword,
    setShowPassword,
    vipCode,
    handleVipCodeChange,
  };
};
