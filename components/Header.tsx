import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-neutral-900 text-white fixed z-50 px-10 items-center top-0 h-[50px] w-full justify-between flex">
      <Link href="/" className="text-lg font-semibold">
        MySocialAPP
      </Link>
      <div className="flex gap-4">
        <Link href="/search">Search</Link>
        <Link href="/friends">Friends</Link>
        <Link href="/community">Community</Link>
        <Link href="/activity">Activity</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
