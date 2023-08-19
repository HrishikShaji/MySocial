import CommunityCard from "@/components/CommunityCard";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 px-5 bg-neutral-800 w-full flex flex-col gap-10">
      <div className="w-full custom-scrollbar p-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-scroll h-full">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </div>
  );
};

export default page;
