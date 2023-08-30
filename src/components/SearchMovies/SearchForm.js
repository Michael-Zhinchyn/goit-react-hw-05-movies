import { MovieList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { getMovies } from 'services/Movies-API';

export const SearchBox = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const fetchMoviesByQuery = async query => {
    if (query === '') return;

    try {
      const response = await getMovies(
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      );
      console.log(response.data.results);
      setMoviesByQuery(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;

    fetchMoviesByQuery(searchQuery);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          autoComplete="off"
        ></input>
        <button type="submit">Search</button>
      </form>
      {moviesByQuery.length > 0 && (
        <MovieList movies={moviesByQuery} title="Movies" />
      )}
    </div>
  );
};
