import { getReviewsById } from 'Service/serviceApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    getReviewsById(movieId).then(data => {
      setMovieInfo(data.results);
    });
  }, [movieId]);
  if (!movieInfo) return;
  return (
    <div>
      {movieInfo.length > 0 ? (
        <ul>
          {movieInfo.map(movie => (
            <li key={movie.id}>
              {movie.author}
              <p>{movie.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};
export default Reviews;
