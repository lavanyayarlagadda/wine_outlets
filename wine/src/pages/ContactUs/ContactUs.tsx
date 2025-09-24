import React, { useState } from "react";
import { Typography, Button, Grid, Box, Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import PrivacyBaneer from "../../organisms/Banner/PrivacyBaneer";
import { Newsletter } from "../../molecules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  StoreCard,
  StoreImage,
  StoreContent,
  StoreTitle,
  InfoRow,
  IconBox,
  ButtonRow,
  StyledDialogContent,
  CloseButton,
  ModalTitle,
  ImageContainer,
  ModalImage,
  NavButton,
  ThumbnailRow,
  Thumbnail,
  Counter,
  CustomGrid,
  StyledLocationIcon,
  StyledPhoneIcon,
  StyledAccessTimeIcon,
  AddressTooltip,
  TruncatedAddress,
} from "./ContactUs.style";
import {
  AllairePlaza,
  AllairePlaza1,
  BrickTownShip,
  BridgeWater,
  BridgeWater1,
  BridgeWater2,
  Holmdel,
  Holmdel1,
  Manasquan,
  Manasquan1,
  PointPleasant,
  PointPleasant1,
  Secaucus,
  Secaucus1,
} from "../../assets";

const storeData = [
  {
    name: "Allaire",
    address: "2439 NJ-34, Manasquan, NJ 08736, United States",
    phone: "732-528-7777",
    mapUrl:
      "https://www.google.com/maps/place/Wine+Outlet/@40.120478,-74.080091,15z/data=!4m6!3m5!1s0x89c186f7bbd35157:0x7a7238abf677c595!8m2!3d40.1204783!4d-74.0800914!16s%2Fg%2F1wnf1y_q?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    image: AllairePlaza,
    images: [AllairePlaza, AllairePlaza1],
    hours: {
      weekdays: "Mon-Sat: 9AM-10PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
  {
    name: "Point Pleasant",
    address: "110 Brick Plaza Suite 42, Brick Township, NJ 08723, United States",
    phone: "732-528-0010",
    mapUrl:
      "https://www.google.com/maps/place/Wine+Outlet/@40.091366,-74.049347,15z/data=!4m5!3m4!1s0x0:0xc31aeb8fd4fef5b8!8m2!3d40.0913163!4d-74.0494352?ll=40.091366,-74.049347&z=15&t=m&hl=en-US&gl=IN&mapclient=embed&cid=14058808189776754104&shorturl=1",
    image: PointPleasant,
    images: [PointPleasant, PointPleasant1],
    hours: {
      weekdays: "Mon-Sat: 9AM-10PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
  {
    name: "Manasquan",
    address: "2439 NJ-34, Manasquan, NJ 08736, United States",
    phone: "732-528-7777",
    mapUrl:
      "https://www.google.com/maps/place/Wine+Outlet/@40.120478,-74.080091,15z/data=!4m6!3m5!1s0x89c186f7bbd35157:0x7a7238abf677c595!8m2!3d40.1204783!4d-74.0800914!16s%2Fg%2F1wnf1y_q?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    image: Manasquan,
    images: [Manasquan, Manasquan1],
    hours: {
      weekdays: "Mon-Sat: 9AM-10PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
  {
    name: "Brick",
    address: "110 Brick Plaza Suite 42, Brick Township, NJ 08723, United States",
    phone: "732-528-0010",
    mapUrl:
      "https://www.google.com/maps/place/110+Brick+Plaza,+Brick+Township,+NJ+08723,+USA/@40.0580427,-74.1456707,16z/data=!3m1!4b1!4m5!3m4!1s0x89c183769f3a2207:0x8384e7e4fc1b2233!8m2!3d40.0572433!4d-74.1408787",
    image: BrickTownShip,
    images: [BrickTownShip, BrickTownShip],
    hours: {
      weekdays: "Mon-Sat: 9AM-10PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
  {
    name: "Bridgewater",
    address: "155 Promenade Blvd Suite A08, Bridgewater, NJ 08807, United States",
    phone: "732-734-3205",
    mapUrl:
      "https://google.com/maps/place/Wine+Outlet/data=!4m2!3m1!1s0x0:0x8419899745abaaf6?sa=X&ved=1t:2428&ictx=111",
    image: BridgeWater,
    images: [BridgeWater, BridgeWater1, BridgeWater2],
    hours: {
      weekdays: "Mon-Sat: 9AM-10PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
  {
    name: "Holmdel",
    address: "2130 NJ-35, Holmdel, NJ 07733, United States",
    phone: "732-344-5916",
    mapUrl:
      "https://www.google.com/maps/place/Wine+Outlet/@40.4108379,-74.1490081,17z/data=!4m6!3m5!1s0x89c233975dd50d05:0x83a025d15164b73!8m2!3d40.4108379!4d-74.1468194!16s%2Fg%2F11jzkw33g3",
    image: Holmdel,
    images: [Holmdel, Holmdel1],
    hours: {
      weekdays: "Mon-Sat: 10AM-9PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
  {
    name: "Secaucus",
    address: "10 Meadowlands Pkwy, Secaucus, NJ 07094, United States",
    phone: "201-866-1600",
    mapUrl:
      "https://www.google.com/maps/place/Wine+Outlet/@40.798569,-74.0671092,17z/data=!3m2!4b1!5s0x89c257da837c0b3b:0x8ba16dbcd987783b!4m5!3m4!1s0x89c257d0706a4697:0x13a20a06186f7a03!8m2!3d40.7985635!4d-74.0649159?shorturl=1",
    image: Secaucus,
    images: [Secaucus, Secaucus1],
    hours: {
      weekdays: "Mon-Sat: 10AM-10PM",
      weekend: "Sun: 10AM-7PM",
    },
  },
];

const StoreCards = () => {
  const [open, setOpen] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [gallery, setGallery] = useState<string[]>([]);
  const [currentStore, setCurrentStore] = useState<string>("");

  const handleImageClick = (store: any, img: string) => {
    const imgs = store.images || [store.image];
    setGallery(imgs);
    setCurrentStore(store.name);
    const idx = imgs.indexOf(img);
    setCurrentImgIdx(idx >= 0 ? idx : 0);
    setOpen(true);
  };

  const handlePrev = () => setCurrentImgIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const handleNext = () => setCurrentImgIdx((i) => (i + 1) % gallery.length);

  const openInMaps = (address: any) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <PrivacyBaneer
        heading="Get in Touch"
        description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
      <CustomGrid container spacing={3}>
        {storeData.map((store, idx) => (
          <Grid size={{ xs: 12, md: 12, sm: 12, lg: 6 }} key={idx}>
            <StoreCard>
              <StoreImage
                src={store.images ? store.images[0] : store.image}
                alt={store.name}
                onClick={() =>
                  handleImageClick(store, store.images ? store.images[0] : store.image)
                }
              />

              <StoreContent>
                <StoreTitle variant="h6">{store.name}</StoreTitle>
                <InfoRow>
                  <StyledLocationIcon />
                  <AddressTooltip title={store.address} arrow>
                    <TruncatedAddress variant="body2">{store.address}</TruncatedAddress>
                  </AddressTooltip>
                </InfoRow>

                <IconBox>
                  <StyledPhoneIcon />

                  <Typography variant="body2">{store.phone}</Typography>
                </IconBox>
                <InfoRow>
                  <StyledAccessTimeIcon />

                  <Box>
                    <Typography variant="body2">{store.hours?.weekdays}</Typography>
                    <Typography variant="body2">{store.hours?.weekend}</Typography>
                  </Box>
                </InfoRow>
                <ButtonRow>
                  <Button
                    size="small"
                    startIcon={<ImageIcon />}
                    onClick={() =>
                      handleImageClick(store, store.images ? store.images[0] : store.image)
                    }
                  />

                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<LocationOnIcon />}
                    onClick={() => openInMaps(store.address)}
                  >
                    Map
                  </Button>
                </ButtonRow>
              </StoreContent>
            </StoreCard>
          </Grid>
        ))}
      </CustomGrid>

      <Newsletter />

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
        <StyledDialogContent>
          <CloseButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </CloseButton>
          <ModalTitle>{currentStore}</ModalTitle>
          <ImageContainer>
            <NavButton left onClick={handlePrev}>
              <ArrowBackIosNewIcon fontSize="small" />
            </NavButton>
            <ModalImage src={gallery[currentImgIdx]} alt="Store" />
            <NavButton right onClick={handleNext}>
              <ArrowForwardIosIcon fontSize="small" />
            </NavButton>
          </ImageContainer>
          <ThumbnailRow>
            {gallery.map((img, i) => (
              <Thumbnail
                key={i}
                src={img}
                alt="thumb"
                active={currentImgIdx === i}
                onClick={() => setCurrentImgIdx(i)}
              />
            ))}
          </ThumbnailRow>
          <Counter>{`${currentImgIdx + 1} / ${gallery.length}`}</Counter>
        </StyledDialogContent>
      </Dialog>
    </>
  );
};

export default StoreCards;
