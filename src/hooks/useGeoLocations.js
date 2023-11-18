import { useState } from "react";

export default function useLocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [error, setError] = useState(null);

  function getLocations() {
    if (!navigator.geolocation)
      return setError("Your location doesn't support");
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, userLocation, error, getLocations };
}
