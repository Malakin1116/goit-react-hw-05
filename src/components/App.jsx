import { NavLink } from "react-router-dom"

import  css from "./App.module.css"
import clsx from "clsx";



const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function App() {
  return (
    <div className={css.container}>
      <ul>
        <li>
          <NavLink to="/HomePage" className={getNavLinkClass}>
            HomePages
          </NavLink>
        </li>
        <li>
          <NavLink to="/MoviesPage" className={getNavLinkClass}>
            MoviesPage
          </NavLink>
        </li>
        <li>
          <NavLink to="/MovieDetailsPage" className={getNavLinkClass}>
            MovieDetailsPage
          </NavLink>
        </li>
        <li>
          <NavLink to="/NotFoundPage" className={getNavLinkClass}>
            NotFoundPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
}


