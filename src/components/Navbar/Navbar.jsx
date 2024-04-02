import React, { useState } from "react";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="p-[20px] w-full">
      <MobileNavbarContent
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <nav className=" max-lg:hidden">
        <ul className="flex justify-between">
          <li className="logo w-[10%] text-[20px]">Hotelorer</li>
          <li className="text-black font-light w-[30%] ">
            <ul className="flex justify-between">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hotels">Hotels</Link>
              </li>
              <li>
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
            </ul>
          </li>
          <li className="flex justify-between w-[12%]">
            <Button
              text="Sign in"
              bgColor={null}
              color="black"
              border="black"
              font="normal"
            />
            <Button
              text="Sign up"
              bgColor="blue"
              color="white"
              border="black"
              font="normal"
            />
          </li>
        </ul>
      </nav>
      <nav className="w-100 hidden max-lg:flex">
        <ul className="flex justify-between w-full items-center">
          <li>
            <NavLink to="/">Hotelorer</NavLink>
          </li>
          <li>
            <button>
              <GiHamburgerMenu
                onClick={() => setIsMenuOpen((prevState) => !prevState)}
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function MobileNavbarContent({ isMenuOpen, setIsMenuOpen }) {
  const menuStyle = {
    position: "absolute",
    transition: "left 0.5s ease",
    width: "100%",
    height: "100vh",
    maxWidth: "33.333333%",
    left: isMenuOpen ? "-20px" : "-600px",
  };
  const backdrop = {
    width: "100%",
    height: "100vh",
  };

  return (
    <div>
      <div
        className="backdrop bg-slate-400/50"
        style={isMenuOpen ? { backdrop } : { display: "none" }}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      ></div>
      <div
        className="menu-items absolute top-0 bg-white flex flex-col items-start rounded-3xl p-10 z-50 shadow-2xl"
        style={menuStyle}
      >
        <ul className="font-light flex flex-col justify-between h-2/5">
          <li>
            <NavLink to="/" className="font-semibold text-[30px]">
              Hotelorer
            </NavLink>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
