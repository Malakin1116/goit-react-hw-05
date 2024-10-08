import { useState, useEffect } from "react";
import { fetchRequest } from "../themoviedb-api";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("query");

    if (searchQuery) {
      setQuery(searchQuery);
      handleSearchByQuery(searchQuery);
    }
  }, [location.search]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query) return;

    try {
      const res = await fetchRequest(`search/movie?query=${query}`);
      setMovies(res.data.results);
      navigate(`/movies?query=${query}`);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleSearchByQuery = async (searchQuery) => {
    try {
      const res = await fetchRequest(`search/movie?query=${searchQuery}`);
      setMovies(res.data.results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: "movies", query }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
