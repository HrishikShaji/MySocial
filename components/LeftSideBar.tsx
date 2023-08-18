import React from "react";
import BlogPost from "./BlogPost";

const LeftSideBar = () => {
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

export default LeftSideBar;
