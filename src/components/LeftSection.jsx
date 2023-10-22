import { BiCategory, BiChevronDown } from "react-icons/bi";
import Nav from "./Nav";
// Icons
import { BsPlus, BsTrello } from "react-icons/bs";

const LeftSection = () => {
  return (
    <section className="flex items-center">
      <button className="text-white ml-2">
        <BiCategory size={18} />
      </button>
      <div className="flex items-center gap-1 bg-transparent text-white cursor-pointer hover-link ml-2 p-1 sm:px-2 sm:py-1 rounded-md">
        <BsTrello />
        <span className="font-bold text-lg">Trello</span>
      </div>
      <Nav />
      <button className="hidden xl:block text-white font-semibold link-active active ml-2 px-2 py-1 rounded-md">
        Create
      </button>
      <button className="flex xl:hidden items-center text-sm sm:text-base gap-3 ml-3 sm:ml-6 text-white">
        <span className="flex items-center gap-1">
          More
          <BiChevronDown size={25} />
        </span>
        <span className="xl:hidden link-active hover-link p-1 sm:p-0 text-2xl sm:text-3xl rounded-md">
          <BsPlus />
        </span>
      </button>
    </section>
  );
};

export default LeftSection;
