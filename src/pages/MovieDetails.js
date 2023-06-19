import { getMovieById } from 'Service/serviceApi';

import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
const defaultImg =
  'https://www.shutterstock.com/image-vector/vector-sign-no-entry-basic-600w-1690188991.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setmovieInfo] = useState(null);
  const location = useLocation();
  const searchRef = useRef(location?.state?.from);
  useEffect(() => {
    getMovieById(movieId).then(data => {
      setmovieInfo(data);
    });
  }, [movieId]);
  if (!movieInfo) return;

  return (
    <>
      {' '}
      <Link to={`/movies${searchRef.current.search}` || '/'}>
        <button type="button">Go back</button>{' '}
      </Link>
      <img
        src={
          movieInfo.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
            : defaultImg
        }
        alt={movieInfo.title}
        width="150px"
      />
      <h2>{movieInfo.title}</h2>
      <p>{movieInfo.overview}</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
