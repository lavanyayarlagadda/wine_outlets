import React from "react";
import {
  StyledDrawer,
  DrawerHeader,
  DrawerSubMenuItem,
  DrawerMenuItem,
  // DrawerAccountSection,
  CloseButton,
  Logo,
} from "./Navigation.style";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { logo } from "../../assets";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  menuOpen: { [key: string]: boolean };
  handleMobileMenuClose: () => void;
  handleMobileMenuToggle: (item: string) => void;
}

const NavigationMobileMenu: React.FC<MobileNavigationProps> = ({
  mobileMenuOpen,
  menuOpen,
  handleMobileMenuClose,
  handleMobileMenuToggle,
}) => {
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

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  //   handleMobileMenuClose();
  // };

  return (
    <StyledDrawer anchor="left" open={mobileMenuOpen} onClose={handleMobileMenuClose}>
      <DrawerHeader>
        <Logo src={logo} alt="Wine Outlet" style={{ height: "30px" }} />
        <CloseButton onClick={handleMobileMenuClose}>
          <CloseIcon />
        </CloseButton>
      </DrawerHeader>

      {/* Main Menu Items */}
      {menuData.menuList.map((menu) => (
        <div key={menu.id}>
          <DrawerMenuItem onClick={() => handleMobileMenuToggle(menu.name)}>
            {menu.name} {menuOpen[menu.name] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </DrawerMenuItem>
          {menuOpen[menu.name] &&
            menu.itemsList.map((val) => (
              <DrawerSubMenuItem
                key={val.id}
                onClick={() => {
                  (navigate(`/productsList?category=${menu.name.toLowerCase()}&id=${menu.id}`),
                    handleMobileMenuClose());
                }}
              >
                {val.listName}
              </DrawerSubMenuItem>
            ))}
        </div>
      ))}
    </StyledDrawer>
  );
};

export default NavigationMobileMenu;
