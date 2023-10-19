"use client";

import {
  BiSolidChevronLeft,
  BiSolidChevronRight,
  BiSolidCalendar,
} from "react-icons/bi";
import AvatarComponent from "./Avatar";
import { BsChevronDown, BsPlus, BsTable, BsTrello } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { useSidebarStore, useColorStore } from "@/store/store";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useSidebarStore((state) => state);
  const { bgSecondaryTheme } = useColorStore(
    (state) => state
  );

  return (
    <aside
      className={`h-[93vh] fixed top-12 bottom-0 left-0 z-20 border-r border-gray-200 text-white ${
        showSidebar ? "min-w-[300px]" : "min-w-[16px]"
      } relative transition-all duration-200`}
      style={{ backgroundColor: bgSecondaryTheme }}
    >
      {/* Toggle Sidebar */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        style={{ backgroundColor: bgSecondaryTheme }}
        className={`absolute top-4 ${
          showSidebar
            ? "right-4 hover-link rounded-md text-lg p-2"
            : "-right-[14px] border rounded-full text-base p-1"
        } border-gray-300 text-white`}
      >
        {showSidebar ? <BiSolidChevronLeft /> : <BiSolidChevronRight />}
      </button>
      <section className={`${showSidebar ? "block" : "hidden"} py-3`}>
        <div className="flex items-center gap-3 h-20 font-medium px-4 mb-2 pb-2 border-b border-gray-400">
          <AvatarComponent name="Behzad" round="5px" size="40" />
          <div className="flex flex-col">
            <h2>{`Behzad Rezaei's`}</h2>
            <span>workspace</span>
            <span>Free</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-3 px-4 py-2 hover-link cursor-pointer">
            <BsTrello />
            Boards
          </span>
          <div className="flex items-center justify-between pl-4 pr-3 py-2 hover-link">
            <span className="flex items-center gap-3">
              <AiOutlineUser />
              Members
            </span>
            <BsPlus className="text-2xl" />
          </div>
          <div className="flex items-center justify-between px-4 py-2 hover-link">
            <span className="flex items-center gap-3">
              <IoSettingsOutline />
              Workspace settings
            </span>
            <BsChevronDown />
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <h4 className="px-3 font-semibold mb-2">Workspace views</h4>
          <span className="flex items-center gap-2 px-4 py-2 italic hover-link">
            <BsTable />
            Table
          </span>
          <span className="flex items-center gap-2 px-4 py-2 italic hover-link">
            <BiSolidCalendar />
            Calendar
          </span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center px-3">
            <h4 className="font-semibold">Your boards</h4>
            <BsPlus className="text-2xl cursor-pointer hover-link rounded-sm" />
          </div>
          <div className="flex flex-col gap-2 mt-3 text-sm">
            <div className="flex gap-2 items-center hover-link px-4 py-1">
              <span className="inline-block bg-yellow-400 w-6 h-6 rounded-sm"></span>
              Board-1
            </div>
            <div className="flex gap-2 items-center hover-link px-4 py-1">
              <span className="inline-block bg-orange-600 w-6 h-6 rounded-sm"></span>
              Board-2
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
