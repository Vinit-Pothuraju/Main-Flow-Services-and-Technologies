import React, { useState } from 'react';
import { omdb } from '../api/omdb';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ type: '', year: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(query) {
    setLoading(true);
    setError('');
    try {
      const data = await omdb.searchMovies(query, 1, filters.type, filters.year);
      setMovies(data.Search || []);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  function handleFilter(newFilter) {
    const updated = { ...filters, ...newFilter };
    setFilters(updated);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Explorer (OMDb)</h1>

      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />

      {loading && <div className="mt-6 text-center">Loading...</div>}
      {error && <div className="text-red-600 mt-4 text-center">{error}</div>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {movies.map(m => <MovieCard key={m.imdbID} movie={m} />)}
      </div>
    </div>
  );
}
