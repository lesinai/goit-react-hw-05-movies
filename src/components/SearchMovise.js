import { useState } from 'react';

export const SearchMovies = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    setQuery(movieIdValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Please enter a query');
      return;
    }
    setSearchParams({ query });
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={updateQueryString} />
      <button type="submit">Search</button>
    </form>
  );
};
