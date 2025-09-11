import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm text-slate-300 hover:text-blue-300 transition-colors duration-200 ${
          isActive ? 'text-white font-bold' : ''
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

export default NavItem;