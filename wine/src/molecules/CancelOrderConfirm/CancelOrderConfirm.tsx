import React from "react";
import * as Styled from "../../molecules/AgePopup/AgePopup.style"; // adjust relative path if needed

export interface CancelOrderConfirmProps {
  open: boolean;
  orderId?: string | null;
  onClose: () => void;
  onConfirm: (orderId?: string | null) => void;
}

const CancelOrderConfirm: React.FC<CancelOrderConfirmProps> = ({
  open,
  orderId,
  onClose,
  onConfirm,
}) => {
  return (
    <Styled.StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Styled.StyledDialogContent>
        <Styled.Container>
          <Styled.LogoSection>
            <Styled.RedCircle />
            <Styled.LogoImage alt="logo" src="/loader.gif" />
          </Styled.LogoSection>

          <Styled.ConfirmTitle>Cancel the Order</Styled.ConfirmTitle>

          <Styled.ConfirmSubtitle>
            Are you sure about canceling the selected order{orderId ? ` — ${orderId}` : "."}
          </Styled.ConfirmSubtitle>

          <Styled.ConfirmButtonsSection>
            <Styled.ConfirmPrimary
              onClick={() => {
                onConfirm(orderId ?? null);
              }}
              type="button"
            >
              Yes, Cancel
            </Styled.ConfirmPrimary>

            <Styled.ConfirmSecondary onClick={onClose} type="button">
              No, Go Back
            </Styled.ConfirmSecondary>
          </Styled.ConfirmButtonsSection>
        </Styled.Container>
      </Styled.StyledDialogContent>
    </Styled.StyledDialog>
  );
};

export default CancelOrderConfirm;
