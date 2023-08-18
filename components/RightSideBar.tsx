import React from "react";
import BlogPost from "./BlogPost";

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-2">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost /> <BlogPost />
      <BlogPost />
      <BlogPost /> <BlogPost />
    </div>
  );
};

export default RightSideBar;
