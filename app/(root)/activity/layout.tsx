import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 px-5 w-full flex flex-col gap-10">
      <div className="flex justify-around w-full text-white">
        <Link href="/activity">All </Link>
        <Link href="/activity/friends">Friends</Link>
        <Link href="/activity/community">community</Link>
        <Link href="/activity/trending">trending</Link>
      </div>
      {children}
    </div>
  );
}
