import { BotImage, UserImage } from "@/assets";
import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiSolidChevronRight } from "react-icons/bi";

const Home = () => {
  return (
    <div
      style={{ maxWidth: "400px" }}
      className="bg-slate-100 dark:bg-slate-900 container mx-auto px-[12px] h-screen"
    >
      <section>
        <p className="text-[#7E8299] flex items-center justify-center text-[32px] font-semibold  pt-[120px]">
          Dashboard
        </p>
        <button className="flex gap-2 mx-auto mt-3 bg-blue-500 px-1 py-1 rounded-3xl items-center ">
          <Image src={UserImage} alt="User-Image" />
          <p className="text-white pr-3">Welcome Guest!</p>
        </button>
      </section>
      <section>
        <div className="flex gap-2  pt-[32px] justify-center">
          <div className="w-[112px] rounded-lg cursor-pointer  bg-white dark:bg-slate-700">
            <p className="flex justify-center items-center pt-3">
              <AiOutlinePlus className="flex text-[32px] font-black text-blue-600 justify-center items-center" />
            </p>
            <p className="text-[12px] pb-1 text-center text-blue-600 ">
              create a new bot
            </p>
          </div>
          <div className="w-[112px] rounded-lg cursor-pointer   bg-white dark:bg-slate-700">
            <p className="flex justify-center items-center pt-3">
              <RiSecurePaymentFill className="flex text-[32px] font-black text-blue-600 justify-center items-center" />
            </p>
            <p className="text-[12px] pb-1 text-center text-blue-600 ">
              payments
            </p>
          </div>
          <div className="w-[112px] rounded-lg  cursor-pointer bg-white dark:bg-slate-700">
            <p className="flex justify-center items-center pt-3">
              <TfiMoreAlt className="flex text-[32px] font-black text-blue-600 justify-center items-center" />
            </p>
            <p className="text-[12px] pb-1 text-center text-blue-600 ">more </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col justify-center gap-2 pt-[32px] pl-1 ">
          <p className="font-medium">My bots</p>
          <div className="flex flex-col  gap-2 pt-3">
            <div className="w-[360px] flex gap-2 rounded-2xl h-[64px] bg-white dark:bg-slate-600 pl-2 py-[9px]">
              <Image
                src={BotImage}
                className="w-[50px] h-[50px] "
                alt="BotImage "
              />
              <div>
                <p className="font-medium text-[18px]">Photolab</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#7E8299] text-[13px]">28,367 users</p>
                  <p className="w-[49px] h-[15px] flex justify-center items-center rounded-lg bg-green-100 text-green-500 text-[9px]">
                    +1.33%
                  </p>
                </div>
              </div>
              <p className="flex justify-end pl-20 cursor-pointer">
                <BiSolidChevronRight className="text-blue-600 text-[56px] " />
              </p>
            </div>
            <div className="w-[360px] flex gap-2 rounded-2xl h-[64px] bg-white dark:bg-slate-600 pl-2 py-[9px]">
              <Image
                src={BotImage}
                className="w-[50px] h-[50px] "
                alt="BotImage "
              />
              <div>
                <p className="font-medium text-[18px]">Photolab</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#7E8299] text-[13px]">28,367 users</p>
                  <p className="w-[49px] h-[15px] flex justify-center items-center rounded-lg bg-green-100 text-green-500 text-[9px]">
                    +1.33%
                  </p>
                </div>
              </div>
              <p className="flex justify-end pl-20">
                <BiSolidChevronRight className="text-blue-600 text-[56px] " />
              </p>
            </div>
            <div className="w-[360px] flex gap-2 rounded-2xl h-[64px] bg-white dark:bg-slate-600 pl-2 py-[9px]">
              <Image
                src={BotImage}
                className="w-[50px] h-[50px] "
                alt="BotImage "
              />
              <div>
                <p className="font-medium text-[18px]">Photolab</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#7E8299] text-[13px]">28,367 users</p>
                  <p className="w-[49px] h-[15px] flex justify-center items-center rounded-lg bg-green-100 text-green-500 text-[9px]">
                    +1.33%
                  </p>
                </div>
              </div>
              <p className="flex justify-end pl-20">
                <BiSolidChevronRight className="text-blue-600 text-[56px] " />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
