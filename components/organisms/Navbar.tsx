import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-4 w-fit px-14 bg-black/20 backdrop-blur-sm rounded-full mx-auto mt-[-180px] flex items-center gap-8">
      <a className="w-14 text-white text-center font-neue-haas text-lg" href="">
        Story
      </a>
      <a className="w-14 text-white text-center font-neue-haas text-lg" href="">
        Teller
      </a>
      <a className="w-14 text-white text-center font-neue-haas text-lg" href="">
        Buy
      </a>
      <p className="text-white font-plaster text-7xl">R</p>
      <a
        className="w-14 text-white text-center font-neue-haas text-lg ml-2"
        href=""
      >
        Carding
      </a>
      <a className="w-14 text-white text-center font-neue-haas text-lg" href="">
        About
      </a>
      <a
        className="w-14 text-white text-center font-neue-haas text-lg mr-6"
        href=""
      >
        Cabbage
      </a>
    </div>
  );
};

export default Navbar;
