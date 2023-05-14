"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] rounded-full py-2 w-full md:w-auto shadow-sm hover:shadow-md transition  cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        {/* First Section */}
        <div className="px-6 text-sm font-semibold ">Anywhere</div>
        {/* Second Section */}
        <div className="hidden sm:block text-sm font-semibold flex-1 text-center px-6 border-x-[1px]">
          Any Week
        </div>
        {/* Third Section */}
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 text-white rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
