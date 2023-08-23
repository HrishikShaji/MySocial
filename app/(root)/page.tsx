import BlogPost from "@/components/BlogPost";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import StatusContainer from "@/components/StatusContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full gap-2  pt-[50px]">
      <StatusContainer />

      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </main>
  );
}
