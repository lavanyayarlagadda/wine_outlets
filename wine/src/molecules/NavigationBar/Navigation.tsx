import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { bike, map, cart, userprofile, logo, star } from "../../assets";
import { useNavigation } from "./Navigation.hook";
import {
  TopBar,
  TopBarContent,
  Logo,
  SearchBox,
  StyledInput,
  NavWrapper,
  HighlightMenu,
  StyledMenu,
  DropdownTriggerNoBorder,
  DropdownTriggerWithGap,
  DropdownTriggerWithIconMargin,
  RightNavSection,
  CustomiseOfferText,
  CustomizeIconButton,
  StyledAppBar,
  StyledToolbar,
  BottomToolbar,
  IconGroup,
  MobileLocationDeliveryWrapper,
  StyledProfileMenu,
  StyledProfileMenuItem,
  ProfileMenuIcon,
  ProfileMenuText,
  MobileMenuIcon,
  StyledSearchIcon,
  CategoryColumn,
  CategoryTitle,
  ColumnsWrapper,
  Column,
  DropdownMenuItemStyled,
  ViewMoreText,
  SuggestionsContainer,
  HighlightedText,
  StyledSuggestionItem,
} from "./Navigation.style";
import MobileMenu from "./NavigationMobileMenu";
import { Badge, List, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthDialog from "../../organisms/Authentication/AuthDialog";
import palette from "../../themes/palette";
import CustomPopover from "../CustomPopOver/CustomPopOver";
import { CustomDeliveryButton } from "../CustomPopOver/CustomPopOver.style";
import uberImg from "../../assets/orderWith/uber.svg";
import doordashImg from "../../assets/orderWith/doordash.svg";
import { StoreLocator } from "..";
import { AddToCartButton } from "../../atoms/CustomButton/CustomButton.style";
import { logout, profile, myorders, wishlist } from "../../assets";
import type { HomeHookReturn } from "../../pages/Home/Home.hook";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

interface NavigationProps {
  stores: HomeHookReturn["stores"];
  storesData: HomeHookReturn["storesData"];
}

const Navigation: React.FC<NavigationProps> = ({ stores, storesData }) => {
  const menuKeys = ["Wine", "Beer", "Liquor", "store", "delivery", "cart"];
  const { searchTerm } = useSelector((store: RootState) => store.homeSlice);
  const {
    anchorEl,
    menuOpen,
    mobileMenuOpen,
    handleMenuOpen,
    handleMenuClose,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    handleMobileMenuToggle,
    firstStoreName,
    anchorElProfile,
    popup,
    handleProfileClick,
    handleProfileClose,
    openLogin,
    signIn,
    setSignIn,
    handleLoginClose,
    selectedStore,
    setOpen,
    open,
    setOpenLogin,
    currentBanner,
    cartCount,
    deliveryPartners,
    deliveryLoading,
    query,

    suggestions,

    handleChange,
    handleSelectSuggestion,
  } = useNavigation(searchTerm ? storesData : stores, menuKeys, 2000);

  const navigate = useNavigate();

  const menuData = {
    menuList: [
      {
        id: 1,
        name: "Wines",
        categories: [
          {
            title: "Wines",
            items: [
              { id: 101, listName: "Cabernet Sauvignon" },
              { id: 102, listName: "Merlot" },
              { id: 103, listName: "Pinot Noir" },
              { id: 104, listName: "Shiraz" },
              { id: 105, listName: "Zinfandel" },
              { id: 106, listName: "Malbec" },
              { id: 107, listName: "Tempranillo" },
              { id: 108, listName: "Sangiovese" },
              { id: 109, listName: "Grenache" },
              { id: 110, listName: "Barbera" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Beer",
        categories: [
          {
            title: "Beer",
            items: [
              { id: 201, listName: "Domestic Beer" },
              { id: 202, listName: "Imported Beer" },
              { id: 203, listName: "Micro / Specialty Beers" },
              { id: 204, listName: "Non-Alcohol Beer" },
              { id: 205, listName: "Malternatives" },
              { id: 206, listName: "Keg / Party Balls" },
              { id: 207, listName: "Hard Seltzer" },
              { id: 208, listName: "Canned Cocktails" },
              { id: 209, listName: "Single Bottles" },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Liquor",
        categories: [
          {
            title: "Liquor",
            items: [
              { id: 301, listName: "Whiskey" },
              { id: 302, listName: "Bourbon" },
              { id: 303, listName: "Cognac" },
              { id: 304, listName: "Brandy" },
              { id: 305, listName: "Single Malt Scotch" },
              { id: 306, listName: "Scotch" },
              { id: 307, listName: "Gin" },
              { id: 308, listName: "Vodka" },
              { id: 309, listName: "Tequila" },
              { id: 310, listName: "Rum" },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Miscellaneous",
        categories: [
          {
            title: "Miscellaneous",
            items: [
              { id: 401, listName: "Miscellaneous1" },
              { id: 402, listName: "Miscellaneous2" },
              { id: 403, listName: "Miscellaneous3" },
            ],
          },
        ],
      },
    ],
  };

  const promotionsMenuData = {
    name: "Promotions",
    categories: [
      {
        title: "Promotions",
        items: [
          { id: 501, listName: "New Arrivals" },
          { id: 502, listName: "Events" },
          { id: 503, listName: "VIP Benefits" },
        ],
      },
    ],
  };

  const profileMenuOptions = [
    {
      label: "Profile",
      imgSrc: profile,
      onClick: () => navigate("/profile"),
    },
    {
      label: "My Orders",
      imgSrc: myorders,
      onClick: () => navigate("/myorders"),
    },
    {
      label: "Wishlist",
      imgSrc: wishlist,
      onClick: () => navigate("/wishlist"),
    },
    // {
    //   label: "Tasting",
    //   imgSrc: mytastings,
    //   onClick: () => navigate("/mytastings"),
    // },
    {
      label: "Logout",
      imgSrc: logout,
      color: palette.primary.dark,
      onClick: () => navigate("/"),
    },
  ];
  const isToken = localStorage.getItem("token");

  return (
    <div>
      <TopBar
        onClick={() => {
          navigate(currentBanner?.action?.url || "/");
        }}
      >
        {" "}
        <TopBarContent>
          {" "}
          <CustomiseOfferText>
            {" "}
            {currentBanner.message}{" "}
            {/* <span onClick={() => navigate(currentBanner?.action?.url || "/")}>
              {" "}
              {currentBanner.action.label}{" "}
            </span>{" "} */}
          </CustomiseOfferText>{" "}
        </TopBarContent>{" "}
      </TopBar>

      <StyledAppBar>
        <StyledToolbar>
          {/* Mobile Menu Button - Add this */}
          <CustomizeIconButton onClick={handleMobileMenuOpen} icon={false}>
            <MobileMenuIcon />
          </CustomizeIconButton>
          <Logo src={logo} alt="Wine Outlet" onClick={() => navigate("/")} />

          <IconGroup>
            <SearchBox>
              <StyledSearchIcon />
              <StyledInput
                placeholder="Search wines, brands, or regions"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                value={query}
              />
            </SearchBox>

            {suggestions.length > 0 && (
              <SuggestionsContainer>
                <List>
                  {suggestions.map((suggestion, index) => {
                    const matchIndex = suggestion.toLowerCase().indexOf(query.toLowerCase());

                    const beforeMatch = suggestion.slice(0, matchIndex);
                    const matchedText = suggestion.slice(matchIndex, matchIndex + query.length);
                    const afterMatch = suggestion.slice(matchIndex + query.length);

                    return (
                      <StyledSuggestionItem
                        key={index}
                        onClick={() => handleSelectSuggestion(suggestion)}
                      >
                        <Typography>
                          {matchIndex === -1 ? (
                            suggestion
                          ) : (
                            <>
                              {beforeMatch}
                              <HighlightedText>{matchedText}</HighlightedText>
                              {afterMatch}
                            </>
                          )}
                        </Typography>
                      </StyledSuggestionItem>
                    );
                  })}
                </List>
              </SuggestionsContainer>
            )}

            <DropdownTriggerWithIconMargin
              sx={{
                color: palette.grey.main,
                display: { xs: "none", md: "flex" },
              }}
              onClick={(e) => {
                (handleMenuOpen(e, "store"), setOpen(true));
              }}
            >
              <img src={map} alt="map" />
              {firstStoreName}
              {menuOpen.store ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithIconMargin>

            <StoreLocator
              open={open}
              onClose={() => setOpen(false)}
              selectedStoreId={Number(selectedStore)}
              stores={searchTerm ? storesData : stores}
              onSelect={(id) => localStorage.setItem("selectedStore", id.toString())}
              navigation={true}
            />

            <RightNavSection>
              <CustomizeIconButton
                onClick={() => {
                  navigate("/cartOverview");
                }}
                icon={true}
              >
                <Badge badgeContent={cartCount ?? 0} color="primary" overlap="circular">
                  <img src={cart} alt="cart" />
                </Badge>
              </CustomizeIconButton>
              {isToken ? (
                <>
                  <CustomizeIconButton onClick={handleProfileClick} icon={true}>
                    <img src={userprofile} alt="userProfile" />
                  </CustomizeIconButton>
                  <StyledProfileMenu
                    anchorEl={anchorElProfile}
                    open={popup}
                    onClose={handleProfileClose}
                  >
                    {profileMenuOptions.map((option) => (
                      <StyledProfileMenuItem
                        key={option.label}
                        onClick={() => {
                          if (option.label === "Logout") {
                            localStorage.removeItem("token");
                            localStorage.removeItem("userId");
                            localStorage.removeItem("userTypeId");
                            localStorage.removeItem("userName");
                            localStorage.removeItem("role");
                          }

                          option.onClick?.();
                          handleProfileClose();
                        }}
                      >
                        <ProfileMenuIcon>
                          <img src={option.imgSrc} alt={option.label} width={20} height={20} />
                        </ProfileMenuIcon>
                        <ProfileMenuText
                          colorType={option.label === "Logout" ? "error" : undefined}
                        >
                          {option.label}
                        </ProfileMenuText>
                      </StyledProfileMenuItem>
                    ))}
                  </StyledProfileMenu>
                </>
              ) : (
                <AddToCartButton
                  onClick={() => {
                    (setSignIn(true), setOpenLogin(true));
                  }}
                  variantType="filled"
                >
                  Sign In
                </AddToCartButton>
              )}
            </RightNavSection>
          </IconGroup>

          {/* mobile view search */}
          <SearchBox sx={{ display: { xs: "flex", sm: "none" }, mt: 2 }}>
            <StyledSearchIcon />
            <StyledInput
              placeholder="Search wines, brands, or regions"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={query}
            />
          </SearchBox>

          {/* mobile view location and delivery */}
          <MobileLocationDeliveryWrapper>
            <DropdownTriggerWithIconMargin
              onClick={(e) => {
                (handleMenuOpen(e, "store"), setOpen(true));
              }}
            >
              <img src={map} alt="map" />
              {firstStoreName}
              {menuOpen.store ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithIconMargin>

            <DropdownTriggerWithGap onClick={(e) => handleMenuOpen(e, "delivery")}>
              <img src={bike} alt="bike" /> Delivery
              {menuOpen.delivery ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithGap>
          </MobileLocationDeliveryWrapper>
        </StyledToolbar>
      </StyledAppBar>

      <BottomToolbar>
        <NavWrapper>
          {menuData.menuList.map((menu) => (
            <div key={menu.id}>
              {/* Dropdown Trigger */}
              <DropdownTriggerNoBorder onClick={(e) => handleMenuOpen(e, menu.name)}>
                {menu.name}{" "}
                {menuOpen[menu.name] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </DropdownTriggerNoBorder>

              {/* Dropdown Menu */}
              <StyledMenu
                anchorEl={anchorEl[menu.name]}
                open={menuOpen[menu.name] && !mobileMenuOpen}
                onClose={() => handleMenuClose(menu.name)}
              >
                {menu.categories?.map((category, idx) => (
                  <CategoryColumn key={idx}>
                    <CategoryTitle
                      onClick={() => {
                        handleMenuClose(menu.name); // close the menu first
                        navigate(`/productsList?category=${menu.name.toLowerCase()}`); // then navigate
                      }}
                    >
                      {category.title} →
                    </CategoryTitle>

                    <ColumnsWrapper>
                      {Array.from({
                        length: Math.min(2, Math.ceil(category.items.length / 5)),
                      }).map((_, colIdx) => {
                        const colItems = category.items.slice(colIdx * 5, colIdx * 5 + 5);
                        const isLastColumn =
                          colIdx === Math.min(2, Math.ceil(category.items.length / 5)) - 1;

                        return (
                          <Column key={colIdx}>
                            {colItems.map((item) => (
                              <DropdownMenuItemStyled
                                key={item.id}
                                onClick={() => {
                                  navigate(
                                    `/productsList?category=${menu.name.toLowerCase()}&id=${item.id}`
                                  );
                                  handleMenuClose(menu.name);
                                }}
                              >
                                {item.listName}
                              </DropdownMenuItemStyled>
                            ))}

                            {isLastColumn && category.items.length > 10 && (
                              <ViewMoreText>View More →</ViewMoreText>
                            )}
                          </Column>
                        );
                      })}
                    </ColumnsWrapper>
                  </CategoryColumn>
                ))}
              </StyledMenu>
            </div>
          ))}

          {/* Promotions Menu */}
          <div>
            <DropdownTriggerNoBorder onClick={(e) => handleMenuOpen(e, promotionsMenuData.name)}>
              {promotionsMenuData.name}{" "}
              {menuOpen[promotionsMenuData.name] ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </DropdownTriggerNoBorder>

            <StyledMenu
              anchorEl={anchorEl[promotionsMenuData.name]}
              open={menuOpen[promotionsMenuData.name] && !mobileMenuOpen}
              onClose={() => handleMenuClose(promotionsMenuData.name)}
            >
              {promotionsMenuData.categories.map((category, idx) => (
                <CategoryColumn key={idx}>
                  <CategoryTitle
                    onClick={() => {
                      handleMenuClose(promotionsMenuData.name);
                      navigate(`/productsList?category=${promotionsMenuData.name.toLowerCase()}`);
                    }}
                  >
                    {category.title} →
                  </CategoryTitle>

                  <ColumnsWrapper>
                    <Column>
                      {category.items.map((item) => (
                        <DropdownMenuItemStyled
                          key={item.id}
                          onClick={() => {
                            navigate(
                              `/productsList?category=${promotionsMenuData.name.toLowerCase()}&id=${item.id}`
                            );
                            handleMenuClose(promotionsMenuData.name);
                          }}
                        >
                          {item.listName}
                        </DropdownMenuItemStyled>
                      ))}
                    </Column>
                  </ColumnsWrapper>
                </CategoryColumn>
              ))}
            </StyledMenu>
          </div>

          {/* <NavMenu>Tastings</NavMenu>
          <NavMenu>Events</NavMenu> */}
          <HighlightMenu>
            <img src={star} alt="star" /> Tasting
          </HighlightMenu>
          {/* <NavMenu>Promotions</NavMenu> */}
        </NavWrapper>

        <RightNavSection>
          <DropdownTriggerWithGap onClick={(e) => handleMenuOpen(e, "delivery")}>
            <img src={bike} alt="bike" /> Delivery{" "}
            {menuOpen.delivery ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </DropdownTriggerWithGap>
          <CustomPopover
            open={menuOpen.cart && !mobileMenuOpen}
            anchorEl={anchorEl.cart}
            onClose={() => handleMenuClose("cart")}
            title="1 Item Added"
            titleAlign="left"
            showDivider={true}
            headerRightIcon="cart"
          >
            <CustomDeliveryButton></CustomDeliveryButton>
          </CustomPopover>

          {/* Order with popover */}
          {deliveryLoading ? (
            <CustomDeliveryButton>Loading...</CustomDeliveryButton>
          ) : deliveryPartners.length > 0 ? (
            <CustomPopover
              open={menuOpen.delivery && !mobileMenuOpen}
              anchorEl={anchorEl.delivery}
              onClose={() => handleMenuClose("delivery")}
              title="Order with"
              titleAlign="center"
              showDivider={false}
            >
              <CustomDeliveryButton
                onClick={() => {
                  const navUrl = deliveryPartners.find((item) => item.name == "UberEats")?.link;
                  if (navUrl) {
                    navigate(navUrl);
                  }
                }}
              >
                <img src={uberImg} alt="Uber Eats" />
                Uber Eats
              </CustomDeliveryButton>

              <CustomDeliveryButton
                onClick={() => {
                  const navUrl = deliveryPartners.find((item) => item.name == "DoorDash")?.link;
                  if (navUrl) {
                    navigate(navUrl);
                  }
                }}
              >
                <img src={doordashImg} alt="DoorDash" />
                DoorDash
              </CustomDeliveryButton>
            </CustomPopover>
          ) : (
            <CustomDeliveryButton>No delivery partners</CustomDeliveryButton>
          )}
          {/* <DropdownTriggerWithGap>
            <img src={bag} alt="bag" /> Hiring Now
          </DropdownTriggerWithGap> */}
        </RightNavSection>
      </BottomToolbar>

      {/* Mobile Menu - Add this section */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        menuOpen={menuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleMobileMenuToggle={handleMobileMenuToggle}
      />
      {signIn && <AuthDialog open={openLogin} onClose={handleLoginClose} />}
    </div>
  );
};

export default Navigation;
