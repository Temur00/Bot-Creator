import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  return (
    <div
      style={{ maxWidth: "400px" }}
      className="mx-auto bg-slate-100 px-[10px] items-center flex justify-between h-[60px] fixed top-0 left-0 right-0 z-10 opacity-95"
    >
      <p className="dark:text-slate-200 text-slate-800">Logo</p>
      <div className="flex justify-center items-center gap-2">
        <p className="w-[40px] h-[40px] rounded-3xl duration-200 dark:hover:bg-slate-800 hover:bg-slate-200 flex items-center text-center justify-center">
          <HiOutlineDotsVertical className="w-[24px] h-[24px] duration-200 dark:text-slate-200 text-[#7E8299] cursor-pointer" />
        </p>
        <p className="w-[40px] h-[40px] rounded-3xl duration-200 dark:hover:bg-slate-800 hover:bg-slate-200 flex items-center text-center justify-center">
          <CgClose className="w-[24px] h-[24px] duration-200 dark:text-slate-200 text-[#7E8299] cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default Header;
