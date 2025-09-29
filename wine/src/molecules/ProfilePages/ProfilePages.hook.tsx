import { useEffect, useState } from "react";
import { profileSchema } from "../../validationSchemas/profileInfoSchema";
import { passwordSchema } from "../../validationSchemas/passwordSchema";
import {
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} from "../../store/apis/MyProfile/MyProfileAPI";
import { toast } from "react-toastify";

export const useProfileForm = (initialData?: any) => {
  const cunstomerId = localStorage.getItem("userId");
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();
  const [updatePassword] = useUpdatePasswordMutation();
  const [form, setForm] = useState({
    firstName: initialData?.firstname || "",
    lastName: initialData?.lastname || "",
    email: initialData?.email || "",
    phoneNumber: initialData?.phone || "",
    address: initialData?.address || "",
    zipCode: initialData?.zipCode || "",
    vipMembership: initialData?.vipMembership || {
      isActive: false,
      barcodeNumber: "",
      expiryDate: "",
    },
    ...initialData,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: "",
    oldPassword: "",
  });

  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [vipCode, setVipCode] = useState(initialData?.vipMembership?.barcodeNumber || "");

  const handleVipCodeChange = (value: string) => {
    setVipCode(value);
    setForm((prev: any) => ({
      ...prev,
      vipMembership: { ...prev.vipMembership, barcodeNumber: value },
    }));
  };

  useEffect(() => {
    if (initialData) {
      setForm((prev: any) => ({ ...prev, ...initialData }));
      setVipCode(initialData?.vipMembership?.barcodeNumber || "");
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

  const handleUpdateProfile = async () => {
    console.log("handleUpdateProfile");
    try {
      await profileSchema.validate(form, { abortEarly: false });
      setErrors({});

      const payload = {
        CustomerID: cunstomerId ?? "",
        name: `${form.firstName} ${form.lastName}`,
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        phone: form.phoneNumber,
        address: form.address,
        zipCode: form.zipCode,
        // vipMembership: form.vipMembership,
        vipMembership: {
          ...form.vipMembership,
          isActive: form.vipMembership.isActive ? true : false,
          barcodeNumber: vipCode,
        },
      };
console.log("Up", payload)
      const response = await updateProfile(payload).unwrap();
      toast.success("Profile updated successfully!");
      console.log("Updated profile:", response);
    } catch (err: any) {
      if (err.inner) {
        const validationErrors: Record<string, string> = {};
        err.inner.forEach((e: any) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      } else {
        toast.error("Failed to update profile");
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (passwordForm.password !== passwordForm.confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    try {
      const payload = {
        CustomerID: cunstomerId ?? "",
        oldPassword: passwordForm.oldPassword,
        newPassword: passwordForm.password,
      };

      const response: any = await updatePassword(payload).unwrap();
      if (response.message) {
        toast.success(response.message);
        setPasswordForm({ oldPassword: "", password: "", confirmPassword: "" });
      } else if (response.error) {
        toast.error(response.error);
      }
    } catch (err: any) {
      toast.error(err?.data?.error || "Failed to update password");
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
    handleUpdateProfile,
    updating,
    handleUpdatePassword,
  };
};
