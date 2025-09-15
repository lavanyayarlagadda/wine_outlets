import type { UnitPrice } from "../../constant/cartOverviewData";
import {
  CardContainer,
  ProductImage,
  ProductTitle,
  ProductInfoRow,
  RatingBox,
  RatingTypography,
  InfoValues,
  InfoIcon,
  IconRow,
  BackspaceIcon,
  PricingBox,
  VipPriceText,
  RegularPriceText,
  BackSpaceIcon,
  CounterWrapper,
  WishlistPriceAndCartContainer,
  ItemSubPrice,
  ItemPrice,
} from "./CartProduct.style";
import { starIcon, sizeIcon, originIcon } from "../../assets";
import calendarIcon from "../../assets/icons/calendar.svg";
import CustomCounter from "../../atoms/CustomCounter/CustomCounter";
import CustomWishlist from "../../atoms/CustomWishlist/CustomWhisList";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import useCartProduct from "./UseCartProduct.hook";

interface PricingProps {
  price?: any;
  vipPrice?: string;
  component?: string;
  Quantity?: number;
  discountedPrice?: number;
  totalPrice?: any;
}

interface CartProductProps {
  imageUrl: string;
  name: string;
  origin: string;
  brand: string;
  size: string;
  year: string;
  unitPrice: UnitPrice;
  quantity: number;
  component?: string;
  PricingProps?: PricingProps;
  isWishList?: boolean;
  productId: string;
  handleToggleFavorite: (productId: string) => void;
  wishListLoading?: string | null;
}
interface InfoItemProps {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}
const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <RatingBox>
    {icon}
    <RatingTypography as="span">
      {label} <InfoValues as="span">{value}</InfoValues>
    </RatingTypography>
  </RatingBox>
);

const Pricing: React.FC<PricingProps> = ({ Quantity, price, discountedPrice, totalPrice }) => {
  return (
    <ItemSubPrice>
      {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
        discountedPrice ? discountedPrice : price
      )}{" "}
      Each x {Quantity} ={" "}
      <ItemPrice>
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPrice)}
      </ItemPrice>
    </ItemSubPrice>
  );
};

const WishListPricingLayout: React.FC<PricingProps> = ({ vipPrice, price }) => {
  return (
    <RatingBox>
      <VipPriceText sx={{ mr: 3 }}>VIP: ${price} </VipPriceText>
      <RegularPriceText componentType="WISHLIST">$ {vipPrice}</RegularPriceText>
    </RatingBox>
  );
};

const CartProduct: React.FC<CartProductProps> = ({
  imageUrl,
  name,
  origin,
  brand,
  size,
  year,
  quantity,
  unitPrice,
  component = "",
  PricingProps,
  isWishList,
  handleToggleFavorite,
  productId,
  wishListLoading
}) => {
  const { customQuantity, handleQuantityChange } = useCartProduct({
    initialQuantity: quantity,
  });
  return (
    <CardContainer>
      <ProductImage src={imageUrl} alt={name} />

      <ProductInfoRow>
        <ProductTitle>{name}</ProductTitle>

        <IconRow>
          <CustomWishlist
            defaultSelected={isWishList}
            onToggle={() => handleToggleFavorite(productId)}
            isLoading={wishListLoading}
            id={productId}
          />
          <BackspaceIcon>
            <BackSpaceIcon />
          </BackspaceIcon>
        </IconRow>
        <InfoItem
          icon={<InfoIcon src={originIcon} alt="origin" />}
          label="Origin:"
          value={origin}
        />
        <InfoItem icon={<InfoIcon src={starIcon} alt="brand" />} label="Brand:" value={brand} />
        <InfoItem icon={<InfoIcon src={sizeIcon} alt="size" />} label="size:" value={size} />
        <InfoItem icon={<InfoIcon src={calendarIcon} alt="year" />} label="Year:" value={year} />
        {component == "WISHLIST" ? (
          <WishlistPriceAndCartContainer>
            <PricingBox componentType={component}>
              <WishListPricingLayout vipPrice={unitPrice.original} price={unitPrice.discounted} />
            </PricingBox>
            <CounterWrapper>
              <AddToCart label="Add to Cart" variantType="filled" onClick={() => {}} />
            </CounterWrapper>
          </WishlistPriceAndCartContainer>
        ) : (
          <>
            <CounterWrapper>
              <CustomCounter value={customQuantity} onChange={handleQuantityChange} />
            </CounterWrapper>
            <PricingBox>
              <Pricing
                price={PricingProps?.price}
                discountedPrice={PricingProps?.discountedPrice}
                Quantity={PricingProps?.Quantity}
                totalPrice={PricingProps?.totalPrice}
              />
            </PricingBox>
          </>
        )}
      </ProductInfoRow>
    </CardContainer>
  );
};
export default CartProduct;
