import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { fetchRequest } from "../themoviedb-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleGoBack = () => {
    if (location.state?.from === "home") {
      navigate("/");
    } else if (location.state?.from === "movies") {
      navigate("/movies", {
        state: { query: location.state.query, movies: location.state.movies },
      });
    } else {
      navigate("/movies");
    }
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>

      {movieDetails && (
        <>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />

          <nav>
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </>
      )}
    </div>
  );
}
