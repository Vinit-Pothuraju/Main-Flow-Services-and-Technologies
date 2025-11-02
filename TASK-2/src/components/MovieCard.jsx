import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const poster = movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png';
  return (
    <Link to={`/movie/${movie.imdbID}`} className="block group">
      <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img src={poster} alt={movie.Title} className="w-full h-64 object-cover" />
        <div className="p-3 bg-white">
          <h3 className="font-semibold text-sm truncate">{movie.Title}</h3>
          <div className="text-xs text-gray-500 mt-1 flex justify-between">
            <span>{movie.Year}</span>
            <span>{movie.Type.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
