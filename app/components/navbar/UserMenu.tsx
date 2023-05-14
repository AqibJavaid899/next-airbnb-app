"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuITem";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="relative ">
      <div className="flex flex-row gap-3 items-center">
        {/* Modal Button */}
        <div
          className="py-3 px-4 cursor-pointer rounded-full hidden md:block transition hover:bg-neutral-100 shadow-sm text-sm font-semibold"
          onClick={() => {}}
        >
          Airbnb your home
        </div>
        {/* Avatar and Menu Buttons */}
        <div
          onClick={() => toggleMenuOpen()}
          className="flex flex-row items-center gap-3 cursor-pointer
          hover:shadow-md transition rounded-full border-[1px] border-neutral-200 p-4 md:py-1 md:px-2"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {/* Menu Items */}
      {isMenuOpen && (
        <div
          className="absolute right-0 top-14 rounded-xl shadow-md w-[28vw] md:w-3/4
           bg-white overflow-hidden text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClickHandler={() => {}} />
              <MenuItem label="Sign Up" onClickHandler={() => {}} />
              <MenuItem label="Dashboard" onClickHandler={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
