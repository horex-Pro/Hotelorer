import React from "react";
import { Link } from "react-router-dom";
import { useHotels } from "../../context/HotelsProvider";

export default function Hotels() {
  const { isLoading, data } = useHotels();

  window.scroll({
    top: 900,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className="h-screen overflow-scroll overflow-x-hidden">
      {data ? (
        data.map((item) => (
          <Link
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            className="w-[95%] min-h-[150px] rounded-3xl flex gap-4 items-center p-5 mt-2 bg-slate-50 max-lg:w-full max-lg:h-auto max-lg:flex-col max-lg:p-1 max-lg:gap-2"
            key={item.id}
          >
            <img
              className="h-[100px] rounded-3xl w-1/4 max-lg:w-full max-lg:h-auto"
              src={item.picture_url.url}
              alt=""
            />
            <div className="description h-full flex flex-col justify-between w-3/4 max-lg:w-full max-sm:w-full'">
              <h4 className=" font-bold text-xl max-lg:text-[5vw]">
                {item.host_location}
              </h4>
              <p className="w-[95%] text-justify font-thin max-lg:w-full">
                {item.summary}
              </p>
              <div className="price text-blue">
                $<span className="font-black">{item.price}</span>/night
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
