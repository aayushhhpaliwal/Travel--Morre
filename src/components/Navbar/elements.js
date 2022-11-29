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
  "@media (max-width: 800px)": {},
  "@media (max-width: 600px)": { padding: "1rem .5rem" },
});
export const NavbarInsideContainer = styled(Box)({
  display: "flex",
  gap: "3rem",
  alignItems: "center",
  zIndex: "10",
  "@media (max-width: 400px)": {
    justifyContent: "flexStart",
  },
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

  "@media (max-width: 600px)": {
    fontSize: "0.6rem",
  },
}));

export const FlexDiv = styled(Box)({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",

  "@media (max-width: 600px)": {
    gap: "0.rem",
  },
});

export const NavbarBtnDiv = styled(Box)({
  width: "10rem",
  display: "flex",
  height: "0.1rem",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#820EF3",
  padding: "1.5rem 3rem",
  borderRadius: "10rem",
  // padding: "5rem",
  color: "#fff",
  cursor: "pointer",

  "@media (max-width: 600px)": {
    width: "6rem",
    padding: ".8rem 1rem",
  },
});
