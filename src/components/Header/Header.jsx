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
import { format } from "date-fns";
import SearchIcon from "../icons/SearchIcon";
import {
  createSearchParams,
  json,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

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
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearch = () => {
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      destination,
      options: JSON.stringify(options),
    });

    setSearchParams(encodedParams);
    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  };

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
              date={date}
              setDate={setDate}
              setDateIsOpen={setDateIsOpen}
              dateIsOpen={dateIsOpen}
              handleSearch={handleSearch}
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
  date,
  setDate,
  setDateIsOpen,
  dateIsOpen,
  handleSearch,
}) {
  return (
    <div className="filter-box w-[80%] bg-white min-h-[300px] rounded-[25px] mt-2 flex-wrap p-2 sticky top-2">
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
        <div className="option w-[300px] h-[125px] flex flex-col justify-around text-left relative">
          <label className="text-black text-[28px]">Check in/out:</label>
          <div className="search-box w-[290px] h-[60px] rounded-[18px] shadow-xl flex items-center p-3">
            <CheckIcon />
            <div
              className="bg-none w-full p-2 focus:border-none focus:outline-none text-blue font-light"
              onClick={(e) => {
                e.stopPropagation();
                setDateIsOpen(!dateIsOpen);
              }}
            >
              {`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(
                date[0].endDate,
                "mm/dd/yyyy"
              )}`}
            </div>
          </div>
          {dateIsOpen ? (
            <DateRange
              ranges={date}
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              className="z-10 absolute top-32"
            />
          ) : null}
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
        <button
          class="animated-button bg-blue w-[60px] h-[60px] rounded-[18px] flex items-center justify-center"
          onClick={handleSearch}
        >
          <SearchIcon />
          <span class="button-overlay"></span>
        </button>
      </div>
    </div>
  );
}
