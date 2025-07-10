import { BellDot, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { menuLinks } from "../../configs/menuLinks";
import MenuList from "../MenuList";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="shadow rounded h-16 px-6 flex items-center justify-between mx-5">
        {/* Ícone hamburger - só aparece no mobile */}
        <div className="md:hidden">
          <Menu
            className="w-6 h-6 cursor-pointer text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          />
        </div>

        {/* Nav - só aparece a partir do md */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium flex-1">
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-blue-600">Atalho 1</li>
            <li className="cursor-pointer hover:text-blue-600">Atalho 2</li>
            <li className="cursor-pointer hover:text-blue-600">Atalho 3</li>
          </ul>
        </nav>

        {/* Ícones Bell e User */}
        <div className="flex items-center space-x-4 text-gray-600 md:ml-auto">
          <BellDot className="w-6 h-6 cursor-pointer hover:text-blue-600" />
          <User className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        </div>
      </header>

      {/* Modal menu full screen - só aparece quando menuOpen == true */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          {/* Cabeçalho do modal com botão fechar */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="p-2 rounded hover:bg-gray-200"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Lista do menu */}
          <MenuList onItemClick={() => setMenuOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Header;
