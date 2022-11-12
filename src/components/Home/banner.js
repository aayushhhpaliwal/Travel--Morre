import React from 'react'
import {
    BannerContainer,
    BannerSecond,
    BannerFirst, 
    BannerHead,
    BannerSubHead,
    Test
  } from "./home-element";
import travelmorreLogo from '../../assets/banner.jpg'

function banner() {
  return (
    <BannerContainer>
       <BannerFirst>
       <BannerSubHead>Explore the World </BannerSubHead>
       <BannerHead>Plan your Beautiful<br />
  Memories with us</BannerHead>
  <hr width="80%"></hr>
  <BannerSubHead><br></br>Making our customers happy has been our first priority. <br></br>We provide all facilities and your satisfaction is our 100% happiness. </BannerSubHead>
       </BannerFirst>
       
        <Test>
        <BannerSecond></BannerSecond>
       </Test>
    </BannerContainer>
  )
}

export default banner