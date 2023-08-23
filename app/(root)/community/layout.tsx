import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[50px]  w-full flex flex-col  ">
      <div className="flex justify-around items-center h-[50px] bg-neutral-700 sticky top-[50px] w-full text-white">
        <Link href="/community">Your Communities</Link>
        <Link href="/community/similar">Similar Communities</Link>
        <Link href="/community/trending">Trending Communities</Link>
      </div>
      {children}
    </div>
  );
}
