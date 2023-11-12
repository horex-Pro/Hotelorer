import React from "react";
import { Link } from "react-router-dom";

function SingleHotel({ imageUrl, title, description, price }) {
  return (
    <Link className="w-[95%] min-h-[150px] rounded-3xl flex gap-4 items-center p-5 mt-2 bg-slate-50">
      <img className="h-[100px] rounded-3xl w-1/4" src={imageUrl} alt="" />
      <div className="description h-full flex flex-col justify-between w-3/4">
        <h4 className=" font-bold text-xl">{title}</h4>
        <p className="w-[95%] text-justify font-thin">{description}</p>
        <div className="price text-blue">
          $<span className="font-black">{price}</span>/night
        </div>
      </div>
    </Link>
  );
}

export default SingleHotel;
