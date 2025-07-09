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
        className={`flex flex-col transition-all duration-300 w-full ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
