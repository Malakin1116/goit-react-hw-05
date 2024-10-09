// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { fetchRequest } from "../themoviedb-api";
// import MovieList from "../components/MovieList/MovieList";

// export default function MoviesPage() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const searchQuery = searchParams.get("query");
//     if (searchQuery) {
//       setQuery(searchQuery);
//       fetchMovies(searchQuery);
//     }
//   }, [searchParams]);

//   const fetchMovies = async (searchQuery) => {
//     try {
//       const res = await fetchRequest(`search/movie?query=${searchQuery}`);
//       setMovies(res.data.results);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     if (!query) return;

//     await fetchMovies(query);
//     setSearchParams({ query });
//   };

//   return (
//     <div>
//       <h1>Search Movies</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter movie"
//         />
//         <button type="submit">Search</button>
//       </form>

//       <MovieList
//         movies={movies}
//         from="movies"
//         search={searchParams.toString()}
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchRequest } from "../themoviedb-api";
import MovieList from "../components/MovieList/MovieList";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
      fetchMovies(searchQuery);
    }
  }, [searchParams]);

  const fetchMovies = async (searchQuery) => {
    try {
      const res = await fetchRequest(`search/movie?query=${searchQuery}`);
      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    searchParams.set("owner", e.target.elements.owner.value);
    setSearchParams(searchParams);

    if (!query) return;

    await fetchMovies(query);
    setSearchParams({ query });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="owner"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie"
        />
        <button type="submit">Search</button>
      </form>

      <MovieList
        movies={movies}
        from="movies"
        search={searchParams.toString()}
      />
    </div>
  );
}
