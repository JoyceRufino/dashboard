import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar aparece só a partir do md */}
      <div className="hidden md:block">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Conteúdo principal */}
      <div
        className={`flex flex-col ease-in-out duration-400 w-full ${
          isCollapsed ? "md:ml-24" : "md:ml-64"
        } ml-0`} // no mobile ml=0 (sem margem)
      >
        <Header />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
