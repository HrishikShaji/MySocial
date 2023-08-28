import Header from "@/components/Header";
import SideBar from "@/app/(root)/profile/components/SideBar";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 min-h-screen  w-full  flex">
      <SideBar />
      <div className=" flex-grow ">{children}</div>
    </div>
  );
}
