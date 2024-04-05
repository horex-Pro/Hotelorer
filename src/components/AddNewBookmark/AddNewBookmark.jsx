import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import axios from "axios";
import toast from "react-hot-toast";
import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "../../context/BookmarksListProvider";

const BASE_GEOCODING_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

function AddNewBookmark() {
  const [lat, lng] = useUrlLocation();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState(null);
  const { createBookmark } = useBookmark();

  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchLocationData() {
      setIsLoadingGeoCoding(true);
      setGeoCodingError(null);
      try {
        const { data } = await axios.get(
          `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
        );
        if (!data.countryCode)
          throw new Error(
            "this location is not a city! please click somewhere else."
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        setGeoCodingError(error.message);
        toast.error("invalid location");
        setCityName("");
        setCountry("");
        setCountryCode("");
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    fetchLocationData();
  }, [lat, lng]);

  if (isLoadingGeoCoding) return <p>loading...</p>;

  if (!cityName || !country) {
    return <p>Please select another location.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName || !country) return;

    const newBookmark = {
      cityName,
      country,
      countryCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + " " + country,
    };
    await createBookmark(newBookmark);
    navigate("/bookmarks");
  };

  return (
    <div className="p-2">
      <h2>Add your new bookmark locations:</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control mt-2 flex flex-col">
          <label htmlFor="cityName" className="font-medium text-[20px]">
            city name:
          </label>
          <input
            type="text"
            id="cityName"
            className="mt-2 p-2 h-12 border border-blue rounded shadow-sm"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <label htmlFor="country" className="font-medium mt-5 text-[20px]">
            country name:
          </label>
          <div className="flex items-center h-16 p-2 justify-between border border-blue rounded shadow-sm">
            <input
              type="text"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className="mt-2 p-2 w-5/6 focus:border-none focus:outline-none"
            />
            <ReactCountryFlag
              svg
              countryCode={countryCode}
              className=" h-full scale-150"
            />
          </div>
        </div>
        <div className="buttons mt-2 flex w-full justify-between">
          <button
            className="border p-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr; back
          </button>
          <button className="p-2 text-white w-20 rounded bg-blue">add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookmark;
