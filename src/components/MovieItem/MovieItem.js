import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/Movies-API';
import { StyledMovieWrapper } from './MovieItem.styled';

const MovieItem = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [movieVotes, setMovieVotes] = useState(null);

  useEffect(() => {
    const getMovieDetails = async id => {
      try {
        const response = await getMovies(`/movie/${id}?language=en-US`);
        setMovie(response.data);
        setGenres(response.data.genres);
        setMovieVotes(response.data.vote_average);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails(id);
  }, [id]);

  const movieGenres = genres.map(genre => genre.name).join(', ');
  const movieScore = (movieVotes * 10).toFixed(0);

  if (!movie) return <div>Завантаження...</div>;

  const { title, overview, poster_path } = movie;

  return (
    <StyledMovieWrapper>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}></img>
      <div>
        <h2>{title}</h2>
        <p>User Score: {movieScore} %</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres: </b>
        <p>{movieGenres}</p>
      </div>
    </StyledMovieWrapper>
  );
};

export default MovieItem;
