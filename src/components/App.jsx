import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from 'pages/HomePage/Home';
import Movies from 'pages/MoviesPage/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './MovieReviews/MovieReviews';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};
