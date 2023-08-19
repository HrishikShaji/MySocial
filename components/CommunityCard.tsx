import React from "react";

const CommunityCard = () => {
  return (
    <div className="h rounded-md p-2 bg-neutral-700 flex flex-col items-start gap-2">
      <div className="flex  gap-2 w-full">
        <div className="  h-full w-1/3 bg-black rounded-md"></div>

        <div className="flex flex-col gap-1 w-2/3">
          <h1 className="text-white font-semibold">Community Name</h1>
          <h2 className="text-gray-300 text-sm">Members</h2>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>

      <button className="bg-white rounded-md px-3 py-2">View</button>
    </div>
  );
};

export default CommunityCard;
