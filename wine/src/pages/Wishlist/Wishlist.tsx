import { CircularProgress, Divider, Grid, Box } from "@mui/material";
import { HeaderTitle, ProductHeader } from "../../molecules/OrderSummary/OrderSummary.style";
import * as S from "./Wishlist.style";
import { useWishlist } from "./Wishlist.hook";
import CartProduct from "../../molecules/CartProduct/CartProduct";

export default function Wishlist() {
  const { items, loading } = useWishlist();

  if (loading) return <CircularProgress />;

  return (
    <S.WishlistContainer>
      <S.WishlistHeader>
        <Box>
          <S.Title>Wishlist</S.Title>
          <S.Subtitle>
            Save your favorite wines and products to explore or purchase later.
          </S.Subtitle>
        </Box>
      </S.WishlistHeader>
      <Divider />
      <S.WishlistItemsContainer>
        <ProductHeader>
          <HeaderTitle>Saved By You</HeaderTitle>
        </ProductHeader>
        <Divider />
        <S.CartGrid>
          {items.length === 0 ? (
            <Box>No items in wishlist.</Box>
          ) : (
            items.map((p, i) => (
              <>
                <Grid columns={{ xs: 12, lg: 6 }}>
                  <CartProduct
                    key={p.wishlistId}
                    imageUrl={p.imageUrl || ""}
                    name={p.name}
                    origin={p.origin || ""}
                    brand={p.brand || ""}
                    size={p.size || ""}
                    year={"1928"}
                    unitPrice={{ original: "200", discounted: "300" }}
                    quantity={2}
                    component="WISHLIST"
                  />
                </Grid>
              </>
            ))
          )}
        </S.CartGrid>
      </S.WishlistItemsContainer>
    </S.WishlistContainer>
  );
}
