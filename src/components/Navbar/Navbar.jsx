import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-[20px] w-full">
      <nav>
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
    </div>
  );
}

export default Navbar;
