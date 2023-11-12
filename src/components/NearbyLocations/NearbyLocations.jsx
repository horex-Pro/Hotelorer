import LocationsList from "../LocationsList/LocationsList";

function NearbyLocations() {
  return (
    <div className="p-[20px]">
      <h2 className=" text-[40px] font-medium">
        <span className="text-blue">Nearby </span>locations:
      </h2>
      <LocationsList link="https://localhost:5000/hotels" />
    </div>
  );
}

export default NearbyLocations;
