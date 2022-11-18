import React from 'react'
import { ComponentContainer, ImageContainer, SubHeader, UniversalFlexDiv } from '../components/TypographyAssets/TypographyAssets'

function benefits() {
  return (
   <>
    <SubHeader  fontSize="3rem" textAlign="center">
    Our Partners
    </SubHeader>

    <ComponentContainer backgroundColor="black" width="100%"  height="auto" >
   
    <ImageContainer src='Places/partners.avif' width="80%">
    
    </ImageContainer>
    </ComponentContainer>
    
    </>
  )
}

export default benefits