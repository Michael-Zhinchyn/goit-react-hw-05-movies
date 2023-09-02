import { Link, useLocation } from 'react-router-dom';
import { StyledMovieList } from './MovieList.styled';

export const MovieList = ({ movies, title = 'Trending today' }) => {
  const location = useLocation();
  return (
    <div>
      <h1>{title}</h1>
      <StyledMovieList>
        {movies.map(movie => {
          const { id, title } = movie;
          return (
            <div key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </div>
          );
        })}
      </StyledMovieList>
    </div>
  );
};
