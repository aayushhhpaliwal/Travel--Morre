import React from "react";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import { Typography } from "@mui/material";

import Banner from "./banner";
function Home() {
  return (
    <>
      <Footer></Footer>
      <div className="">
        <Banner />

        <div className="Left-Dashboard"></div>
      </div>
    </>
  );
}

export default Home;
