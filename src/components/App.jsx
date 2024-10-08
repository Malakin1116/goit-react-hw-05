// import { Routes, Route } from "react-router-dom";
// import css from "./App.module.css";

// import Navigation from "./Navigation/Navigation";
// import HomePage from "../pages/HomePage";
// import MovieDetailsPage from "../pages/MovieDetailsPage";
// import MoviesPage from "../pages/MoviesPage";
// // import NotFoundPage from "../pages/NotFoundPage";

// export default function App() {
//   return (
//     <div className={css.container}>
//       <Navigation />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<MoviesPage />} />
//         <Route path="/movies/:id" element={<MovieDetailsPage />} />

//         <Route path="*" element={<HomePage />} />
//       </Routes>
//     </div>
//   );
// }

// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/movies" element={<MoviesPage />} />
//   <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//     <Route path="cast" element={<MovieCast />} />
//     <Route path="reviews" element={<MovieReviews />} />
//   </Route>
//   <Route path="*" element={<NotFoundPage />} />
// </Routes>

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading Cast...</div>}>
                  <MovieCast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading Reviews...</div>}>
                  <MovieReviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
