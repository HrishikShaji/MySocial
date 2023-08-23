import Header from "@/components/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StatusContainer from "@/components/StatusContainer";
import BlogPost from "@/components/BlogPost";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full bg-neutral-800 flex  ">
        <div className="">
          <Header />
        </div>

        {children}
      </body>
    </html>
  );
}
