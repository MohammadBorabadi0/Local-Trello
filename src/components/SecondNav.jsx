"use client";

import { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import { FiUsers, FiMoreHorizontal } from "react-icons/fi";
import { BsBarChart, BsChevronDoubleUp } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { PiRocketLaunch } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { BiFilter } from "react-icons/bi";
import AvatarComponent from "./Avatar";
import {
  useColorStore,
  useSettingsStore,
  useSidebarStore,
} from "@/store/store";
import Settings from "./Settings";

const TopNav = () => {
  const { showSidebar } = useSidebarStore((state) => state);
  const { showSettings, setShowSettings } = useSettingsStore((state) => state);
  const { bgSecondaryTheme } = useColorStore((state) => state);

  const [isFill, setIsFill] = useState(false);

  return (
    <section
      className={`fixed right-0 top-12 flex gap-3 justify-between ${
        showSidebar ? "w-[calc(100%-260px)]" : "w-[calc(100%-16px)]"
      } flex-wrap pl-3 pr-1 text-white py-3 z-10`}
      style={{ backgroundColor: bgSecondaryTheme }}
    >
      <div className="flex items-center gap-1 sm:gap-2 text-xl">
        <h2 className="font-bold hover-link px-2 py-1 rounded-md cursor-pointer">
          Board-1
        </h2>
        <button
          onClick={() => setIsFill(!isFill)}
          className="hover-link px-2 py-1 rounded-md text-sm sm:text-base"
        >
          {isFill ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        <button className="hover-link px-2 py-1 rounded-md text-sm sm:text-base">
          <FiUsers />
        </button>
        <div className="flex gap-1">
          <button className="flex items-center gap-1 text-sm sm:text-base font-semibold px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-slate-600">
            <BsBarChart className="rotate-180" />
            Board
          </button>
          <button className="text-sm sm:text-base text-white hover-link p-2 rounded-md">
            <FaChevronDown />
          </button>
        </div>
      </div>
      <div className="flex w-full sm:w-auto justify-end sm:justify-normal gap-1 sm:gap-2">
        <div className="flex items-center gap-1 border-r">
          <span className="hover-link px-1 sm:px-2 py-1 rounded-md">
            <PiRocketLaunch />
          </span>
          <span className="hover-link px-1 sm:px-2 py-1 rounded-md">
            <SlEnergy />
          </span>
          <button className="flex items-center gap-1 hover-link px-1 sm:px-2 py-1 mr-2 rounded-md font-semibold">
            <BiFilter />
            Filter
          </button>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="flex items-center relative">
            <AvatarComponent />
            <BsChevronDoubleUp className="absolute right-0 text-xs -bottom-1" />
          </button>
          <button className="flex items-center gap-1 text-sm sm:text-base font-semibold rounded-md bg-gray-100 hover:bg-gray-200 text-slate-600 px-2 py-1">
            <AiOutlineUserAdd className="text-lg" />
            Share
          </button>
          <button
            className="hover-link p-2 rounded-md"
            onClick={() => setShowSettings(true)}
          >
            <FiMoreHorizontal />
          </button>
        </div>
      </div>
      {showSettings && <Settings />}
    </section>
  );
};

export default TopNav;
