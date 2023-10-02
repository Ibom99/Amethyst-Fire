import React from "react";

const Home = () => {
  const homepageImgs = [
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1695125213/IMG_9915_vdssgd.jpg",
      headerText: "Luxourious Burgandy Silk Packaging ",
      descText:
        "Your favourite pieces are packaged with love and caressed softly with our gorgeous Burgandy Silk Bags.",
      flex: "flex-col",
      width: "w-full",
      textWidth: "w-full",
      textAlign: "text-center",
      padding: "pt-8 pb-10 ",
    },
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1695126595/Amethyst%20Fire/ED47BB13-617D-4300-B5C6-7E5758EBFE50_oll1t4_soadlw.jpg",
      headerText: "Hoops ",
      descText: "Essential everyday staples",
      flex: "flex-col",
      width: "w-full",
      textWidth: "w-full",
      textAlign: "text-center",
      padding: "pt-8 pb-10 ",
    },
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462917/Amethyst%20Fire/3645A769-5714-4099-95C4-9117E4C36275_m724m7.jpg",
      headerText: "",
      descText:
        "Your favourite pieces are packaged with love and caressed softly with our gorgeous Burgandy Silk Bags.",
      flex: "flex",
      imgWidth: "w-2/4",
      textWidth: "w-2/4",
      textAlign: "text-left",
      textVertical: " flex items-center",
      padding: "pr-8 pl-8",
      imgHeight: "h-96 ",
      imgFit: " object-cover",
      imgWidthFit: "w-full",
      bg: "bg-rose-100",
    },
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1695849305/Amethyst%20Fire/IMG-9194_1_c6bqdu.jpg",
      headerText: "Hoops ",
      descText: "Essential everyday staples",
      flex: "flex-col",
      width: "w-full",
      textWidth: "w-full",
      textAlign: "text-center",
      padding: "pt-8 pb-10 ",
      imgHeight: "h-96 ",
      imgFit: " object-cover",
      imgWidthFit: "w-full",
      marginTop: "mt-10 ",
    },
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1683462918/Amethyst%20Fire/78761852-C99B-4AE5-A8D3-3180B17A5343_c9k33i.jpg",
      headerText: "",
      descText: "Drop down blue gorgeousness ",
      flex: "flex",
      imgWidth: "w-2/4",
      textWidth: "w-2/4",
      textAlign: "text-left",
      textVertical: " flex items-center",
      padding: "pr-8 pl-8",
      imgHeight: "h-96 ",
      imgFit: " object-cover",
      imgWidthFit: "w-full",
      bg: "bg-rose-100",
    },
  ];
  const secondImgSection = [
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1696244795/Amethyst%20Fire/croped_rings_aywkpe.jpg",
      imgDesc: "Shop the Dainty ring set collection",
    },
    {
      img: "https://res.cloudinary.com/dzzohccd8/image/upload/v1683447868/Amethyst%20Fire/82595F28-2BB5-4FE6-808D-4A14C38AAD92_gonymo.jpg",
      imgDesc: "Shop the Statement ring set collection",
    },
  ];

  return (
    <div>
      {homepageImgs.map((item, index) => (
        <div class={`${item.flex} pr-8 pl-8 ${item.marginTop} `} key={index}>
          {/* Image placement styling starts */}
          <div class={`${item.imgWidth}`}>
            <img
              src={item.img}
              class={`${item.imgFit} ${item.imgHeight} ${item.imgWidthFit}`}
            />
          </div>
          {/* text placement styling startd */}
          <div
            class={`${item.textWidth} ${item.textAlign} ${item.textVertical} ${item.padding} `}
          >
            <h1>{item.headerText}</h1>
            <p>{item.descText}</p>
          </div>
          {/* text placement styling ends here  */}
        </div>
      ))}
      {/* home page images ends here */}

      {/* Second images section array starts here */}

      <div class="flex pr-16 pl-16 mt-16 w-full text-center ">
        {secondImgSection.map((item, index) => (
          <div class=" flex-col w-2/4 " key={index}>
            <img src={item.img} class="object-cover h-96 w-full" />
            <p>{item.imgDesc}</p>
          </div>
        ))}
      </div>
      {/* second images section ends here */}

      {/* Instagram integration starts here */}

      <div>
        <h1>Enter Amethyst Fire: Instagram Feed </h1>

      </div>
    </div>
  );
};

export default Home;
