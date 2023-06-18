import { getTrendingMovie } from 'Service/serviceApi';
import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(data => {
      setMovies(data.results);
    });
  }, []);
  return (
    <div>
      <h2>Trending movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};
export default Home;
