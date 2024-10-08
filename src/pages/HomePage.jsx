import { useEffect, useState } from "react";
import { fetchMovies } from "../moviesApi";

import { Link, Outlet, useLocation } from "react-router-dom";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchMovies();
        setTrending(movies.results);
        console.log(movies.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }

    fetchData();
  }, []);

  const location = useLocation();

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trending.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
