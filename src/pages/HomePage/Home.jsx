import { useEffect, useState } from 'react';
import { getMovies } from 'services/Movies-API';
import { MovieList } from 'components/MoviesList/MoviesList';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getMovies('/trending/all/day?language=en-US');
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);
  return <MovieList movies={trendingMovies} />;
};

export default Home;
