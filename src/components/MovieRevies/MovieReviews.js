import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/Movies-API';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getMovieReviews = async id => {
      try {
        const response = await getMovies(`/movie/${id}/reviews`);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews(id);
  }, [id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>Sorry, no reviews for this movie yet</p>
      ) : (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;
            return (
              <React.Fragment key={id}>
                <li>
                  <b>Author: {author} </b>
                </li>
                <p>{content}</p>
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
