import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

export default function MoviePage() {
  const { id } = useParams();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <MovieDetails imdbID={id} />
    </div>
  );
}
