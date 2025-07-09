import { useState } from "react";
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
     
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={`flex flex-col ease-in-out duration-400 w-full ${
          isCollapsed ? "ml-24" : "ml-64"
        }`}
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
