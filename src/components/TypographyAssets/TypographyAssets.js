import { Box, Typography, styled } from "@mui/material";

export const LogoHeader = styled(Typography)(({ fsize, fweight }) => ({
  fontSize: fsize ? fsize : "1rem",
  fontWeight: fweight ? fweight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));

export const SubHeader = styled(Typography)(({ fsize, fweight }) => ({
  fontSize: fsize ? fsize : "1rem",
  fontWeight: fweight ? fweight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));

export const UniversalFlexDiv = styled(Box)(
  ({ flexDirection, alignItems, justifyContent, gap, padding, paddingTop, marginTop}) => ({
      display: "flex",
    gap: gap ? gap : "0.5rem",
    alignItems: alignItems ? alignItems : "center",
    flexDirection: flexDirection ? flexDirection : "row",
    justifyContent: justifyContent ? justifyContent : "center",
    // padding: padding ? padding : "1rem",
    paddingTop:paddingTop ?paddingTop :"0rem", 
    
  })
);

export const ImageContainer = styled("img")(
  ({ width, height, marginRight, marginLeft, borderRadius,  position, marginTop, paddingTop, overflow}) => ({
    width: width ? width : "8rem",
    height: height ? height : "8rem",
    marginRight: marginRight ? marginRight : "0",
    marginLeft: marginLeft ? marginLeft : "0",
    objectFit: "cover",
    borderRadius: borderRadius? borderRadius:"0",
    marginTop :marginTop && marginTop,
    position :position && position,
    paddingTop : paddingTop && paddingTop,
    overflow:"visible"
    
   
 
    //   position: "relative",
  })
);
export const ComponentContainer = styled(Box)(
({ width, height, borderRadius, position, marginTop, paddingTop}) => ({
      width: width? width:"10rem", 
      height: height? height:"auto",
      borderRadius: borderRadius? borderRadius:"0", 
      backgroundColor:"#fff",
      position :position && position, 
      marginTop :marginTop && marginTop, 
      paddingTop: paddingTop && paddingTop,
      overflow:"visible"
      
  })
  
);