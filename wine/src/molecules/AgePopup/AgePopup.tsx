import React from "react";
import { Formik, Form, Field } from "formik";
import { useAgePopup } from "./AgePopup.hook";
import * as Styled from "./AgePopup.style";
import { formatDate } from "../../utils/dateFormate";
import { IconButton, InputAdornment } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

export interface AgePopupProps {
  open: boolean;
  onClose: () => void;
  onVerify: () => void;
}

const AgePopup = ({ open, onClose, onVerify }: AgePopupProps) => {
  const { validationSchema, initialValues, handleSubmit } = useAgePopup(onVerify);

  return (
    <Styled.StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Styled.StyledDialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Styled.Container>
                <Styled.LogoSection>
                  <Styled.RedCircle />
                  <Styled.LogoImage alt="logo" src="/loader.gif" />
                </Styled.LogoSection>
                <Styled.Title>Age Verification Required</Styled.Title>
                <Styled.Subtitle>
                  You must be 21 years or older to access this website
                </Styled.Subtitle>
                <Styled.InputSection>
                  <Styled.InputLabel>Date of Birth</Styled.InputLabel>
                  <Field name="dateOfBirth">
                    {({ field, form }: any) => (
                      <Styled.StyledTextField
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const formatted = formatDate(e.target.value);
                          form.setFieldValue("dateOfBirth", formatted);
                        }}
                        placeholder="MM/DD/YYYY"
                        variant="outlined"
                        fullWidth
                        error={form.touched.dateOfBirth && !!form.errors.dateOfBirth}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton edge="start" disableRipple>
                                <CalendarToday fontSize="small" />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </Field>
                  {touched.dateOfBirth && errors.dateOfBirth && (
                    <Styled.ErrorText>{errors.dateOfBirth}</Styled.ErrorText>
                  )}
                </Styled.InputSection>

                {/* Buttons */}
                <Styled.ButtonsSection>
                  <Styled.VerifyButton type="submit">Verify Age</Styled.VerifyButton>
                  <Styled.ExitButton onClick={onClose}>Exit</Styled.ExitButton>
                </Styled.ButtonsSection>

                {/* Disclaimer */}
                <Styled.Disclaimer>
                  By continuing, you certify that you are legal drinking age in location.
                </Styled.Disclaimer>
              </Styled.Container>
            </Form>
          )}
        </Formik>
      </Styled.StyledDialogContent>
    </Styled.StyledDialog>
  );
};

export default AgePopup;
