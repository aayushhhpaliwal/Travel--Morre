import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlacestravelCard from "../PlaceTravelCard/PlacestravelCard";
import { OuterArea } from "./Element-Travel";
import { SubHeader } from "../TypographyAssets/TypographyAssets";
import data from "../../assets/Data/data";
import { Toolbar } from "@mui/material";

function TravelSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <OuterArea>
      <SubHeader fontSize="3rem" margin="1rem">
        Places
      </SubHeader>

      <Carousel responsive={responsive} infinite>
        {data.map((place, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={place.link}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Toolbar
              title={`Click Here To See More Details about ${place.title}`}
            >
              <PlacestravelCard
                title={place.title}
                description={place.desc}
                index={index}
                img={place.img}
              ></PlacestravelCard>
            </Toolbar>
          </a>
        ))}
      </Carousel>
    </OuterArea>
  );
}

export default TravelSlider;
