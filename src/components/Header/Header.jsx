import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import StarIcon from "../icons/StarIcon";
import Button from "../Button/Button";
import HeroImage from "../../assets/images/hero-image.png";
import LocationIcon from "../icons/LocationIcon";
import CheckIcon from "../icons/CheckIcon";
import User from "../icons/User";
import DropDown from "../DropDown/DropDown";
import useOutsideClick from "../../hooks/useOutsideClick";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const headerBackground = {
  backgroundImage: `url(${HeroImage})`,
  backgroundSize: "cover",
};

function Header() {
  const [destination, setDestination] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dateIsOpen, setDateIsOpen] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // add a refrence to open/close filter's dropdown
  const optionRef = useRef();
  useOutsideClick(optionRef, () => setIsOpen(false), "memberFilter");

  // date range picker pakage's state
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <header>
      <div className="hero">
        <Navbar />
        <QuestionBox />
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
            <Filters
              destination={destination}
              setDestination={setDestination}
              options={options}
              setOptions={setOptions}
              optionRef={optionRef}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectionRange={selectionRange}
              setSelectionRange={setSelectionRange}
              setDateIsOpen={setDateIsOpen}
              dateIsOpen={dateIsOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

function QuestionBox() {
  return (
    <div>
      <div className="question-box w-full bg-[#E6E6E6] flex items-center justify-center h-[60px] text-blue font-medium">
        <StarIcon />
        <p className="ml-2 mr-3">Would you like tell you best offers?</p>
        <Button font="light" text="Tell me" bgColor="blue" color="white" />
      </div>
    </div>
  );
}

function Filters({
  destination,
  setDestination,
  options,
  setOptions,
  optionRef,
  isOpen,
  setIsOpen,
  selectionRange,
  setDateIsOpen,
  setSelectionRange,
  dateIsOpen,
}) {
  return (
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
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
        <div className="option w-[300px] h-[125px] flex flex-col justify-around text-left">
          <label className="text-black text-[28px]">Check in/out:</label>
          <div className="search-box w-[290px] h-[60px] rounded-[18px] shadow-xl flex items-center p-3">
            <CheckIcon />
            <div
              className="bg-none w-full p-2 focus:border-none focus:outline-none text-blue font-light relative"
              onClick={() => setDateIsOpen(!dateIsOpen)}
            >
              08/30/2023 to 08/30/2023
              {dateIsOpen ? (
                <DateRange
                  ranges={[selectionRange]}
                  onChange={(ranges) => setSelectionRange(ranges)}
                  minDate={new Date()}
                  className=" absolute  top-14  left-[-25%] z-10"
                  moveRangeOnFirstSelection={true}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="option w-[300px] h-[125px] flex flex-col justify-around text-left relative">
          <label className="text-black text-[28px]">Members:</label>
          <div className="search-box w-[290px] h-[60px] rounded-[18px] shadow-xl flex items-center p-3">
            <User />
            <div
              className="bg-none w-full p-2 focus:border-none focus:outline-none text-blue font-light"
              onClick={() => setIsOpen(!isOpen)}
              id="memberFilter"
            >
              {options.adult} adult - {options.children} children -{" "}
              {options.room} room
            </div>
            {isOpen ? (
              <DropDown
                options={options}
                setOptions={setOptions}
                optionRef={optionRef}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
