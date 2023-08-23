import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[50px]  w-full flex flex-col  ">
      <div className="flex justify-around items-center h-[50px] bg-neutral-700 sticky top-[50px] w-full text-white">
        <Link href="/activity">All </Link>
        <Link href="/activity/friends">Friends</Link>
        <Link href="/activity/community">community</Link>
        <Link href="/activity/trending">trending</Link>
      </div>
      {children}
    </div>
  );
}
