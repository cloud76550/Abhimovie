import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
}

export default function Hero({ movie }: HeroProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">{movie.title}</h1>
            <p className="text-lg text-gray-200 mb-8">{movie.overview}</p>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                <Play className="h-5 w-5" />
                <span>Play Now</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-800/80 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Info className="h-5 w-5" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}