import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useHotels } from "../../context/HotelsProvider";
import { useSearchParams } from "react-router-dom";
import useLocation from "../../hooks/useGeoLocations";

function Map() {
  const [position, setPosition] = useState([20, 20]);
  const { isLoading, data } = useHotels();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    isLoading: isLoadingLocations,
    userLocation,
    getLocations,
  } = useLocation();

  useEffect(() => {
    if (userLocation?.lat && userLocation?.lng) {
      setPosition([userLocation.lat, userLocation.lng]);
    }
  }, []);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if (lat && lng) setPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="map w-1/2 h-screen bg-black relative z-0" id="map">
      <button
        onClick={getLocations}
        className=" absolute w-[150px] h-[40px] bg-blue text-white rounded-full z-50 left-5 bottom-28"
      >
        {isLoadingLocations ? "Loading..." : "Use Your Location"}
      </button>
      <MapContainer
        className="map z-0"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={position} />
        {data
          ? data.map((item) => (
              <Marker position={[item.latitude, item.longitude]}>
                <Popup>{item.host_location}</Popup>
              </Marker>
            ))
          : null}
      </MapContainer>
    </div>
  );
}

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
