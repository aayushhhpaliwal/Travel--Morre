import { Height, Margin } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import { positions } from "@mui/system";
import Banner from "../../assets/banner1 (2).jpg";

export const BannerContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5rem",
  height: "44rem",
  marginTop: "38rem",

  "@media (max-width: 800px)": {
    flexDirection: "column",
    // rowGap: "30px",
    // backgroundColor: "red",
  },
  "@media (max-width: 400px)": {
    flexDirection: "column",
    marginTop: "10rem",
  },
});
export const BannerFirst = styled(Box)({
  width: "45%",
  padding: "3% 0% 2% 5%",
  textAlign: "left",

  "@media (max-width: 800px)": {
    width: "57%",
    // rowGap: "30px",
    // backgroundColor: "red",
  },
  "@media (max-width: 400px)": {
    width: "13rem",
    padding: "0rem",
    marginTop: "-5rem",
    textAlign: "left",
  },
});
export const BannerSubHead = styled(Typography)({
  fontSize: "25px",

  "@media (max-width: 800px)": {
    marginLeft: "-5rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "15px",
  },
});
export const BannerHead = styled(Typography)({
  marginTop: "10rem",
  width: "50rem",
  fontSize: "80px",
  // backgroundColor: "whitesmoke",
  // borderRadius: "1rem",
  // padding: "1rem",
  "@media (max-width: 800px)": {
    fontSize: "60px",
    marginLeft: "-5rem ",
  },
  "@media (max-width: 400px)": {
    fontSize: "37px",
    width: "25rem",
    marginTop: "0rem",
  },
});

export const Test = styled(Box)({
  backgroundImage: `url("${Banner}")`,
  // height: "50rem",
  maxWidth: "50%",
  // position: "absolute",
  borderRadius: "1rem 1rem 1rem 10rem",
  backgroundColor: (0, 0, 0, 0.5),
  // padding: "1rem",
});
export const BannerSecond = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // gap: "1rem",
  height: "100%",

  // backgroundColor: 'white',
  // opacity:"0.3"

  // "@media (max-width: 800px)": {},
});

export const BannerCarouselContainer = styled(Box)({
  width: "70%",
  height: "auto",
});
