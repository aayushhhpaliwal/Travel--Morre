import { Box, Typography, styled } from "@mui/material";

export const LogoHeader = styled(Typography)(({ fsize, fweight }) => ({
  fontSize: fsize ? fsize : "1rem",
  fontWeight: fweight ? fweight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
}));

export const SubHeader = styled(Typography)(({ fontSize, fontweight, margin, textAlign }) => ({
  fontSize: fontSize ? fontSize : "1rem",
  fontWeight: fontweight ? fontweight : 500,
  fontFamily: "Poppins",
  cursor: "pointer",
  margin: margin && margin, 
  textAlign:textAlign && textAlign
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
  ({ width, height, marginRight, marginLeft, borderRadius,  position, marginTop, paddingTop,marginBottom,overflow}) => ({
    width: width && width,
    height: height && height ,
    marginRight: marginRight ? marginRight : "0",
    marginLeft: marginLeft ? marginLeft : "0",
    objectFit: "cover",
    borderRadius: borderRadius? borderRadius:"0",
    marginTop :marginTop && marginTop,
    marginBottom : marginBottom && marginBottom,
    position :position && position,
    paddingTop : paddingTop && paddingTop,
    overflow:"visible"
    
   
 
    //   position: "relative",
  })
);
export const ComponentContainer = styled(Box)(
({ width, height, borderRadius, position, marginTop, paddingTop, backgroundColor}) => ({
      width: width? width:"10rem", 
      height: height? height:"auto",
      borderRadius: borderRadius? borderRadius:"0", 
      backgroundColor: backgroundColor && backgroundColor,
      position :position && position, 
      marginTop :marginTop && marginTop, 
      paddingTop: paddingTop && paddingTop,
      overflow:"visible"
      
  })
  
);


export const BannerFirst1 = styled(Box)({
  width: "40%",
  padding: "2% 0% 2% 10%",
  textAlign: "left",
  height:"40rem"
});

export const BannerContainer1 = styled(Box)({
  display: "flex",
  justifyContent: "left",
  height:"60rem"
  // position:"absoulute"
});

export const BannerSecond1 = styled(Box)({

  width: "60%",
  padding: "3rem 0rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height:"50rem"
  // padding: "1rem",

  // backgroundColor: 'white',
  // opacity:"0.3"
});

export const BannerCarouselContainer1 = styled(Box)({
  width: "80%",
  height: "auto",
});