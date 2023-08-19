import React from "react";

const SearchCard = () => {
  return (
    <div className="bg-neutral-700 p-2 rounded-md w-full flex justify-between items-center">
      <div className="flex gap-2">
        <div className="h-12 w-12 rounded-full bg-black"></div>
        <div className="">
          <h1 className="text-white font-semibold">Username</h1>
          <h2 className="text-gray-300 text-sm">Name</h2>
        </div>
      </div>
      <button className="px-3 py-1 rounded-md bg-white">View</button>
    </div>
  );
};

export default SearchCard;
