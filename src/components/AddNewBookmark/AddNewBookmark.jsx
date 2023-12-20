import React from "react";
import { useNavigate } from "react-router-dom";

function AddNewBookmark() {
  const navigate = useNavigate();
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
          />
          <label htmlFor="country" className="font-medium mt-5 text-[20px]">
            country name:
          </label>
          <input
            type="text"
            id="country"
            className="mt-2 p-2 h-12 border border-blue rounded shadow-sm"
          />
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
