import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 px-5 w-full h-full flex gap-2 s">
      <div className="w-[15%] p-2 h-full flex items-start text-white text-md font-semibold gap-4 flex-col border-r-2">
        <Link href="/profile">Account</Link>
        <Link href="/profile/settings">Settings</Link>
        <Link href="/profile/followers">Followers</Link>
        <Link href="/profile/posts">Posts</Link>
      </div>
      <div className="w-[85%] h-min-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
