import React from "react";

const FriendCard = () => {
  return (
    <div className="justify-center px-2 items-center min-h-[200px] flex flex-col bg-neutral-700 gap-2 rounded-md">
      <div className="w-16 h-16 bg-black rounded-full"></div>
      <div className="text-center">
        <h1 className="text-white font-semibold">Username</h1>
        <h2 className="text-gray-300 text-sm">Name</h2>
      </div>
      <div className="flex justify-between w-full">
        <button className="px-3 py-1 rounded-md bg-white">Message</button>
        <button className="px-3 py-1 rounded-md bg-white">View</button>
      </div>
    </div>
  );
};

export default FriendCard;
