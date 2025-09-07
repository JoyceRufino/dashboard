import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { sidebarData } from "./data";

type SidebarProps = {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
};

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const collapseSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-900 text-white p-5 transition-all duration-400 z-50 overflow-hidden ${
        isCollapsed ? "w-22" : "w-64"
      }`}
    >
      {/* Logo e botão */}
      <div className="flex justify-between items-center h-8">
        <div
          className={`transition-opacity duration-400 ${
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
              className="h-8 w-8 rounded-full transition-all duration-400 cursor-pointer"
            />
          ) : (
            <X size={24} className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* Links do menu */}
      <nav className="flex flex-col gap-2 mt-5">
        {sidebarData.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center h-12 p-3 rounded-lg transition-all duration-400 ${
                isActive ? "bg-blue-800" : "hover:bg-gray-700"
              }`
            }
          >
            <div className="min-w-[24px] flex justify-center">
              <Icon size={24} />
            </div>
            <span
              className={`ml-3 overflow-hidden transition-all ease-in-out duration-400 ${
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
