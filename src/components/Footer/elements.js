import { Box, Typography, styled } from "@mui/material";

export const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 3rem",

  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
});
