import React from "react";

const ActivityCard = () => {
  return (
    <div className="w-full items-center bg-neutral-700 rounded-md flex justify-between p-2">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 rounded-full bg-black"></div>
        <h1 className="font-semibold text-white">Username</h1>
      </div>
      <h2 className="text-white">Activity</h2>
      <span className="text-sm text-white">Time</span>
    </div>
  );
};

export default ActivityCard;
