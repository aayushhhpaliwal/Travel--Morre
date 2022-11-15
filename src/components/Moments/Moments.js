import React from 'react'

import { ComponentContainer, ImageContainer, SubHeader, UniversalFlexDiv, } from '../TypographyAssets/TypographyAssets'
function Moments(
  {image}
) {
 
  return (

  <ImageContainer src= {image && image} width="100%"
  height= "52rem"  backgroundColor="red"
    borderRadius="50px" >
    </ImageContainer>


  )
}

export default Moments