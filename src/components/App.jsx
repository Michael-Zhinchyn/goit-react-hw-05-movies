import { NavLink, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieItem from './MovieItem/MovieItem';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieItem />}></Route>
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </div>
  );
};
