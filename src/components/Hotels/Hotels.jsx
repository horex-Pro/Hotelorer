import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SingleHotel from "../singleHotel/singleHotel";

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();

  const destionation = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data } = useFetch(
    "http://localhost:5000/hotels",
    `q=${
      destionation || ""
    }&accommodates_gte=${room || 1}`
  );

    return (
      <div className=" h-screen overflow-scroll overflow-x-hidden" >
        {data ? data.map((item) => (
          <SingleHotel
            imageUrl={item.picture_url.url}
            title={item.name}
            description={item.summary}
            price={item.price}
            key={item.id}
          />
        )) : <p>loading...</p>}
      </div>
    );

}
