import React from 'react'
import Dubai from '../../assets/Places/Dubai.jpg'

import { ComponentContainer, ImageContainer, SubHeader, UniversalFlexDiv, } from '../TypographyAssets/TypographyAssets'


function PlacestravelCard(props) {
  return (
    <>
   
    <ImageContainer src={props.img} width="22rem" height="30rem" borderRadius="1rem"   marginLeft="5%" position="absolute">
    </ImageContainer>

    <ComponentContainer borderRadius={"1rem"} width="22rem" height="20rem" marginTop="4rem" paddingTop="27rem" padding="0rem 2rem">

    <h1>Dubai</h1>

    <br></br>
    <hr width="80%"></hr>
    <SubHeader>
    Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip ...
    </SubHeader>
    </ComponentContainer>
   
    


    
  
    </>
   )
}

export default PlacestravelCard

