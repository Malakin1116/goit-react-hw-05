// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchRequest } from "../themoviedb-api";

// export default function MovieCast() {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     async function getCast() {
//       try {
//         const res = await fetchRequest(`movie/${movieId}/credits`);
//         setCast(res.data.cast);
//       } catch (error) {
//         console.error("Error fetching cast:", error);
//       }
//     }
//     getCast();
//   }, [movieId]);

//   return (
//     <ul>
//       {cast.map((actor) => (
//         <li key={actor.cast_id}>
//           {actor.name} as {actor.character}
//         </li>
//       ))}
//     </ul>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../themoviedb-api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetchRequest(`movie/${movieId}/reviews`);
        setReviews(res.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            <p>
              {review.author}: {review.content}
            </p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
}
