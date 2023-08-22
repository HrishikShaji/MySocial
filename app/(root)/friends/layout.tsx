import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 px-5 w-full flex flex-col gap-10">
      <div className="flex justify-around w-full text-white">
        <Link href="/friends">Your Friends</Link>
        <Link href="/friends/suggested">Suggested Friends</Link>
      </div>
      {children}
    </div>
  );
}
