




export default function MoviesPage() {
    
    return <div>MoviesPage</div>;
  }
  

// import { useState } from 'react';
// import { fetchRequest } from '../themoviedb-api'; // Функція для запиту до API
// import MovieList from '../components/MovieList';

// export default function MoviesPage() {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async (event) => {
//     event.preventDefault();
//     if (!query) return;

//     try {
//       const res = await fetchRequest(`search/movie?query=${query}`);
//       setMovies(res.data.results);
//     } catch (error) {
//       console.error('Error searching for movies:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Search Movies</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter movie name"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <MovieList movies={movies} />
//     </div>
//   );
// }
