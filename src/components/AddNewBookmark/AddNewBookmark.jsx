import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import axios from "axios";
import toast from "react-hot-toast";
import ReactCountryFlag from "react-country-flag";

function AddNewBookmark() {
  const navigate = useNavigate();

  const [lat, lng] = useUrlLocation();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const [isLoadingGeoLocationCoding, setIsLoadingGeoLocationCoding] =
    useState(true);

  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchLocationData() {
      setIsLoadingGeoLocationCoding(true);
      try {
        const { data } = await axios.get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );

        setCityName(data.city || data.locality || "");
        setCountryName(data.countryName);
        setCountryCode(data.countryCode);

        setIsLoadingGeoLocationCoding(false);
      } catch (error) {
        setIsLoadingGeoLocationCoding(false);
      }
    }
    fetchLocationData();
  }, [lat, lng]);

  if (isLoadingGeoLocationCoding) return <p>loading...</p>;

  if (!cityName || !countryName) {
    toast.error("invalid location");
    return <p>Please select another location.</p>;
  }

  return (
    <div className="p-2">
      <h2>Add your new bookmark locations:</h2>
      <form action="">
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
              onChange={(e) => setCountryName(e.target.value)}
              value={countryName}
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
