import { BotImage } from "@/assets";
import Image from "next/image";
import React from "react";
import { HiPlus } from "react-icons/hi";

import { FaCreditCard } from "react-icons/fa6";
import { TfiMoreAlt } from "react-icons/tfi";
import { AiOutlineRight } from "react-icons/ai";

const Home = () => {
  return (
    <div
      style={{ maxWidth: "420px" }}
      className="bg-slate-100 dark:bg-[#151521] container mx-auto px-[12px] h-screen"
    >
      <section>
        <p className="text-[#7E8299] flex items-center justify-center text-[32px] font-semibold  pt-[110px]">
          Dashboard
        </p>
        {/* <button className="btn-grad mx-auto flex justify-center mt-3  px-3 py-1 rounded-3xl items-center ">
          <p className="text-white ">Welcome Guest!</p>
        </button> */}

        <button className="gradient_anim_btn mx-auto flex justify-center mt-3  px-3 py-1 rounded-3xl items-center ">
          <p className="text-white ">Welcome Guest!</p>
        </button>
      </section>
      <section>
        <div className="flex gap-2  pt-[32px] justify-center">
          <div className="w-[112px] rounded-lg cursor-pointer  bg-white dark:bg-[#1E1E2D]">
            <p className="flex justify-center items-center pt-3">
              <HiPlus className="flex text-[32px] font-black text-blue-600 justify-center items-center" />
            </p>
            <p className="text-[12px] pb-1 text-center text-blue-600 ">
              create a new bot
            </p>
          </div>
          <div className="w-[112px] rounded-lg cursor-pointer   bg-white dark:bg-[#1E1E2D]">
            <p className="flex justify-center items-center pt-3">
              <FaCreditCard className="flex text-[32px] font-black text-blue-600 justify-center items-center" />
            </p>
            <p className="text-[12px] pb-1 text-center text-blue-600 ">
              payments
            </p>
          </div>
          <div className="w-[112px] rounded-lg  cursor-pointer bg-white dark:bg-[#1E1E2D]">
            <p className="flex justify-center items-center pt-3">
              <TfiMoreAlt className="flex text-[32px] font-black text-blue-600 justify-center items-center" />
            </p>
            <p className="text-[12px] pb-1 text-center text-blue-600 ">more </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col justify-center gap-2 pt-[32px] pl-1 ">
          <p className="font-semibold text-[24px] pl-1  text-slate-950 dark:text-slate-50   transition duration-100">
            My bots
          </p>
          <div className="flex flex-col  gap-2 pt-3">
            <div className="w-[360px] flex gap-2 rounded-2xl h-[64px] bg-white dark:bg-[#1E1E2D] pl-2 py-[9px]">
              <Image
                src={BotImage}
                className="w-[50px] h-[50px] "
                alt="BotImage "
              />
              <div>
                <p className="font-medium text-[18px] text-slate-950 dark:text-slate-50   transition duration-75">
                  Photolab
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[#7E8299] text-[13px]">28,367 users</p>
                  <p className="w-[49px] h-[15px] flex justify-center items-center rounded-lg bg-green-100 text-green-500 text-[9px]">
                    +1.33%
                  </p>
                </div>
              </div>
              <p className="flex justify-end pl-24 cursor-pointer ">
                <AiOutlineRight className="text-blue-600 text-[42px] " />
              </p>
            </div>
            <div className="w-[360px] flex gap-2 rounded-2xl h-[64px] bg-white dark:bg-[#1E1E2D] pl-2 py-[9px]">
              <Image
                src={BotImage}
                className="w-[50px] h-[50px] "
                alt="BotImage "
              />
              <div>
                <p className="font-medium text-[18px] text-slate-950 dark:text-slate-50   transition duration-75">
                  Photolab
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[#7E8299] text-[13px]">28,367 users</p>
                  <p className="w-[49px] h-[15px] flex justify-center items-center rounded-lg bg-green-100 text-green-500 text-[9px]">
                    +1.33%
                  </p>
                </div>
              </div>
              <p className="flex justify-end pl-24">
                <AiOutlineRight className="text-blue-600 text-[42px] " />
              </p>
            </div>
            <div className="w-[360px] flex gap-2 rounded-2xl h-[64px] bg-white dark:bg-[#1E1E2D] pl-2 py-[9px]">
              <Image
                src={BotImage}
                className="w-[50px] h-[50px] "
                alt="BotImage "
              />
              <div>
                <p className="font-medium text-[18px] text-slate-950 dark:text-slate-50   transition duration-75">
                  Photolab
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[#7E8299] text-[13px]">28,367 users</p>
                  <p className="w-[49px] h-[15px] flex justify-center items-center rounded-lg bg-green-100 text-green-500 text-[9px]">
                    +1.33%
                  </p>
                </div>
              </div>
              <p className="flex justify-end pl-24">
                <AiOutlineRight className="text-blue-600 text-[42px] " />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// made by Temur tg: https://t.me/Temur_vibes
