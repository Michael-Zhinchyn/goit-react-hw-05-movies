import toast from 'react-hot-toast';
import { MovieList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/Movies-API';

export const SearchBox = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('searchQuery');
    if (query) {
      fetchMoviesByQuery(query);
    }
  }, [searchParams]);

  const fetchMoviesByQuery = async query => {
    if (!query.trim()) {
      toast.error('Please enter a search term!');
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = searchParams.get('searchQuery');
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
          onChange={evt => setSearchParams({ searchQuery: evt.target.value })}
        ></input>
        <button type="submit">Search</button>
      </form>
      {moviesByQuery.length > 0 && (
        <MovieList movies={moviesByQuery} title="Movies" />
      )}
    </div>
  );
};
