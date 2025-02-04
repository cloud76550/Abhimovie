import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Star, Calendar, Clock, Users } from 'lucide-react';
import { api } from '../api';
import { MovieDetails as MovieDetailsType } from '../types';
import { Loader } from 'lucide-react';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        setIsLoading(true);
        const data = await api.getMovieDetails(parseInt(id));
        setMovie(data);
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Loader className="h-8 w-8 text-red-600 animate-spin" />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-gray-400">Movie not found</p>
      </div>
    );
  }

  const trailer = movie.videos?.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-8">
          <div className="container mx-auto flex flex-col md:flex-row items-end gap-8">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-lg shadow-2xl"
            />
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-5 w-5" />
                  <span>{movie.runtime} min</span>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                {movie.overview}
              </p>

              {trailer && (
                <a
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Trailer</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {movie.credits?.cast.slice(0, 8).map((actor) => (
                <div key={actor.id} className="text-center">
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      alt={actor.name}
                      className="w-full rounded-lg mb-2"
                    />
                  ) : (
                    <div className="w-full aspect-[2/3] bg-gray-800 rounded-lg mb-2 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-600" />
                    </div>
                  )}
                  <h3 className="font-medium text-white">{actor.name}</h3>
                  <p className="text-sm text-gray-400">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Details</h2>
            <div className="bg-gray-800 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-gray-400 mb-1">Status</h3>
                <p className="text-white">{movie.status}</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Original Language</h3>
                <p className="text-white">{movie.original_language.toUpperCase()}</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Budget</h3>
                <p className="text-white">
                  ${movie.budget.toLocaleString()}
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Revenue</h3>
                <p className="text-white">
                  ${movie.revenue.toLocaleString()}
                </p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}