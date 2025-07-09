import { Home, Info, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

type SidebarProps = {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
};

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const collapseSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`fixed m-2 top-0 left-0 h-screen bg-gray-900 text-white p-5 transition-all duration-300 z-50 overflow-hidden  rounded-md  ${
        isCollapsed ? "w-22" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center h-8">
        <div
          className={`transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
        >
          <img src={logo} alt="Logo" className="h-5" />
        </div>

        <button
          className="text-white p-2 rounded focus:outline-none"
          onClick={collapseSidebar}
        >
          {isCollapsed ? (
            <img
              src={profile}
              alt="Profile"
              className="h-8 w-8 rounded-full transition-all duration-300 cursor-pointer"
            />
          ) : (
            <X size={24} className="cursor-pointer" />
          )}
        </button>
      </div>

      <hr className="my-5 border-gray-800" />

      <nav className="flex flex-col gap-2">
        {[
          { to: "/", label: "Home", icon: <Home size={24} /> },
          { to: "/about", label: "About", icon: <Info size={24} /> },
        ].map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center h-12 p-3 rounded-lg transition-all duration-300 ${
                isActive ? "bg-blue-800" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="min-w-[24px] flex justify-center">{icon}</div>

            <span
              className={`ml-3 overflow-hidden transition-all duration-300 ${
                isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
