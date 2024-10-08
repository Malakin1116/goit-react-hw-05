import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequest } from "../../themoviedb-api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const res = await fetchRequest(`movie/${movieId}/credits`);
        setCast(res.data.cast);
        console.log(res.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map((e) => (
        <li key={e.cast_id}>
          {e.name} as {e.character}
        </li>
      ))}
    </ul>
  );
}
