import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import { Movies } from './Movies';
import MovieDetails from 'pages/MovieDetails';
import { Reviews } from 'pages/Reviews';
import { Cast } from 'pages/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

