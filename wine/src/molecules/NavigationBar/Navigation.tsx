import React from "react";
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
} from "./Navigation.style";
import MobileMenu from "./NavigationMobileMenu";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthDialog from "../../organisms/Authentication/AuthDialog";
import palette from "../../themes/palette";
import CustomPopover from "../CustomPopOver/CustomPopOver";
import { CustomDeliveryButton } from "../CustomPopOver/CustomPopOver.style";
import uberImg from "../../assets/orderWith/uber.svg";
import doordashImg from "../../assets/orderWith/doordash.svg";
import { StoreLocator } from "..";
import { AddToCartButton } from "../../atoms/CustomButton/CustomButton.style";
import { logout, profile, myorders, mytastings, wishlist } from "../../assets";
import { useHomeLogic } from "../../pages/Home/Home.hook";

const Navigation = () => {
  const menuKeys = ["Wine", "Beer", "Liquor", "store", "delivery", "cart"];
  const bannerData = {
    banners: [
      { id: 1, message: "Free Wine Tasting Every Friday 5-7 PM", action: { label: "", url: "" } },
      {
        id: 2,
        message: "New VIP Membership - Join Today for Exclusive Benefits!",
        action: { label: "", url: "" },
      },
      {
        id: 3,
        message: "Same-Day Pickup Available at All Locations!",
        action: { label: "", url: "" },
      },
      {
        id: 4,
        message: "Holiday Hours: Extended Weekend Shopping",
        action: { label: "", url: "" },
      },
    ],
  };

  const { stores } = useHomeLogic();

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
    isSubmit,
    setIsSubmit,
    handleLoginClose,
    storedId,
    setOpen,
    open,
    setOpenLogin,
    currentBanner,
    cartCount,
  } = useNavigation(stores, menuKeys, bannerData.banners, 2000);

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
    {
      label: "Tasting",
      imgSrc: mytastings,
      onClick: () => navigate("/mytastings"),
    },
    {
      label: "Logout",
      imgSrc: logout,
      color: palette.primary.dark,
      onClick: () => navigate("/"),
    },
  ];

  return (
    <div>
      <TopBar>
        {" "}
        <TopBarContent>
          {" "}
          <CustomiseOfferText>
            {" "}
            🎉 {currentBanner.message}{" "}
            <span onClick={() => navigate(currentBanner.action.url)}>
              {" "}
              {currentBanner.action.label}{" "}
            </span>{" "}
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
              />
            </SearchBox>

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
              selectedStoreId={Number(storedId)}
              stores={stores}
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
              {isSubmit ? (
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
                          option.onClick();
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
                    <CategoryTitle>{category.title} →</CategoryTitle>
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

          {/* <NavMenu>Tastings</NavMenu>
          <NavMenu>Events</NavMenu> */}
          <HighlightMenu>
            <img src={star} alt="star" /> New Arrivals
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
          <CustomPopover
            open={menuOpen.delivery && !mobileMenuOpen}
            anchorEl={anchorEl.delivery}
            onClose={() => handleMenuClose("delivery")}
            title="Order with"
            titleAlign="center"
            showDivider={false}
          >
            <CustomDeliveryButton>
              <img src={uberImg} alt="Uber Eats" />
              Uber Eats
            </CustomDeliveryButton>

            <CustomDeliveryButton>
              <img src={doordashImg} alt="DoorDash" />
              DoorDash
            </CustomDeliveryButton>
          </CustomPopover>
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
      {signIn && (
        <AuthDialog open={openLogin} onClose={handleLoginClose} setIsSubmit={setIsSubmit} />
      )}
    </div>
  );
};

export default Navigation;
