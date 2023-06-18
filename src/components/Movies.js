import { getMovieByName } from 'Service/serviceApi';
import { MovieList } from 'components/MovieList';
import { SearchMovies } from 'components/SearchMovise';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('query');
  const [movies, setMovieId] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    getMovieByName(movieId).then(data => {
      setMovieId(data.results);
    });
  }, [movieId]);

  return (
    <div>
      <SearchMovies setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};
