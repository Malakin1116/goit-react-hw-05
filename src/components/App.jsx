import { NavLink } from "react-router-dom"

import  css from "./App.module.css"
import clsx from "clsx";

import axios from "axios";

const fetch = ()

// const APIKEY = '8b10ee9ec2e80fb61717045f67c36d53';


axios.get('https://api.themoviedb.org/3/search/movie/authentication', {
  params: {
    language: "en-US",
    query: 
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjEwZWU5ZWMyZTgwZmI2MTcxNzA0NWY2N2MzNmQ1MyIsIm5iZiI6MTcyODE1NTMwNS42ODcxNDIsInN1YiI6IjY2ZmY5YTY3NmZjNzRlNTc1NmY3ZjgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aqs7zPXEzgvUC_il--d4RvQhYGDHW5J__eb9gkBUbZc'
  },
});


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


