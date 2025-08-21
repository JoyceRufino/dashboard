import { useState } from "react";
import Sidebar from "../../Layout/Sidebar";
import Header from "../../Layout/Header";
import { Outlet } from "react-router-dom";
import FooterMobile from "../../Layout/FooterMobile";


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
       <main className="p-8 pb-20 md:pb-8">
          <Outlet />
        </main>
      </div>
      
      {/* Footer mobile fixo */}
      <FooterMobile />
    </div>
  );
};

export default Layout;
