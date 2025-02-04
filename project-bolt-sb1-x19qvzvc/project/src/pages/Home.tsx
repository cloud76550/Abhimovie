import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Movie } from '../types';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { AlertCircle, Loader } from 'lucide-react';

export default function Home() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [trendingData, popularData] = await Promise.all([
          api.getTrending(),
          api.getPopular(),
        ]);
        
        if (trendingData.length === 0 && popularData.length === 0) {
          setError('Unable to load movies. Please check your API key configuration.');
        } else {
          setTrending(trendingData);
          setPopular(popularData);
        }
      } catch (err) {
        setError('An error occurred while fetching movies.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader className="h-8 w-8 text-red-600 animate-spin" />
          <p className="text-lg text-gray-300">Loading movies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
          <div className="flex items-center space-x-3 text-red-500 mb-4">
            <AlertCircle className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Error</h2>
          </div>
          <p className="text-gray-300 mb-6">{error}</p>
          <div className="bg-gray-700/50 p-4 rounded-lg text-sm text-gray-400">
            <p className="mb-2">To fix this:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Create a <code className="bg-gray-700 px-1 rounded">.env</code> file in the project root</li>
              <li>Add your TMDB API key: <code className="bg-gray-700 px-1 rounded">VITE_TMDB_API_KEY=your_api_key</code></li>
              <li>Restart the development server</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {trending[0] && <Hero movie={trending[0]} />}

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trending.slice(1).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Popular Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popular.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}