import React, { useEffect, useState } from 'react';
import { omdb } from '../api/omdb';

export default function MovieDetails({ imdbID }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    omdb.getMovieDetails(imdbID)
      .then(setMovie)
      .catch(err => setError(err.message));
  }, [imdbID]);

  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'} alt={movie.Title} className="w-48 rounded" />
        <div>
          <h2 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h2>
          <p className="text-sm text-gray-700 mt-2">{movie.Plot}</p>
          <div className="mt-3 text-sm">
            <div><b>Genre:</b> {movie.Genre}</div>
            <div><b>Director:</b> {movie.Director}</div>
            <div><b>Actors:</b> {movie.Actors}</div>
            <div><b>IMDB Rating:</b> ⭐ {movie.imdbRating}</div>
            <div><b>Runtime:</b> {movie.Runtime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
