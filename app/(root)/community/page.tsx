import CommunityCard from "@/components/CommunityCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full p-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
  );
};

export default page;
