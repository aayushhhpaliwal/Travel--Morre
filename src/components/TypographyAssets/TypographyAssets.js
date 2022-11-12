import { Box, Typography, styled } from "@mui/material";

export const LogoHeader = styled(Typography)(({ fSize, fWeight }) => ({
  fontSize: fSize ? fSize : "1rem",
  fontWeight: fWeight ? fWeight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));

export const SubHeader = styled(Typography)(({ fSize, fWeight }) => ({
  fontSize: fSize ? fSize : "1rem",
  fontWeight: fWeight ? fWeight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));

export const UniversalFlexDiv = styled(Box)(
  ({ flexDirection, alignItems, justifyContent, gap, padding }) => ({
    display: "flex",
    gap: gap ? gap : "0.5rem",
    alignItems: alignItems ? alignItems : "center",
    flexDirection: flexDirection ? flexDirection : "row",
    justifyContent: justifyContent ? justifyContent : "center",
    padding: padding ? padding : "1rem",
  })
);

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
