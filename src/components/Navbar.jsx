import React, { useEffect, useState } from "react";
import {
  PiHeartStraightThin,
  PiUserThin,
  PiBagThin,
  PiMagnifyingGlassThin,
} from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = fixed ? "fixed top-0 left-0 w-full" : "";

  const navPages = [
    {
      route: "Jewelry",
      link: "/jewelry/collections",
      img: [
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462923/Amethyst%20Fire/A00F1897-76AD-4A33-9091-14F4CBE432A9_bvrjk5.jpg",
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462920/Amethyst%20Fire/95FDB79C-2964-4D12-A5A3-1D1AA00B3EB0_rrme10.jpg",
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462923/Amethyst%20Fire/C37BA988-4DDF-4619-B7CB-0A619C48D302_pbxdor.jpg",
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462813/Amethyst%20Fire/C7078D7F-637D-4732-A522-D7DBC99AF36E_vztlef.jpg",
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462886/Amethyst%20Fire/4D16BB0B-315B-4C94-BBDB-18CAE43EF120_lz4wuw.jpg",
      ],
     
    },
   
    {
      route: "Accessories",
      link: "/accessories/extras",
      img: [
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1683463134/Amethyst%20Fire/5A957DFC-B52F-44F0-A4C3-7E797BA0E039_ahsimx.jpg",
        "https://res.cloudinary.com/dzzohccd8/image/upload/v1696258602/Amethyst%20Fire/IMG-5443_dvavbh.jpg",
      ],
    },
    {
      route: "Reviews",
    },
    {
      route: "About Us",
    },
  ];
  const handleNavPageHover = (images) => {
    setCurrentImages(images);
  };

  return (
    // add fixed to this div
    <div>
      <div class="flex flex-col  w-screen h-35 border-b-2 ">
        <div class="flex justify-between flex-row   ">
          <div class="flex  w-1/3 p-5 gap-5 pl-7 ">
          
            <p class=" relative group  hover:cursor-pointer hover:text-neutral-500  trasition-all">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-400 transition-all group-hover:w-full"></span>
            </p>
            <p>Services</p>
          </div>
          <p class=" flex  items-end text-4xl justify-center w-1/3 font-nanum-myeongjo">
           <Link to="/">AMETHYST FIRE </Link> 
          </p>
          
          <div class="flex w-1/3 p-6 gap-5 pr-7 items-center text-xl justify-end">
            <PiHeartStraightThin />
            <PiUserThin />
            <PiBagThin />
          </div>
        </div>

        {/* drop down effect on hover of all these sections */}
        <div
          class={`flex w-3/4 bg-white m-auto justify-evenly  items-center p-4 pb-7  ${navbarClass} `}
        >
          {navPages.map((item, index) => (
            <NavLink to={item.link} >
            <p
              key={index}
              class="relative group hover:cursor-pointer hover:font-bold"
              
              onMouseOver={() => {
                setIsOpen(true);
                if (item.img) {
                  handleNavPageHover(item.img);
                }
              }}
            >
              {item.route}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-800 transition-all group-hover:w-full"></span>
            </p>
            </NavLink>
          ))}

          <p> | </p>
          <p class="text-xl hover:cursor-pointer">
            <PiMagnifyingGlassThin />
          </p>
        </div>
      </div>
      {/* dropdowns */}
      <div class="relative " onMouseLeave={() => {
               setIsOpen(false);
               setCurrentImages([]); // Clear current images on mouse leave
              }} >
        <div
          class={`  flex gap-5 absolute bg-white w-full justify-center p-10  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {currentImages.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index}`} class="w-40 " />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
