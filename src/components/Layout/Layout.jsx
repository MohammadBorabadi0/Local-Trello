import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import TopNav from "../SecondNav";
import { useColorStore } from "@/store/store";

const Layout = ({ children }) => {
  const { bgPrimaryTheme } = useColorStore((state) => state);

  return (
    <div
      className="max-w-screen-2xl mx-auto h-screen"
      style={{ backgroundColor: bgPrimaryTheme }}
    >
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="flex flex-col overflow-x-auto h-screen">
          <TopNav />
          {children}
        </div>
      </section>
    </div>
  );
};

export default Layout;
