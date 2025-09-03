import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { bike, bag, map, cart, userprofile, logo, star } from "../../assets";
import { useTheme } from "@mui/material";
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
  StyledDrawer,
  DrawerHeader,
  DrawerSubMenuItem,
  DrawerMenuItem,
  DrawerAccountSection,
  MobileLocationDeliveryWrapper,
  CloseButton,
} from "./Navigation.style";
import { useNavigate } from "react-router-dom";

// Define menu items for dropdowns
const menus: { [key: string]: string[] } = {
  Wine: ["Red Wine", "White Wine", "Rose Wine"],
  Beer: ["Lager", "Ale", "Stout"],
  Liquor: ["Whiskey", "Vodka", "Rum"],
};

const Navigation = () => {
  const theme = useTheme();
  const menuKeys = ["Wine", "Beer", "Liquor", "store", "delivery"];
  const { 
    anchorEl, 
    menuOpen, 
    mobileMenuOpen, 
    handleMenuOpen, 
    handleMenuClose, 
    handleMobileMenuOpen, 
    handleMobileMenuClose ,
    handleMobileMenuToggle
  } = useNavigation(menuKeys);
  const navigate = useNavigate();

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
          <CustomizeIconButton onClick={handleMobileMenuOpen} sx={{ display: { xs: "flex", md: "none" } }}>
            <MenuIcon sx={{fontSize:"24px",color:"red",mt:1}}/>
          </CustomizeIconButton>
          <Logo src={logo} alt="Wine Outlet" />

          <IconGroup>
            <SearchBox sx={{ display: { xs: "none", md: "flex" } }}>
              <SearchIcon sx={{ color: "gray" }} />
              <StyledInput
                placeholder="Search wines, brands, or regions"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchBox>

            <DropdownTriggerWithIconMargin
              sx={{ 
                color: theme?.palette.grey[100],
                display: { xs: "none", md: "flex" }
              }}
              onClick={(e) => handleMenuOpen(e, "store")}
            >
              <img src={map} alt="map" />
              Uptown Store 
              {menuOpen.store ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithIconMargin>

            <StyledMenu
              anchorEl={anchorEl.store}
              open={menuOpen.store && !mobileMenuOpen}
              onClose={() => handleMenuClose("store")}
              PaperProps={{ sx: { top: "95px !important", position: "absolute" } }}
            >
              <DropdownMenuItem>Uptown Store</DropdownMenuItem>
              <DropdownMenuItem>Downtown Store</DropdownMenuItem>
              <DropdownMenuItem>Suburban Store</DropdownMenuItem>
            </StyledMenu>

            <RightNavSection>
              <CustomizeIconButton>
                <img src={cart} alt="cart" />
              </CustomizeIconButton>
              <CustomizeIconButton>
                <img src={userprofile} alt="userProfile" />
              </CustomizeIconButton>
            </RightNavSection>
          </IconGroup>

          {/* mobile view search */}
          <SearchBox sx={{ display: { xs: "flex", md: "none"}, mt:2,}}>
              <SearchIcon sx={{ color: "gray" }} />
              <StyledInput
                placeholder="Search wines, brands, or regions"
                inputProps={{ "aria-label": "search" }}
              />
          </SearchBox>

          <MobileLocationDeliveryWrapper>
            <DropdownTriggerWithIconMargin
              sx={{
                color: theme.palette.grey[100],
              }}
              onClick={(e) => handleMenuOpen(e, "store")}
            >
              <img src={map} alt="map" />
              Uptown Store
              {menuOpen.store ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithIconMargin>

            <DropdownTriggerWithGap onClick={(e) => handleMenuOpen(e, "delivery")}>
              <img src={bike} alt="bike" /> Delivery
              {menuOpen.delivery ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithGap>
          </MobileLocationDeliveryWrapper>
        </StyledToolbar>
      </StyledAppBar>

      <BottomToolbar sx={{ display: { xs: "none", md: "flex" } }}>
                <NavWrapper>
          {["Wine", "Beer", "Liquor"].map((item) => (
            <div key={item}>
              <DropdownTriggerNoBorder onClick={(e) => handleMenuOpen(e, item)}>
                {item} {menuOpen[item] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </DropdownTriggerNoBorder>

              <StyledMenu
                anchorEl={anchorEl[item]}
                open={menuOpen[item] && !mobileMenuOpen}
                onClose={() => handleMenuClose(item)}
              >
                {menus[item].map((val) => (
                  <DropdownMenuItem
                    key={val}
                    onClick={() => {
                      navigate('/productsList'); // wrap in function
                      handleMenuClose(item); // optionally close the menu
                    }}
                  >
                    {val}
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

          <StyledMenu
            anchorEl={anchorEl.delivery}
            open={menuOpen.delivery && !mobileMenuOpen}
            onClose={() => handleMenuClose("delivery")}
            PaperProps={{ sx: { top: "170px !important", position: "absolute" } }}
          >
            <DropdownMenuItem>Standard Delivery</DropdownMenuItem>
            <DropdownMenuItem>Express Delivery</DropdownMenuItem>
            <DropdownMenuItem>Pickup</DropdownMenuItem>
          </StyledMenu>

          <DropdownTriggerWithGap>
            <img src={bag} alt="bag" /> Hiring Now
          </DropdownTriggerWithGap>
        </RightNavSection>
      </BottomToolbar>

      {/* Mobile Menu - Add this section */}
      <StyledDrawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <DrawerHeader>
          <Logo src={logo} alt="Wine Outlet" style={{ height: "30px" }} />
          <CloseButton onClick={handleMobileMenuClose}>
            <CloseIcon />
          </CloseButton>
        </DrawerHeader>

        {/* Main Menu Items */}
        {["Wine", "Beer", "Liquor"].map((item) => (
          <div key={item}>
            <DrawerMenuItem onClick={() => handleMobileMenuToggle(item)}>
              <span>{item}</span>
              {menuOpen[item] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DrawerMenuItem>
            {menuOpen[item] && menus[item].map((val) => (
              <DrawerSubMenuItem
                key={val}
                onClick={() => {
                  navigate('/productsList');
                  handleMobileMenuClose();
                }}
              >
                {val}
              </DrawerSubMenuItem>
            ))}
          </div>
        ))}

        <DrawerMenuItem onClick={() => { navigate('/tastings'); handleMobileMenuClose(); }}>
          Tastings
        </DrawerMenuItem>
        <DrawerMenuItem onClick={() => { navigate('/events'); handleMobileMenuClose(); }}>
          Events
        </DrawerMenuItem>
        <DrawerMenuItem onClick={() => { navigate('/new-arrivals'); handleMobileMenuClose(); }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <img src={star} alt="star" style={{ marginRight: "8px" }} /> New Arrivals
          </span>
        </DrawerMenuItem>
        <DrawerMenuItem onClick={() => { navigate('/promotions'); handleMobileMenuClose(); }}>
          Promotions
        </DrawerMenuItem>

        {/* Delivery Options */}
        <DrawerMenuItem onClick={() =>  handleMobileMenuToggle("delivery")}>
          <span>Delivery</span>
          {menuOpen.delivery ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </DrawerMenuItem>
        {menuOpen.delivery && (
          <>
            <DrawerSubMenuItem>Standard Delivery</DrawerSubMenuItem>
            <DrawerSubMenuItem>Express Delivery</DrawerSubMenuItem>
            <DrawerSubMenuItem>Pickup</DrawerSubMenuItem>
          </>
        )}

        <DrawerMenuItem onClick={() => { navigate('/careers'); handleMobileMenuClose(); }}>
          Hiring Now
        </DrawerMenuItem>

        {/* Account Section */}
        <DrawerAccountSection>
          <DrawerMenuItem onClick={() => { navigate('/account'); handleMobileMenuClose(); }}>
            My Account
          </DrawerMenuItem>
          <DrawerMenuItem onClick={() => { navigate('/cart'); handleMobileMenuClose(); }}>
            Shopping Cart
          </DrawerMenuItem>
          <DrawerMenuItem onClick={() => { navigate('/orders'); handleMobileMenuClose(); }}>
            Order History
          </DrawerMenuItem>
          <DrawerMenuItem onClick={() => { navigate('/settings'); handleMobileMenuClose(); }}>
            Settings
          </DrawerMenuItem>
          <DrawerMenuItem onClick={() => { console.log("Logout"); handleMobileMenuClose(); }}>
            Log Out
          </DrawerMenuItem>
        </DrawerAccountSection>
      </StyledDrawer>
    </div>
  );
};

export default Navigation;
