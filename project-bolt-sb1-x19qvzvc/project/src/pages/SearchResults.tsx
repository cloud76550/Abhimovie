import React from 'react';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';

interface SearchResultsProps {
  results: Movie[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">
        Search Results ({results.length})
      </h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg">No movies found.</p>
      )}
    </div>
  );
}