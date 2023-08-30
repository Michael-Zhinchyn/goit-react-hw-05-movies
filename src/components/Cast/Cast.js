import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/Movies-API';

const emptyImage =
  'https://apps-mea.element.com/SIMS/Images/loginhead.jpg?AspxAutoDetectCookieSupport=1';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async id => {
      try {
        const response = await getMovies(`/movie/${id}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCast(id);
  }, [id]);

  return (
    <div>
      <ul>
        {cast.map(item => {
          const { id, name, profile_path } = item;
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = emptyImage;
                }}
              />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
