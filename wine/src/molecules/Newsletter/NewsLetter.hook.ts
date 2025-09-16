import { useState } from "react";
import { toast } from "react-toastify";
import { useSendNewsletterMutation } from "../../store/apis/Home/HomeAPI";

export type NewsletterForm = {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  preferredStore: string;
  alcoholPreferences: string;
};

const initialForm: NewsletterForm = {
  fullName: "",
  countryCode: "US",
  phoneNumber: "",
  email: "",
  preferredStore: "",
  alcoholPreferences: "",
};

export const useNewsletter = () => {
  const [formData, setFormData] = useState<NewsletterForm>(initialForm);
  const [sendNewsletter, { isLoading }] = useSendNewsletterMutation();

  const handleInputChange = (field: keyof NewsletterForm) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => setFormData(initialForm);

  const handleSubscribe = async () => {
    const missingFields: string[] = [];

    if (!formData.fullName?.trim()) missingFields.push("Full Name");
    if (!formData.phoneNumber?.trim()) missingFields.push("Phone Number");
    if (!formData.email?.trim()) missingFields.push("Email");
    if (!formData.preferredStore?.trim()) missingFields.push("Preferred Store");
    if (!formData.alcoholPreferences?.trim()) missingFields.push("Alcohol Preferences");

    if (missingFields.length > 0) {
      toast.error(`Please fill in: ${missingFields.join(", ")}`);
      return;
    }

    const payload = {
      userId: 1, // replace from auth if available
      userIp: "1", // or collect real IP on server
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      preferredStore: formData.preferredStore ? [formData.preferredStore] : [],
      preferredAlcohol: formData.alcoholPreferences ? [formData.alcoholPreferences] : [],
    };

    try {
      await sendNewsletter(payload).unwrap();
      toast.success("Subscribed to newsletter successfully!");
      resetForm();
    } catch (err: any) {
      const message =
        err?.data?.error ||
        err?.data?.details ||
        err?.message ||
        "Subscription failed. Please try again.";
      toast.error(message);
      console.error("newsletter error", err);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubscribe,
    isLoading,
    resetForm,
  } as const;
};

export default useNewsletter;
