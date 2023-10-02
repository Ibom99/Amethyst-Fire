import React from 'react'
import { useLocation } from 'react-router-dom';

const AppLocation = () => {
    const { pathname } = useLocation();
    const getRoute = () => {
      return pathname.split("/").join(" / ");
    };

let imgSrc = ""

if (pathname === "/jewelry/collections"){
    imgSrc = "https://res.cloudinary.com/dzzohccd8/image/upload/v1683447893/Amethyst%20Fire/84102F0C-1FAF-4526-B376-075421FB24C9_fjep0x.jpg"
} else if (pathname === "/accessories/extras"){
    imgSrc ="https://res.cloudinary.com/dzzohccd8/image/upload/v1683463134/Amethyst%20Fire/5A957DFC-B52F-44F0-A4C3-7E797BA0E039_ahsimx.jpg"
} else {
    imgSrc = ""
}

  return (
    <div class=" w-full">
        <div id="banner" class="w-full">
        <img class="h-80 object-cover w-full" src={imgSrc} />

</div>
<div id="location" class="p-8">

        <p>{getRoute()}</p>

</div>
    </div>
  )
}

export default AppLocation
