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
  DropdownMenuItem,
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
} from "./Navigation.style";
import MobileMenu from "./NavigationMobileMenu";
import { useNavigate } from "react-router-dom";
import AuthDialog from "../../organisms/Authentication/AuthDialog";
import palette from "../../themes/palette";
import CustomPopover from "../CustomPopOver/CustomPopOver";
import { CustomDeliveryButton } from "../CustomPopOver/CustomPopOver.style";
import uberImg from "../../assets/orderWith/uber.svg";
import doordashImg from "../../assets/orderWith/doordash.svg";
import { stores } from "../../constant/curatedData";
import { StoreLocator } from "..";
import { AddToCartButton } from "../../atoms/CustomButton/CustomButton.style";
import { logout, profile, myorders, mytastings, wishlist } from "../../assets";

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
    selectedStore,
    setSelectedStore,
    setOpen,
    open,
    setOpenLogin,
    currentBanner,
  } = useNavigation(menuKeys, bannerData.banners, 2000);
  const navigate = useNavigate();

  const menuData = {
    menuList: [
      {
        id: 1,
        name: "Wines",
        itemsList: [
          { id: 1, listName: "Wines1" },
          { id: 2, listName: "Wines2" },
          { id: 3, listName: "Wines3" },
          { id: 4, listName: "Wines4" },
        ],
      },
      {
        id: 2,
        name: "Beers",
        itemsList: [
          { id: 1, listName: "Beers1" },
          { id: 2, listName: "Beers2" },
          { id: 3, listName: "Beers3" },
          { id: 4, listName: "Beers4" },
        ],
      },
      {
        id: 3,
        name: "Liquor",
        itemsList: [
          { id: 1, listName: "Liquor1" },
          { id: 2, listName: "Liquor2" },
          { id: 3, listName: "Liquor3" },
          { id: 4, listName: "Liquor4" },
        ],
      },
      {
        id: "4",
        name: "Miscellaneous",
        itemsList: [
          { id: 1, listName: "Miscellaneous1" },
          { id: 2, listName: "Miscellaneous2" },
          { id: 3, listName: "Miscellaneous3" },
          { id: 4, listName: "Miscellaneous4" },
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
          <CustomizeIconButton onClick={handleMobileMenuOpen}>
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
              selectedStoreId={selectedStore}
              stores={stores}
              onSelect={(id) => setSelectedStore(id)}
              navigation={true}
            />

            <RightNavSection>
              <CustomizeIconButton
                onClick={() => {
                  navigate("/cartOverview");
                }}
              >
                <img src={cart} alt="cart" />
              </CustomizeIconButton>
              {isSubmit ? (
                <>
                  <CustomizeIconButton onClick={handleProfileClick}>
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
                {menu.itemsList.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => {
                      navigate(`/productsList?category=${menu.name.toLowerCase()}&id=${item.id}`);
                      handleMenuClose(menu.name);
                    }}
                  >
                    {item.listName}
                  </DropdownMenuItem>
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
