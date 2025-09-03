import React from "react";
import {
  StyledDrawer,
  DrawerHeader,
  DrawerSubMenuItem,
  DrawerMenuItem,
  DrawerAccountSection,
  CloseButton,
  Logo
} from "./Navigation.style";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { logo, star } from "../../assets";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  menuOpen: { [key: string]: boolean };
  handleMobileMenuClose: () => void;
  handleMobileMenuToggle: (item: string) => void;
}

const MobileMenu: React.FC<MobileNavigationProps> = ({
  mobileMenuOpen,
  menuOpen,
  handleMobileMenuClose,
  handleMobileMenuToggle,
}) => {
  const navigate = useNavigate();
  const menus: { [key: string]: string[] } = {
    Wine: ["Red Wine", "White Wine", "Rose Wine"],
    Beer: ["Lager", "Ale", "Stout"],
    Liquor: ["Whiskey", "Vodka", "Rum"],
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleMobileMenuClose();
  };

  return (
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
          {menuOpen[item] &&
            menus[item].map((val) => (
              <DrawerSubMenuItem
                key={val}
                onClick={() => handleNavigation("/productsList")}
              >
                {val}
              </DrawerSubMenuItem>
            ))}
        </div>
      ))}

      <DrawerMenuItem onClick={() => handleNavigation("/tastings")}>
        Tastings
      </DrawerMenuItem>
      <DrawerMenuItem onClick={() => handleNavigation("/events")}>
        Events
      </DrawerMenuItem>
      <DrawerMenuItem onClick={() => handleNavigation("/new-arrivals")}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <img src={star} alt="star" style={{ marginRight: "8px" }} /> New Arrivals
        </span>
      </DrawerMenuItem>
      <DrawerMenuItem onClick={() => handleNavigation("/promotions")}>
        Promotions
      </DrawerMenuItem>

      {/* Delivery Options */}
      <DrawerMenuItem onClick={() => handleMobileMenuToggle("delivery")}>
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

      <DrawerMenuItem onClick={() => handleNavigation("/careers")}>
        Hiring Now
      </DrawerMenuItem>

      {/* Account Section */}
      <DrawerAccountSection>
        <DrawerMenuItem onClick={() => handleNavigation("/account")}>
          My Account
        </DrawerMenuItem>
        <DrawerMenuItem onClick={() => handleNavigation("/cart")}>
          Shopping Cart
        </DrawerMenuItem>
        <DrawerMenuItem onClick={() => handleNavigation("/orders")}>
          Order History
        </DrawerMenuItem>
        <DrawerMenuItem onClick={() => handleNavigation("/settings")}>
          Settings
        </DrawerMenuItem>
        <DrawerMenuItem
          onClick={() => {
            console.log("Logout");
            handleMobileMenuClose();
          }}
        >
          Log Out
        </DrawerMenuItem>
      </DrawerAccountSection>
    </StyledDrawer>
  );
};

export default MobileMenu;