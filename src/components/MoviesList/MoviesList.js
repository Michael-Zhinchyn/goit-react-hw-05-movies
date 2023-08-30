import { Link } from 'react-router-dom';
import { StyledMovieList } from './MovieList.styled';

export const MovieList = ({ trendingMovies }) => {
  return (
    <div>
      <h1>Trending today</h1>
      <StyledMovieList>
        {trendingMovies.map(movie => {
          const { id, title } = movie;
          return (
            <div key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </div>
          );
        })}
      </StyledMovieList>
    </div>
  );
};
