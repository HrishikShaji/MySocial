"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/profile",
      label: "Account",
      active: pathname === "/profile",
    },
    {
      href: "/profile/settings",
      label: "Settings",
      active: pathname === "/profile/settings",
    },
    {
      href: "/profile/saved",
      label: "Saved",
      active: pathname === "/profile/saved",
    },
  ];
  return (
    <div className="flex flex-col gap-2 px-10 text-white  border-r ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`${route.active && "text-teal-500"}`}>
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
