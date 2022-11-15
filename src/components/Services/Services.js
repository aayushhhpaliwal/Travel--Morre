import React from 'react'

import { UniversalFlexDiv, ComponentContainer, ImageContainer, BannerFirst1, BannerContainer1, BannerSecond1, BannerCarouselContainer1, SubHeader } from '../TypographyAssets/TypographyAssets'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TravelCardForBanner from '../TravelCardForBanner/TravelCardForBanner';
import PlacestravelCard from '../PlaceTravelCard/PlacestravelCard';
import Moments from '../Moments/Moments';
import servicedata from '../../assets/Data/servicedata';

function Services() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

  return (
    <>
    <SubHeader fontSize="3rem" marginLeft="5rem">Have your own Story</SubHeader>     
 <BannerContainer1>
 
    <BannerFirst1>
               <ImageContainer  src='Places/family.jpg' width="45%" height="65%" marginLeft="1rem" marginBottom="1rem"borderRadius="15px"></ImageContainer>
               <ImageContainer  src='Places/Honeymoon.jpg' width="45%" height="65%"  marginLeft="1rem" marginBottom="1rem"borderRadius="15px"></ImageContainer>
               <ImageContainer  src='Places/Visa.jpg' width="45%" height="65%" marginLeft="1rem" marginBottom="1rem"borderRadius="15px"></ImageContainer>
               <ImageContainer  src='Places/Adventure.jpg' width="45%" height="65%"  marginLeft="1rem" marginBottom="1rem"borderRadius="15px"></ImageContainer>
       </BannerFirst1>

       <BannerSecond1>
       <BannerCarouselContainer1>
 
         <Carousel
           responsive={responsive} >
         
           {servicedata.map((service, index) =>
            <Moments image={service.image} index={index}></Moments>
            )}
          
          
         </Carousel>
         </BannerCarouselContainer1>
       </BannerSecond1>
  
       </BannerContainer1>
       
       </>
  )
}

export default Services