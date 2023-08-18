import BlogPost from "@/components/BlogPost";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import StatusContainer from "@/components/StatusContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen pt-40">
      <StatusContainer />

      <div className=" w-full flex h-full px-2">
        <div className="h-full  custom-scrollbar overflow-y-scroll w-[15%] pr-2">
          <LeftSideBar />
        </div>
        <div className="h-full  custom-scrollbar overflow-y-scroll w-[60%] p-2">
          <div className="flex flex-col gap-2">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </div>
        <div className="h-full  custom-scrollbar overflow-y-scroll w-[25%] p-2">
          <RightSideBar />
        </div>
      </div>
    </main>
  );
}
