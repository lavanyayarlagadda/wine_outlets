import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import CustomCards from "../../molecules/CustomCard/CustomCards";
import { Newsletter } from "../../molecules";

const PickupProcessPage = () => {
  return (
    <>
      <PrivacyBaneer
        heading="Store Pickup Policy"
        description="At Wine Outlet, all orders are fulfilled through store pickup only. Please review the following guidelines to ensure a smooth pickup experience"
      />

      <CustomCards
        number={1}
        header=" Pickup Slot & Preparation"
        items={[
          "You must select a pickup slot while placing your order.",
          "Orders are generally ready within 15 minutes of your selected slot.",
          "During peak hours, minor delays may occur.",
        ]}
      />

      <CustomCards
        number={2}
        header="Order Confirmation"
        items={[
          "Once you place your order, a confirmation email will be sent to your registered email address.",
          "Please present this confirmation email, along with a valid government-issued photo ID, at the time of pickup.",
        ]}
      />

      <CustomCards
        number={3}
        header="Payments"
        items={[
          "No online payments are accepted at this time.",
          "Payment must be made in-store when you pick up your order.",
        ]}
      />

      <CustomCards
        number={4}
        header="Order Retention & Cancellation"
        items={[
          "Orders will be retained until the end of the same day as your pickup slot.",
          "If you do not collect your order within this time, it will be automatically cancelled.",
          "Orders cannot be modified once placed.",
          "Orders may only be cancelled before pickup (before they are prepared).",
        ]}
      />

      <CustomCards
        number={5}
        header="Pickup by a Third Party"
        description="If someone else is collecting your order, they must present:"
        items={["The order confirmation email, and", "Their valid government-issued photo ID."]}
      />

      <Newsletter />
    </>
  );
};

export default PickupProcessPage;
