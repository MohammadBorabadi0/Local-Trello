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
      className={`fixed top-12 z-10 flex flex-wrap justify-between items-center px-3 pl-5 text-white transition-all duration-200 h-fit md:h-[55px] overflow-hidden ${
        showSidebar ? "w-[1236px]" : "w-[1520px]"
      }`}
      style={{ backgroundColor: bgSecondaryTheme }}
    >
      <div className="flex items-center gap-2 text-xl">
        <h2 className="font-bold hover-link px-2 py-1 rounded-md cursor-pointer">
          Board-1
        </h2>
        <button
          onClick={() => setIsFill(!isFill)}
          className="hover-link px-2 py-1 rounded-md text-base"
        >
          {isFill ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        <button className="hover-link px-2 py-1 rounded-md text-base">
          <FiUsers />
        </button>
        <div className="flex gap-1">
          <button className="flex items-center gap-1 text-base font-semibold px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-slate-600">
            <BsBarChart className="rotate-180" />
            Board
          </button>
          <button className="text-base text-white hover-link p-2 rounded-md">
            <FaChevronDown />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 border-r">
          <span className="hover-link px-2 py-1 rounded-md">
            <PiRocketLaunch />
          </span>
          <span className="hover-link px-2 py-1 rounded-md">
            <SlEnergy />
          </span>
          <button className="flex items-center gap-1 hover-link px-2 py-1 mr-2 rounded-md font-semibold">
            <BiFilter />
            Filter
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center relative">
            <AvatarComponent name="Mohammad Borabadi" />
            <BsChevronDoubleUp className="absolute right-0 text-xs -bottom-1" />
          </button>
          <button className="flex items-center gap-1 font-semibold rounded-md bg-gray-100 hover:bg-gray-200 text-slate-600 px-2 py-1">
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
