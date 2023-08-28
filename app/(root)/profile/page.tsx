import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 pb-10 gap-28">
      <div className="relative h-[200px] flex justify-center ">
        <div className="h-full w-full bg-neutral-500 rounded-md group">
          <div className="absolute w-full h-full hidden group-hover:block rounded-md bg-black/10" />
          <div className="h-6 w-6 rounded-full bg-teal-500 right-2 group-hover:block hidden bottom-2 absolute cursor-pointer" />
        </div>
        <div className="absolute -bottom-20 gro">
          <div className="h-40 w-40 group bg-neutral-700 relative rounded-full ">
            <div className="absolute w-full h-full hidden group-hover:block rounded-full bg-black/10" />
            <div className="h-6 w-6 bg-teal-500 hidden cursor-pointer  group-hover:block rounded-full  absolute right-2 bottom-4" />
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col gap-8">
        <div className="flex w-full justify-center gap-4">
          <h1>Followers</h1>
          <h1>Following</h1>
          <h1>Posts</h1>
        </div>
        <div>
          <h1>Username</h1>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Bio</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
