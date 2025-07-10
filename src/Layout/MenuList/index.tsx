import type { LucideIcon } from "lucide-react";
import { menuLinks } from "../../configs/menuLinks";
import { NavLink } from "react-router-dom";

const MenuList = ({ onItemClick }: { onItemClick?: () => void }) => (
  <nav>
    <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-800">
      {menuLinks.map(({ to, label, icon: Icon }) => (
        <li
          key={to}
          className="cursor-pointer hover:text-blue-600 flex items-center gap-2"
          onClick={onItemClick}
        >
          <Icon size={24} />
          <NavLink to={to} className="block w-full">
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default MenuList;
