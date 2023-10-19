import { BiChevronDown } from "react-icons/bi";
import Nav from "./Nav";
// Icons
import { BsPlus, BsTrello } from "react-icons/bs";

const LeftSection = () => {
  return (
    <section className="flex items-center">
      <div className="cursor-pointer hover-link px-2 py-1 rounded-md">
        <img src="/more.svg" alt="more-icon" className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-1 bg-transparent text-white cursor-pointer hover-link px-2 py-1 rounded-md">
        <BsTrello />
        <span className="font-bold text-lg">Trello</span>
      </div>
      <Nav />
      <button className="hidden text-white font-semibold link-active active ml-2 px-2 py-1 rounded-md">
        Create
      </button>
      <button className="flex items-center gap-3 ml-6 text-white">
        <span className="flex items-center gap-1">
          More
          <BiChevronDown size={25} />
        </span>
        <span className="link-active hover-link p-1 rounded-md">
          <BsPlus size={25} />
        </span>
      </button>
    </section>
  );
};

export default LeftSection;
