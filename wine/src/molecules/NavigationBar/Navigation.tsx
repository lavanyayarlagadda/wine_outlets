import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { bike, bag, map, cart, userprofile, logo, star } from "../../assets";
import { useNavigation } from "./Navigation.hook";
import {
  TopBar,
  TopBarContent,
  Logo,
  SearchBox,
  StyledInput,
  NavWrapper,
  NavMenu,
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
  } = useNavigation(menuKeys);
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
        <TopBarContent>
          <CustomiseOfferText>
            🎉 Free Gift with Every $100+ Order — This Week Only <span>Learn More</span>
          </CustomiseOfferText>
        </TopBarContent>
      </TopBar>

      <StyledAppBar>
        <StyledToolbar>
          {/* Mobile Menu Button - Add this */}
          <CustomizeIconButton
            onClick={handleMobileMenuOpen}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "24px", color: palette.primary.dark, mt: 1 }} />
          </CustomizeIconButton>
          <Logo src={logo} alt="Wine Outlet" onClick={() => navigate("/")} />

          <IconGroup>
            <SearchBox sx={{ display: { xs: "none", sm: "flex" } }}>
              <SearchIcon sx={{ color: palette.grey.main }} />
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
              dropdown={true}
            />

            <RightNavSection>
              <CustomizeIconButton
                onClick={(e) => {
                  (handleMenuOpen(e, "cart"), navigate("/cartOverview"));
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
                >
                  Sign In
                </AddToCartButton>
              )}
            </RightNavSection>
          </IconGroup>

          {/* mobile view search */}
          <SearchBox sx={{ display: { xs: "flex", sm: "none" }, mt: 2 }}>
            <SearchIcon sx={{ color: palette.grey.main }} />
            <StyledInput
              placeholder="Search wines, brands, or regions"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchBox>

          {/* mobile view location and delivery */}
          <MobileLocationDeliveryWrapper>
            <DropdownTriggerWithIconMargin onClick={(e) => handleMenuOpen(e, "store")}>
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

          <NavMenu>Tastings</NavMenu>
          <NavMenu>Events</NavMenu>
          <HighlightMenu>
            <img src={star} alt="star" /> New Arrivals
          </HighlightMenu>
          <NavMenu>Promotions</NavMenu>
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
          <DropdownTriggerWithGap>
            <img src={bag} alt="bag" /> Hiring Now
          </DropdownTriggerWithGap>
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
