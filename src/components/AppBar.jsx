import { NavLink, Link } from 'react-router-dom';
import { BiHome } from "react-icons/bi";

import clsx from 'clsx';
import style from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const AppBar = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
      <BiHome size={50}/>
      </Link>
      <nav className={style.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
