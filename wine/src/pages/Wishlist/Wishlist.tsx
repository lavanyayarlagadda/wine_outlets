import { CircularProgress, Divider, Grid, Box } from "@mui/material";
import { HeaderTitle, ProductHeader } from "../../molecules/OrderSummary/OrderSummary.style";
import {
  WishlistContainer,
  WishlistHeader,
  Title,
  Subtitle,
  WishlistItemsContainer,
  CartGrid,
} from "./Wishlist.style";
import { useWishlist } from "./Wishlist.hook";
import CartProduct from "../../molecules/CartProduct/CartProduct";
import { RecentlyView } from "../../molecules";
import { useGetRecentlyViewedQuery } from "../../store/apis/Home/HomeAPI";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";

export default function Wishlist() {
  const { items, loading } = useWishlist();
  const {
    data: rvData,
    isLoading: rvLoading,
    isError: rvError,
  } = useGetRecentlyViewedQuery({
    ...getClientIdentifierForPayload(),
  });

  if (loading) return <CircularProgress />;

  return (
    <WishlistContainer>
      <WishlistHeader>
        <Box>
          <Title>Wishlist</Title>
          <Subtitle>Save your favorite wines and products to explore or purchase later.</Subtitle>
        </Box>
      </WishlistHeader>

      <Divider />

      <WishlistItemsContainer>
        <ProductHeader>
          <HeaderTitle>Saved By You</HeaderTitle>
        </ProductHeader>

        <Divider />

        <CartGrid>
          {items.length === 0 ? (
            <Box>No items in wishlist.</Box>
          ) : (
            items.map((p) => (
              <Grid key={p.wishlistId} columns={{ xs: 12, lg: 6 }}>
                <CartProduct
                  productId={p.itemID}
                  imageUrl={p.imageUrl || ""}
                  name={p.name}
                  origin={p.origin || ""}
                  brand={p.brand || ""}
                  size={p.size || ""}
                  year={"1928"}
                  unitPrice={{ original: "200", discounted: "300" }}
                  quantity={2}
                  component="WISHLIST"
                  handleToggleFavorite={() => {}}
                  // handleAddToCart={() => {}}
                  // itemNumber={p.itemID}
                  // handleRemoveFromCart={() => {}}
                />
              </Grid>
            ))
          )}
        </CartGrid>
      </WishlistItemsContainer>
      <RecentlyView
        content={rvData?.products ?? []}
        title={rvData?.title}
        isVisible={rvData?.isVisible ?? true}
        cardsPerSlide={3}
      />
    </WishlistContainer>
  );
}