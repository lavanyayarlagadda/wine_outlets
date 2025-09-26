import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { car, map, userprofile, logo, bag } from "../../assets";
import { useNavigation } from "./Navigation.hook";
import {
  TopBar,
  TopBarContent,
  Logo,
  // SearchBox,
  // StyledInput,
  NavWrapper,
  // HighlightMenu,
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
  // StyledSearchIcon,
  CategoryColumn,
  CategoryTitle,
  ColumnsWrapper,
  Column,
  DropdownMenuItemStyled,
  // ViewMoreText,
  SuggestionsContainer,
  HighlightedText,
  StyledSuggestionItem,
  PromotionCategoryColumn,
  PromotionsColumnsWrapper,
  MenuContentWrapper,
  LeftColumn,
  RightColumn,
  SpecialBox,

  // StyledBadge,
} from "./Navigation.style";
import MobileMenu from "./NavigationMobileMenu";
import { List, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthDialog from "../../organisms/Authentication/AuthDialog";
import palette from "../../themes/palette";
import CustomPopover from "../CustomPopOver/CustomPopOver";
import { CustomDeliveryButton } from "../CustomPopOver/CustomPopOver.style";
import uberImg from "../../assets/orderWith/uber.svg";
import doordashImg from "../../assets/orderWith/doordash.svg";
import { StoreLocator } from "..";
import { AddToCartButton } from "../../atoms/CustomButton/CustomButton.style";
import { logout, profile, wishlist } from "../../assets";
import type { HomeHookReturn } from "../../pages/Home/Home.hook";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Tooltip } from "@mui/material";

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
    // cartCount,
    deliveryPartners,
    deliveryLoading,
    query,

    suggestions,

    // handleChange,
    handleSelectSuggestion,
    expandedMenus,
    // toggleExpand,
    // setSelectedMenu,
    chunkArray,
  } = useNavigation(searchTerm ? storesData : stores, menuKeys, 2000);

  const navigate = useNavigate();
  const menuList = useSelector((state: RootState) => state.menu.menuList);

  console.log("menuList", menuList);
  const promotionsMenuData = {
    name: "PROMOTIONS",
    categories: [
      {
        title: "Promotions",
        items: [
          { id: 501, listName: "NEW ARRIVALS" },
          // { id: 502, listName: "Events" },
          { id: 503, listName: "VIP BENEFITS" },
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
    // {
    //   label: "My Orders",
    //   imgSrc: myorders,
    //   onClick: () => navigate("/myorders"),
    // },
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
            {/* <SearchBox>
              <StyledSearchIcon />
              <StyledInput
                placeholder="Search wines, brands, or regions"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                value={query}
              />
            </SearchBox> */}

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
              stores={searchTerm !== "" ? storesData : stores}
              onSelect={(id) => localStorage.setItem("selectedStore", id.toString())}
              navigation={true}
            />

            <RightNavSection>
              {/* <CustomizeIconButton
                onClick={() => {
                  navigate("/cartOverview");
                }}
                icon={true}
              >
                <StyledBadge badgeContent={cartCount ?? 0} color="primary" overlap="circular">
                  <img src={cart} alt="cart" />
                </StyledBadge>
              </CustomizeIconButton> */}
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
          {/* <SearchBox sx={{ display: { xs: "flex", sm: "none" }, mt: 2 }}>
            <StyledSearchIcon />
            <StyledInput
              placeholder="Search wines, brands, or regions"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={query}
            />
          </SearchBox> */}

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
              <img src={car} alt="car" /> Delivery
              {menuOpen.delivery ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </DropdownTriggerWithGap>
          </MobileLocationDeliveryWrapper>
        </StyledToolbar>
      </StyledAppBar>

      <BottomToolbar>
        <NavWrapper>
          {menuList?.map((menu) => {
            const specialDepartments = menu.departments.filter((dept) =>
              dept.title.toLowerCase().includes("special")
            );

            return (
              <div key={menu.id}>
                {/* Show groupName */}
                <DropdownTriggerNoBorder
                  onClick={(e) => handleMenuOpen(e, menu.groupName)}
                  open={menuOpen[menu.groupName]}
                >
                  {menu.groupName}{" "}
                  {menuOpen[menu.groupName] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </DropdownTriggerNoBorder>

                <StyledMenu
                  anchorEl={anchorEl[menu.groupName]}
                  open={menuOpen[menu.groupName] && !mobileMenuOpen}
                  onClose={() => handleMenuClose(menu.groupName)}
                >
                  <MenuContentWrapper>
                    {/* Left side: normal departments */}
                    <LeftColumn>
                      {menu.departments
                        .filter((dept) => !dept.title.toLowerCase().includes("special"))
                        .map((dept) => {
                          // Get subDepartments (slice if not expanded)
                          const subDepartments = expandedMenus[dept.title]
                            ? dept.subDepartments
                            : dept.subDepartments.slice(0, 10);

                          // Split into columns of 5 items
                          const chunkSize = 5; // 5 items per column
                          const columns = Math.ceil(subDepartments.length / chunkSize);
                          const chunks = chunkArray(subDepartments, chunkSize);

                          return (
                            <CategoryColumn key={dept.title}>
                              <CategoryTitle
                                onClick={() => {
                                  handleMenuClose(menu.groupName);
                                  navigate(`/productsList?category=${dept.title.toLowerCase()}`);
                                }}
                              >
                                {dept.title} →
                              </CategoryTitle>
                              {menu.groupName !== "WINE" && (
                                <ColumnsWrapper
                                  expanded={expandedMenus[dept.title]}
                                  columns={columns}
                                >
                                  {chunks.map((column, colIndex) => (
                                    <Column key={colIndex}>
                                      {column.map((sub) => (
                                        <Tooltip title={sub.name} arrow placement="top">
                                          <DropdownMenuItemStyled
                                            key={sub.id}
                                            onClick={() => {
                                              navigate(
                                                `/productsList?category=${dept.title.toLowerCase()}&id=${sub.id}`
                                              );
                                              handleMenuClose(menu.groupName);
                                            }}
                                          >
                                            {sub.name.length > 20
                                              ? sub.name.slice(0, 15) + "…"
                                              : sub.name}
                                          </DropdownMenuItemStyled>
                                        </Tooltip>
                                      ))}
                                    </Column>
                                  ))}
                                </ColumnsWrapper>
                              )}
                            </CategoryColumn>
                          );
                        })}
                    </LeftColumn>

                    {/* Right side: render only if specials exist */}
                    {specialDepartments.length > 0 && (
                      <RightColumn>
                        {specialDepartments.map((dept) => (
                          <SpecialBox key={dept.title}>
                            <CategoryTitle
                              onClick={() => {
                                handleMenuClose(dept.title);
                                navigate(`/productsList?category=${dept.title.toLowerCase()}`);
                              }}
                            >
                              {dept.title} →
                            </CategoryTitle>
                            {dept.subDepartments.length > 0 ? (
                              dept.subDepartments.map((sub) => (
                                <DropdownMenuItemStyled
                                  key={sub.id}
                                  onClick={() => {
                                    navigate(
                                      `/productsList?category=${dept.title.toLowerCase()}&id=${sub.id}`
                                    );
                                    handleMenuClose(menu.groupName);
                                  }}
                                >
                                  {sub.name} →
                                </DropdownMenuItemStyled>
                              ))
                            ) : (
                              <DropdownMenuItemStyled>
                                No promotions available
                              </DropdownMenuItemStyled>
                            )}
                          </SpecialBox>
                        ))}
                      </RightColumn>
                    )}
                  </MenuContentWrapper>
                </StyledMenu>
              </div>
            );
          })}

          {/* Promotions Menu */}
          <div>
            <DropdownTriggerNoBorder
              onClick={(e) => handleMenuOpen(e, promotionsMenuData.name)}
              open={menuOpen[promotionsMenuData.name]}
            >
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
                <PromotionCategoryColumn key={idx}>
                  <PromotionsColumnsWrapper>
                    <Column>
                      {category.items.map((item) => {
                        let path = `/productsList?`;

                        if (item.listName === "New Arrivals") {
                          path = "/productsList?tags=new-arrival";
                        } else if (item.listName === "VIP Benefits") {
                          path = "/vip/benefits";
                        } else {
                          path = `/productsList?id=${item.id}`;
                        }

                        return (
                          <DropdownMenuItemStyled
                            key={item.id}
                            onClick={() => {
                              navigate(path);
                              handleMenuClose(promotionsMenuData.name);
                            }}
                          >
                            {item.listName}
                          </DropdownMenuItemStyled>
                        );
                      })}
                    </Column>
                  </PromotionsColumnsWrapper>
                </PromotionCategoryColumn>
              ))}
            </StyledMenu>
          </div>

          {/* <NavMenu>Tastings</NavMenu>
          <NavMenu>Events</NavMenu> */}
          {/* <HighlightMenu>
            <img src={star} alt="star" /> Tasting
          </HighlightMenu> */}
          {/* <NavMenu>Promotions</NavMenu> */}
        </NavWrapper>

        <RightNavSection>
          <DropdownTriggerWithGap onClick={(e) => handleMenuOpen(e, "delivery")}>
            <img src={car} alt="car" /> Delivery{" "}
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
                    window.open(navUrl, "_blank");
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
          <DropdownTriggerWithGap
            onClick={() => {
              navigate("/careers");
            }}
          >
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
      {signIn && <AuthDialog open={openLogin} onClose={handleLoginClose} />}
    </div>
  );
};

export default Navigation;
