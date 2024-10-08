// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchMovieById } from "../moviesApi"; // Викликаємо функцію з API

// export default function MovieDetailsPage() {
//   const { id } = useParams();  // Отримуємо id з URL
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     console.log(id); // Перевірка, чи викликається useEffect
//     async function fetchData() {
//       try {
        
//         const movieData = await fetchMovieById(id); // Виклик функції з API
//         setMovie(movieData);
//         console.log("Movie Data:", movieData);  // Логування даних фільму
//       } catch (error) {
//         console.error("Error fetching movie details:", error.response ? error.response.data : error.message);
//       }
//     }
  
//     fetchData();
//   }, [id]);
  

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <p>Release Date: {movie.release_date}</p>
//       <p>Rating: {movie.vote_average}</p>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchMovieById } from "../moviesApi";

export default function MovieDetailsPage (){

    const { id } = useParams();

    console.log(id)

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetch () {
            try 
                {const serv = await fetchMovieById(id)
                    setMovie(serv)
                    console.log("Movie:", serv);
                }
           catch (err) 
                {
                 console.log(err);
            }
        }

        fetch();
    }, [id])


    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
          <h1>{movie.title || 'No title available'}</h1>
          <p>{movie.overview || 'No overview available'}</p>
          <p>Release Date: {movie.release_date || 'N/A'}</p>
          <p>Rating: {movie.vote_average || 'N/A'}</p>
        </div>
      );
}