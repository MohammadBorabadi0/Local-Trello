"use client";

import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import AvatarComponent from "./Avatar";
import Dropdown from "./Dropdown";

const RightSection = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const onFocus = (e) => {
    if (e.type === "focus") {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };

  return (
    <>
      {/* <section className="flex md:hidden items-center gap-3 text-white mr-3">
        <BiSearchAlt2 size={20} />
        <MdOutlineNotifications size={20} className="hidden sm:block" />
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="relative"
        >
          <AvatarComponent />
          {showDropdown && <Dropdown />}
        </button>
      </section> */}
      <section
        className={`flex items-center gap-3 pr-2 sm:pr-0 text-white ${
          isFocus ? "text-black" : "text-white"
        }`}
      >
        <div
          className={`hidden sm:flex ${
            isFocus ? "bg-white text-black" : "hover-link"
          } border border-gray-50 items-center gap-2 px-2 py-1 rounded-md`}
        >
          <BiSearchAlt2 className="mt-1" />
          <input
            type="search"
            className="bg-transparent placeholder-white outline-none"
            placeholder="Search"
            onFocus={onFocus}
          />
        </div>
        <span className="hidden sm:block text-white text-xl p-1 rounded-full hover-link cursor-pointer">
          <MdOutlineNotifications />
        </span>
        <span className="hidden sm:block text-white text-xl p-1 rounded-full hover-link cursor-pointer">
          <AiOutlineQuestionCircle />
        </span>
        <Dropdown />
        {/* <button
          className="relative"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <AvatarComponent />
          {showDropdown && <Dropdown />}
        </button> */}
      </section>
    </>
  );
};

export default RightSection;
