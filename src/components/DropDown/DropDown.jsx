import React from "react";

function DropDown({ options, setOptions }) {
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="absolute top-32 left-0 rounded-[20px] w-[300px] h-[200px] bg-white shadow-xl text-black">
      <FilterOptions type="adult" minLimit={1} options={options} handleOption={handleOption} />
      <FilterOptions type="children" minLimit={0} options={options} handleOption={handleOption} />
      <FilterOptions type="room" minLimit={1} options={options} handleOption={handleOption} />
    </div>
  );
}

function FilterOptions({ type, minLimit, options, handleOption }) {
  return (
    <div className="filter-option flex w-full justify-around pt-6">
      <span className="title w-[20%]">{type}</span>
      <div className="counter w-1/2 flex justify-between">
        <button
          className="title shadow-xl w-8 h-8 flex items-center justify-center rounded-[10px]"
          disabled={options[type] <= minLimit}
          onClick={() => handleOption(type, "dec")}
        >
          -
        </button>
        <span className="title shadow-xl w-8 h-8 flex items-center justify-center rounded-[10px]">
          {options[type]}
        </span>
        <button
          className="title shadow-xl w-8 h-8 flex items-center justify-center rounded-[10px]"
          onClick={() => handleOption(type, "inc")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default DropDown;
