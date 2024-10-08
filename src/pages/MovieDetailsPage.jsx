// // import { useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { fetchMovieById } from "../moviesApi"; // Викликаємо функцію з API

// // export default function MovieDetailsPage() {
// //   const { id } = useParams();  // Отримуємо id з URL
// //   const [movie, setMovie] = useState(null);

// //   useEffect(() => {
// //     console.log(id); // Перевірка, чи викликається useEffect
// //     async function fetchData() {
// //       try {

// //         const movieData = await fetchMovieById(id); // Виклик функції з API
// //         setMovie(movieData);
// //         console.log("Movie Data:", movieData);  // Логування даних фільму
// //       } catch (error) {
// //         console.error("Error fetching movie details:", error.response ? error.response.data : error.message);
// //       }
// //     }

// //     fetchData();
// //   }, [id]);

// //   if (!movie) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>{movie.title}</h1>
// //       <p>{movie.overview}</p>
// //       <p>Release Date: {movie.release_date}</p>
// //       <p>Rating: {movie.vote_average}</p>
// //     </div>
// //   );
// // }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { fetchMovieById } from "../fetchMovieById";

// export default function MovieDetailsPage() {
//   const { id } = useParams();

//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     async function fetch() {
//       try {
//         const serv = await fetchMovieById(id);
//         setMovie(serv);
//         console.log("Movie:", serv);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     fetch();
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title || "No title available"}</h1>
//       <p>{movie.overview || "No overview available"}</p>
//       <p>Release Date: {movie.release_date || "N/A"}</p>
//       <p>Rating: {movie.vote_average || "N/A"}</p>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchRequest } from "../themoviedb-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams(); // Отримання movieId з URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const res = await fetchRequest(`movie/${movieId}`);
        setMovieDetails(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </>
      )}
      <p>Additional Information:</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
