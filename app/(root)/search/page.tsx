import Search from "@/components/Search";
import SearchCard from "@/components/SearchCard";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 px-5 w-full flex flex-col gap-10">
      <Search />
      <div className="custom-scrollbar px-2 flex flex-col gap-2 h-full overflow-y-scroll">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  );
};

export default page;
