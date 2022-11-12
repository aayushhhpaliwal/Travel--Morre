import { Box, Typography, styled } from "@mui/material";

// export const NavbarContainer = styled(Box) ({

// })
export const NavbarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 3rem",
  zIndex:"10"
});
export const NavbarInsideContainer = styled(Box)({
  display: "flex",
  gap: "3rem",
  alignItems: "center",
  //   justifyContent: "space-between",
  //   padding: "3rem",
  zIndex:"10"
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

export const NavbarHeaders = styled(Typography)(({ fSize, fWeight }) => ({
  fontSize: fSize ? fSize : "1rem",
  fontWeight: fWeight ? fWeight : 500,
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
