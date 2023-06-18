import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'Service/serviceApi';

const defaultImg =
  'https://www.shutterstock.com/image-vector/vector-sign-no-entry-basic-600w-1690188991.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setmovieInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(data => {
      setmovieInfo(data);
    });
  }, [movieId]);

  if (!movieInfo) return null;

  const handleGoBack = () => {
    const searchQuery = location?.state?.searchQuery || '';
    const queryResult = location?.state?.queryResult || [];
    window.history.back();
  };

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
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
          <Link
            to={{
              pathname: `/cast`,
              state: {
                searchQuery: location?.state?.searchQuery || '',
                queryResult: location?.state?.queryResult || [],
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `/reviews`,
              state: {
                searchQuery: location?.state?.searchQuery || '',
                queryResult: location?.state?.queryResult || [],
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;

//import { getMovieById } from 'Service/serviceApi';
//import { useEffect, useState } from 'react';
//import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
//const defaultImg =
// 'https://www.shutterstock.com/image-vector/vector-sign-no-entry-basic-600w-1690188991.jpg';

//const MovieDetails = () => {
// const { movieId } = useParams();
//const [movieInfo, setmovieInfo] = useState(null);
//const location = useLocation();
//useEffect(() => {
//getMovieById(movieId).then(data => {
//setmovieInfo(data);
// });
// }, [movieId]);
//if (!movieInfo) return;

//return (
// <>
// <Link to={location?.state?.from || '/'}>
//  <button type="button">Go back</button>
// </Link>
//<img
// src={
//  movieInfo.poster_path
//   ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
//   : defaultImg
// }
// alt={movieInfo.title}
// width="150px"
// />
// <h2>{movieInfo.title}</h2>
// <p>{movieInfo.overview}</p>

// <ul>
// <li>
// <Link to="cast">Cast</Link>
// </li>
// <li>
//  <Link to="reviews">Reviews</Link>
// </li>
//</ul>
// <Outlet />
//</>
// );
//};
//export default MovieDetails;
