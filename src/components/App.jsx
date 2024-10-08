import { Routes, Route } from "react-router-dom";
import  css from "./App.module.css";

import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";
// import NotFoundPage from "../pages/NotFoundPage";


export default function App() {
  return (
    <div className={css.container}>
  
      <Navigation/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

    </div>
  ); 
}





   
        // <Routes>
        //   <Route path="/" element={<HomePage />} />
        //   <Route path="/movies" element={<MoviesPage />} />
        //   <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        //     <Route path="cast" element={<MovieCast />} />
        //     <Route path="reviews" element={<MovieReviews />} />
        //   </Route>
        //   <Route path="*" element={<NotFoundPage />} />
        // </Routes>
    