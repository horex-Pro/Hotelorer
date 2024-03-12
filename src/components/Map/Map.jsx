import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import useLocation from "../../hooks/useGeoLocations";
import useUrlLocation from "../../hooks/useUrlLocation";

function Map({ markerLocations }) {
  const [position, setPosition] = useState([18, 11]);

  const [lat, lng] = useUrlLocation();

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
        <ClickOnMapDetector />
        <ChangeCenter position={position} />
        {markerLocations
          ? markerLocations.map((item) => (
              <Marker position={[item.latitude, item.longitude]} key={item.id}>
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

function ClickOnMapDetector() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) =>
      navigate(`/bookmarks/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}
