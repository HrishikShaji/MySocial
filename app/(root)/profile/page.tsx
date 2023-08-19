import ProfileCard from "@/components/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 px-5 w-full flex  gap-2">
      <div className="w-[15%] p-2 h-full flex items-start text-white text-md font-semibold gap-4 flex-col border-r-2">
        <button>Account</button>
        <button>Settings</button>
        <button>Followers</button>
        <button>Posts</button>
      </div>
      <div className="w-[85%] h-full">
        <ProfileCard />
      </div>
    </div>
  );
};

export default page;
