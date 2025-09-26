import { Divider, Grid, Box, Skeleton } from "@mui/material";
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

export default function Wishlist() {
  const { items, isLoading, handleRemoveFavorite, wishlist, rvData } = useWishlist();

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
          {isLoading ? (
            // Skeleton Loader (shows 3 placeholders)
            Array.from(new Array(3)).map((_, index) => (
              <Grid key={index} columns={{ xs: 12, lg: 6 }}>
                <Box display="flex" gap={2} p={2}>
                  <Skeleton variant="rectangular" width={100} height={120} />
                  <Box flex={1}>
                    <Skeleton variant="text" width="80%" height={30} />
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                  </Box>
                </Box>
              </Grid>
            ))
          ) : items.length === 0 ? (
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
                  year={p.year?.toString() || ""}
                  unitPrice={{
                    original: p.price.toString() || "",
                    discounted: p.vipPrice?.toString() || "",
                  }}
                  quantity={2}
                  component="WISHLIST"
                  handleToggleFavorite={() => handleRemoveFavorite(p.itemID)}
                  isWishList={wishlist}
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
