import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div
      style={{ maxWidth: "400px" }}
      className="mx-auto bg-slate-100 dark:bg-slate-900 px-[10px] items-center flex justify-between h-[60px] fixed top-0 left-0 right-0 z-10 opacity-95"
    >
      <p className="dark:text-slate-200 text-slate-800">Logo</p>
      <div className="flex justify-center items-center gap-2">
        <p className="w-[42px] h-[42px] rounded-3xl duration-200 dark:hover:bg-slate-800 hover:bg-slate-200 flex items-center text-center justify-center">
          <ThemeSwitch />
        </p>
      </div>
    </div>
  );
};

export default Header;