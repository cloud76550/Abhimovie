import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';
import { Loader } from 'lucide-react';

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const data = await api.getPopular();
      setMovies(data);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader className="h-8 w-8 text-red-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}