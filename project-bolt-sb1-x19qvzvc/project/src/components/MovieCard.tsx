import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="relative group cursor-pointer" 
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
          <p className="text-sm line-clamp-2">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}