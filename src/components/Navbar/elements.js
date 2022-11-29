import { Box, Typography, styled } from "@mui/material";
import { useMediaQuery } from "react-responsive";

// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
// const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
// const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

export const NavbarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 3rem",
  zIndex: "1",
  backgroundColor: "white",
});
export const NavbarInsideContainer = styled(Box)({
  display: "flex",
  // backgroundColor:"white",
  gap: "3rem",
  alignItems: "center",
  //   justifyContent: "space-between",
  //   padding: "3rem",
  zIndex: "10",
});

export const ImageContainer = styled("img")(
  ({ width, height, marginRight, marginLeft }) => ({
    width: width ? width : "8rem",
    height: height ? height : "8rem",
    marginRight: marginRight ? marginRight : "0",
    marginLeft: marginLeft ? marginLeft : "0",
    objectFit: "cover",

    //   position: "relative",
  })
);

export const NavbarHeaders = styled(Typography)(({ fsize, fweight }) => ({
  fontSize: fsize ? fsize : "1rem",
  fontWeight: fweight ? fweight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));

export const FlexDiv = styled(Box)({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",

  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   padding: "3rem",
});
