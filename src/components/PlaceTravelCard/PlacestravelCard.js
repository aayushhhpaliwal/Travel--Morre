import React from 'react'
import Dubai from '../../assets/Places/Dubai.jpg'
import { ComponentContainer, ImageContainer, UniversalFlexDiv, } from '../TypographyAssets/TypographyAssets'

function PlacestravelCard() {
  return (
    <>
    
 
    <ComponentContainer borderRadius={"1rem"} width="26rem" height="60rem" position="absolute" marginTop="6rem">
    <h1>hello</h1>
    </ComponentContainer>
   
     <ImageContainer src={Dubai} width="22rem" height="30rem" borderRadius="1rem" position="relative" marginLeft="5%">
     </ImageContainer>
   
     <UniversalFlexDiv flexDirection={"column"} gap="2rem" >
    </UniversalFlexDiv>
    
  
    </>
   )
}

export default PlacestravelCard