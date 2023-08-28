"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/search",
      label: "Search",
      active: pathname === "/search",
    },
    {
      href: "/friends",
      label: "Friends",
      active: pathname === "/friends",
    },
    {
      href: "/community",
      label: "Community",
      active: pathname === "/community",
    },
    {
      href: "/activity",
      label: "Activity",
      active: pathname === "/activity",
    },
    {
      href: "/profile",
      label: "Profile",
      active: pathname === "/profile",
    },
  ];
  return (
    <div className=" bg-neutral-900 text-white fixed z-50 px-10 items-center top-0 h-[50px] w-full justify-between flex">
      <Link href="/" className="text-lg font-semibold">
        MySocialAPP
      </Link>
      <div className="flex gap-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`${route.active && "text-teal-500"}`}>
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
