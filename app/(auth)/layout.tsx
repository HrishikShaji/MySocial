import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-teal-500 h-screen w-full flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
