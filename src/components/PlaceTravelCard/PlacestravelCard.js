import React from 'react'



import { ComponentContainer, ImageContainer, SubHeader, UniversalFlexDiv, } from '../TypographyAssets/TypographyAssets'
import data from '../../assets/Data/data'
import { Title } from '@mui/icons-material'

function PlacestravelCard(
  {title, description, index, img}
) {
    return (
    <>
  
    <ImageContainer src={img && img} width="15rem" height="23rem" borderRadius="1rem"   marginLeft="5%" position="absolute">
    </ImageContainer>
    <ComponentContainer borderRadius={"1rem"} width="13rem" height="17rem" marginTop="4rem" paddingTop="20rem" padding="0rem 2rem">
    <h1>{title && title}</h1>
    <br></br>
    <hr width="80%"></hr>
    <SubHeader>
    { description && description}</SubHeader>
    </ComponentContainer>
   
    


    
  
    </>
   )
}

export default PlacestravelCard

