import React from "react";
import useFetch from "../../hooks/useFetch";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function LocationsList(link) {
  const { loading, data } = useFetch("http://localhost:5000/hotels", "");
  return (
    <div className="flex pt-10 flex-wrap gap-14">
      {data ? (
        data.map((item) => (
          <Link
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            className="card w-[420px] flex flex-col justify-between h-[436px]"
            key={item.id}
          >
            <img
              className="w-full h-[290px] rounded-[20px]"
              src={item.picture_url.url}
            />
            <h3 className="font-semibold text-[26px] text-justify">
              {item.name}
            </h3>
            <p className="card-description text-blue text-[20px] h-[35px] font-light text-ellipsis overflow-hidden">
              {item.summary}
            </p>
            <div className="card-footer flex w-full justify-between text-blue">
              <div className="card-price">
                <span className="font-black">${item.price} </span>/ night
              </div>
              <Button text="View" bgColor="blue" color="white" />
            </div>
          </Link>
        ))
      ) : (
        <p>loading ...</p>
      )}
    </div>
  );
}

export default LocationsList;
