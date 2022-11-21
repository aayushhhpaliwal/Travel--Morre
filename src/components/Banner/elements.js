import { Height, Margin } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import { positions } from "@mui/system";
import Banner from "../../assets/banner1 (2).jpg";

export const BannerContainer = styled(Box)({
  display: "flex",
  justifyContent: "left",
  height:"44rem",
  maxWidth:"100%", 
  position:"relative",
  marginTop:"38rem"
});
export const BannerFirst = styled(Box)({
  width: "45%",
  padding: "3% 0% 2% 5%",
  textAlign: "left",
});
export const BannerSubHead = styled(Typography)({
  fontSize: "25px",
});
export const BannerHead = styled(Typography)({
  fontSize: "50px",
});

export const Test = styled(Box)({
  backgroundImage: `url("${Banner}")`,
  // height: "50rem",
  maxWidth: "50%",
  // position: "absolute",
  borderRadius: "0 0 0 10rem",
  backgroundColor: (0, 0, 0, 0.5),
  // padding: "1rem",
});
export const BannerSecond = styled(Box)({

  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // gap: "1rem",
  height:"100%"
  // padding: "1rem",

  // backgroundColor: 'white',
  // opacity:"0.3"
});

export const BannerCarouselContainer = styled(Box)({
  width: "70%",
  height: "auto",
});