import React from "react";

const Search = () => {
  return (
    <div className="relative w-full flex items-center">
      <input
        className="w-full  p-2 bg-transparent border-b-2"
        placeholder="search.."
      />
      <button className="absolute right-2 px-2 text-sm font-semibold rounded-md bg-white">
        Search
      </button>
    </div>
  );
};

export default Search;
