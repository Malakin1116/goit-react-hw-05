import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../themoviedb-api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetchRequest(`movie/${movieId}/reviews`);
        console.log(res.data); // Перевірка всієї відповіді
        setReviews(res.data.results); // Зміни 'reviews' на 'results'
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((e) => (
          <li key={e.id}>
            <p>
              {e.author}: {e.content}
            </p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
}
