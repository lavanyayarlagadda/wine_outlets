import React from "react";
import {
  DividerLine,
  HeaderTitle,
  MainContainer,
  ProductContent,
  ProductHeader,
} from "../OrderSummary/OrderSummary.style";
// import RotateRightRoundedIcon from '@mui/icons-material/RotateRightRounded';
import {SmallAccessTimeIcon, SmallLocalPhoneIcon,PhoneNumber, SmallRotateIcon, StoreName, StoreAddress, PhoneTimeRow,  ButtonIcon, ButtonText, StoreButton } from "./PickupInfo.style";
import PickupDateTimePicker from "../PickupDateTimePicker/PickupDateTimePicker";

//  storeName: "Oceanview Spirits & Liquors",
//     address: "1234 Coastal Blvd, Ocean City, NJ 08226",
//     hours: "9:00 a.m - 10:00 p.m",
//     phone: "827-377-72512",
interface PickupInformationProps {
  title: string;
  storeName: string;
  address: string;
  hours?: string;
  vipCodeMessage?: string;
  phone: string;
  footerTitle:string
}
const PickupInformation: React.FC<PickupInformationProps> = ({
  title,
  storeName,
  address,
  hours,
  phone,
  footerTitle
}) => {
  return (
    <MainContainer>
      <ProductHeader>
        <HeaderTitle>{title}</HeaderTitle>
        {/* <HeaderTitle>
          ({itemCount} Item{itemCount > 1 ? "s" : ""})
        </HeaderTitle> */}
         <StoreButton >
      <ButtonIcon>
        <SmallRotateIcon />
      </ButtonIcon>
      <ButtonText>Change Store</ButtonText>
    </StoreButton>
      </ProductHeader>
      <DividerLine/>
      <ProductContent>
        <StoreName>{storeName}</StoreName>
        <StoreAddress>{address}</StoreAddress>

        <PhoneTimeRow>
          <PhoneNumber><SmallAccessTimeIcon/>{hours}</PhoneNumber>
          <PhoneNumber><SmallLocalPhoneIcon/>{phone}</PhoneNumber>
        </PhoneTimeRow>
      </ProductContent>
      <DividerLine />
      <ProductContent>
        <HeaderTitle>{footerTitle}</HeaderTitle>
      </ProductContent>

      <PickupDateTimePicker/>
    </MainContainer>
  );
};

export default PickupInformation;
