import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function SingleHotelData() {
  const { id } = useParams();
  const { loading, data } = useFetch(`http://localhost:5000/hotels/${id}`);

  if (loading) return <p>loading...</p>;

  if (data)
    return (
      <div className="w-full p-2 pt-0">
        <img className="rounded-3xl" src={data.picture_url.url} alt="" />
        <h1 className="font-bold text-xl">{data.name}</h1>
        <p className="text-justify font-thin">{data.summary}</p>
        <div className="price text-blue">
          $<span className="font-black">{data.price}</span>/night
        </div>
      </div>
    );
}

export default SingleHotelData;
