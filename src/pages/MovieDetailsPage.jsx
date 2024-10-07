// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchDetails } from "../detailsApi"; // Функція для отримання деталей фільму

// export default function MovieDetailsPage() {
//   const { movieId } = useParams(); // Отримуємо movieId з URL
//   const [movie, setMovie] = useState(null); // Використовуємо null замість масиву

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const movieDetails = await fetchDetails(movieId);
//         setMovie(movieDetails);
//         console.log(movieDetails)
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     }

//     fetchData();
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>; // Показуємо "Loading..." поки дані не будуть завантажені
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//     </div>
//   );
// }
