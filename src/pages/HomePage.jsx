import { useEffect, useState } from "react";
import { fetchMovies } from "../moviesApi";

import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchMovies();
        setTrending(movies.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trending.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: "home" }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
