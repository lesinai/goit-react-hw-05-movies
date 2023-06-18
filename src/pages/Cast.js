import { getCastById } from 'Service/serviceApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const defaultImg =
  'https://www.shutterstock.com/image-vector/vector-sign-no-entry-basic-600w-1690188991.jpg';
export const Cast = () => {
  const { movieId } = useParams();
  const [movieInfo, setmovieInfo] = useState(null);
  useEffect(() => {
    getCastById(movieId).then(data => {
      setmovieInfo(data.cast);
    });
  }, [movieId]);
  if (!movieInfo) return;
  return (
    <div>
      {movieInfo.length > 0 ? (
        <ul>
          {movieInfo.map(movie => (
            <li key={movie.id}>
              <img
                width="150px"
                src={
                  movie.profile_path
                    ? `https://image.tmdb.org/t/p/w500${movie.profile_path}`
                    : defaultImg
                }
                alt={movie.original_name}
              />
              <p>{movie.original_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};
