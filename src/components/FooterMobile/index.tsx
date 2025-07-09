import React from 'react'
import { menuLinks } from '../../configs/menuLinks'
import { NavLink } from 'react-router-dom'

type Props = {}

const FooterMobile = (props: Props) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner md:hidden">
      <nav>
        <ul className="flex justify-around p-2 text-gray-700">
          {menuLinks.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`
                }
              >
                <Icon size={24} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default FooterMobile