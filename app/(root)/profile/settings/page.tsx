import React from "react";

const page = () => {
  return (
    <div className="text-white px-10">
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
        <div className="flex flex-col gap-2">
          <label className="pl-1">label</label>
          <input className="p-2 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-1">label</label>
          <input className="p-2 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-1">label</label>
          <input className="p-2 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-1">label</label>
          <input className="p-2 rounded-md" />
        </div>
      </form>
    </div>
  );
};

export default page;
