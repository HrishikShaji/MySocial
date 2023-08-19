import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 pb-10 gap-28">
      <div className="bg-black w-full relative h-[30%] flex justify-center rounded-md">
        <div className="h-40 w-40 bg-neutral-700 rounded-full absolute -bottom-20" />
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

export default ProfileCard;
