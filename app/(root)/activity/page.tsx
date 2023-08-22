import ActivityCard from "@/components/ActivityCard";
import React from "react";

const page = () => {
  return (
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
  );
};

export default page;
