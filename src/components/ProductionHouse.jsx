import React from "react";
// Images
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";
// Videos
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";
import starwarV from "./../assets/Videos/star-wars.mp4";

function ProductionHouse() {
  const ProductionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalGV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
  ];
  return (
    <div className="flex">
      {ProductionHouseList.map((item) => (
        <div>
          <img src={item.image} className="w-full" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
