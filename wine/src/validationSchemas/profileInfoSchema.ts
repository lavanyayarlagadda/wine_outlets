import * as Yup from "yup";

// Matches (123) 456-7890 or +1 (123) 456-7890
const usPhoneRegex = /^(\+1\s?)?\(?[2-9][0-9]{2}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

export const profileSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(usPhoneRegex, "Enter a valid U.S. phone number"),
    // .required("Phone number is required"),
  address: Yup.string(),
  zipCode: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Enter a valid U.S. ZIP code")
    .required("ZIP code is required"),
});
