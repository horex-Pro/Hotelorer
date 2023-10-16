import React from "react";
import Navbar from "../Navbar/Navbar";
import StarIcon from "../icons/StarIcon";
import Button from "../Button/Button";
import HeroImage from "../../assets/images/hero-image.png";
import LocationIcon from "../icons/LocationIcon";
import CheckIcon from "../icons/CheckIcon";
import User from "../icons/User";

function Header() {
  const headerBackground = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
  };
  return (
    <header>
      <div className="hero">
        <Navbar />
        <div className="question-box w-full bg-[#E6E6E6] flex items-center justify-center h-[60px] text-blue font-medium">
          <StarIcon />
          <p className="ml-2 mr-3">Would you like tell you best offers?</p>
          <Button font="light" text="Tell me" bgColor="blue" color="white" />
        </div>
        <div className="wrapper p-[20px]">
          <div
            className={`main-box h-[720px] rounded-[50px] p-2 flex flex-col items-center  text-white  text-center`}
            style={headerBackground}
          >
            <h1 className="font-semibold text-[67px]">
              Find your favorite <br />
              place here!
            </h1>
            <p className=" font-light">
              The best prices for over 2 million properties worldwide
            </p>
            <div className="filter-box w-[80%] bg-white min-h-[300px] rounded-[25px] mt-2 flex-wrap p-2">
              <div className="filter flex items-center h-[80%] justify-around flex-wrap">
                <div className="option w-[300px] h-[125px] flex flex-col justify-around text-left">
                  <label className="text-black text-[28px]">Locations:</label>
                  <div className="search-box w-[290px] h-[60px] rounded-[18px] shadow-xl flex items-center p-3">
                    <LocationIcon />
                    <input
                      type="text"
                      placeholder="Where you want to go?"
                      className="bg-none p-2 focus:border-none focus:outline-none text-blue placeholder:text-blue font-light"
                    />
                  </div>
                </div>
                <div className="option w-[300px] h-[125px] flex flex-col justify-around text-left">
                  <label className="text-black text-[28px]">
                    Check in/out:
                  </label>
                  <div className="search-box w-[290px] h-[60px] rounded-[18px] shadow-xl flex items-center p-3">
                    <CheckIcon />
                    <input
                      type="text"
                      value="08/30/2023 to 08/30/2023"
                      className="bg-none w-full p-2 focus:border-none focus:outline-none text-blue font-light"
                    />
                  </div>
                </div>
                <div className="option w-[300px] h-[125px] flex flex-col justify-around text-left">
                  <label className="text-black text-[28px]">Members:</label>
                  <div className="search-box w-[290px] h-[60px] rounded-[18px] shadow-xl flex items-center p-3">
                    <User />
                    <input
                      type="text"
                      value="1 adult - 0 children - 1 room"
                      className="bg-none w-full p-2 focus:border-none focus:outline-none text-blue font-light"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
