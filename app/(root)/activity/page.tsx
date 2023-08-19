import ActivityCard from "@/components/ActivityCard";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 px-5 bg-neutral-800 w-full flex flex-col gap-10">
      <div className="w-full custom-scrollbar p-2 flex flex-col gap-2 overflow-y-scroll h-full">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default page;
