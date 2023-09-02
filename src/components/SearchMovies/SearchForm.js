import toast from 'react-hot-toast';
import { MovieList } from 'components/MoviesList/MoviesList';
import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/Movies-API';

export const SearchBox = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchMoviesByQuery = useCallback(async query => {
    if (!query || !query.trim()) {
      toast.error("You didn't enter anything for the search.");
      return;
    }

    try {
      const response = await getMovies(
        `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      );
      setMoviesByQuery(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('searchQuery');
    if (query) {
      fetchMoviesByQuery(query);
    }
  }, [searchParams, fetchMoviesByQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const updateParams = query !== '' ? { searchQuery: query } : {};
    setSearchParams(updateParams);

    fetchMoviesByQuery(query);
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
