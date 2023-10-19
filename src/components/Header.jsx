import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Header = () => {
  return (
    <>
      <header className="flex fixed top-0 left-0 right-0 z-30 justify-between items-center h-12 shadow-sm border-b border-gray-400 px-3 overflow-hidden">
        <LeftSection />
        <RightSection />
      </header>
    </>
  );
};

export default Header;
