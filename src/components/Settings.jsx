import {
  secondaryColors,
  useColorStore,
  useSettingsStore,
  useThemeStore,
} from "@/store/store";
import { signOut } from "next-auth/react";
import { IoClose } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import Toogle from "./Toggle";

const Settings = () => {
  const { setBgPrimaryTheme, setBgSecondaryTheme } = useColorStore(
    (state) => state
  );
  const { setShowSettings } = useSettingsStore((state) => state);
  const { bgTheme, lightMode } = useThemeStore((state) => state);

  return (
    <section
      style={{ backgroundColor: bgTheme }}
      className={`shadow-md w-[300px] transition-all duration-150 fixed top-12 h-screen right-0 z-30 p-4 ${
        lightMode ? "text-black" : "text-white"
      }`}
    >
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h4 className="font-semibold text-lg">Colors</h4>
        <button className="text-2xl" onClick={() => setShowSettings(false)}>
          <IoClose />
        </button>
      </div>
      <div className="flex gap-2">
        {Object.keys(secondaryColors).map((color, index) => (
          <button
            onClick={() => {
              setBgPrimaryTheme(color);
              setBgSecondaryTheme(color);
            }}
            key={index}
            className="w-6 h-6 rounded-full border"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      <div className="mt-8">
        <Toogle />
      </div>
      <button
        onClick={() => {
          signOut();
        }}
        className={`flex items-center gap-2 font-semibold mt-4 border-t w-full pt-2 ${
          lightMode ? "text-black" : "text-white"
        }`}
      >
        <GoSignOut />
        Sign Out
      </button>
    </section>
  );
};

export default Settings;
