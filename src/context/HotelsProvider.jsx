import React, { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const HotelContext = createContext();

function HotelsProvider({ children }) {
  const { searchParams, setSearchParams } = useSearchParams();

  const destionation = searchParams ? searchParams.get("destination") : null;
  const room = searchParams
    ? JSON.parse(searchParams.get("options"))?.room
    : null;

  const { isLoading, data } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destionation || ""}&accommodates_gte=${room || 1}`
  );
  return (
    <HotelContext.Provider value={{ isLoading, data }}>
      {children}
    </HotelContext.Provider>
  );
}

export default HotelsProvider;

export function useHotels() {
  return useContext(HotelContext);
}
