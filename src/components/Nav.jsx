// import Image from "next/image";

import { BiChevronDown } from "react-icons/bi";

const navItems = ["Workspaces", "Recent", "Starred", "Templates"];

const Nav = () => {
  return (
    <nav>
      <ul className="hidden md:flex items-center text-white font-semibold gap-2 text-sm">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex gap-1 items-center px-2 py-1 cursor-pointer rounded-md hover-link transition-colors duration-100"
          >
            {item} <BiChevronDown />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
