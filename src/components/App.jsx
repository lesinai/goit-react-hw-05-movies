import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';

import { Cast } from 'pages/Cast';
import { lazy } from 'react';

const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('pages/Reviews'));
const Movies = lazy(() => import('./Movies'));
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

