import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
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
  MobileLocationDeliveryWrapper,
} from "./Navigation.style";
import MobileMenu from "./NavigationMobileMenu";
import { useNavigate } from "react-router-dom";
import AuthDialog from "../../organisms/Authentication/AuthDialog";
import palette from "../../themes/palette";
import CustomPopover from "../CustomPopOver/CustomPopOver";
// // Define menu items for dropdowns
// const menus: { [key: string]: string[] } = {
//   Wine:   [{ listId: "1", listName: "Pinot Noir Aisle" },
//               { listId: "2", listName: "Cabernet Aisle" },
//               { listId: "3", listName: "Sparkling Aisle" },
//               { listId: "4", listName: "Italian" },],
//   Beer: ["Lager", "Ale", "Stout"],
//   Liquor: ["Whiskey", "Vodka", "Rum"],
// };

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
    handleMobileMenuClose,
    handleMobileMenuToggle,
  } = useNavigation(menuKeys);
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = React.useState(true);
  const [signIn, setSignIn] = React.useState(false);

  const onClose = () => {
    setOpenLogin(false);
  };

  // Example menu data (can come from props or API)
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
    ],
  };

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
              <SearchIcon sx={{ color: palette.grey.greyDark }} />
              <StyledInput
                placeholder="Search wines, brands, or regions"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchBox>

            <DropdownTriggerWithIconMargin
              sx={{
                color: theme?.palette.grey[100],
                display: { xs: "none", md: "flex" },
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
              <CustomizeIconButton onClick={() => setSignIn(true)}>
                <img src={userprofile} alt="userProfile" />
              </CustomizeIconButton>
            </RightNavSection>
          </IconGroup>

          {/* mobile view search */}
          <SearchBox sx={{ display: { xs: "flex", sm: "none" }, mt: 2 }}>
            <SearchIcon sx={{ color: palette.grey.greyDark }} />
            <StyledInput
              placeholder="Search wines, brands, or regions"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchBox>

          {/* mobile view location and delivery */}
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
            open={menuOpen.delivery && !mobileMenuOpen}
            anchorEl={anchorEl.delivery}
            onClose={() => handleMenuClose("delivery")}
          />

          {/* <StyledMenu
            anchorEl={anchorEl.delivery}
            open={menuOpen.delivery && !mobileMenuOpen}
            onClose={() => handleMenuClose("delivery")}
            PaperProps={{ sx: { top: "170px !important", position: "absolute" } }}
          >
            <DropdownMenuItem>Standard Delivery</DropdownMenuItem>
            <DropdownMenuItem>Express Delivery</DropdownMenuItem>
            <DropdownMenuItem>Pickup</DropdownMenuItem>
          </StyledMenu> */}

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
      {signIn && <AuthDialog open={openLogin} onClose={onClose} />}
    </div>
  );
};

export default Navigation;
