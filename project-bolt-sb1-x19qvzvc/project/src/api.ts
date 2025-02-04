import axios from 'axios';
import { Movie, MovieDetails } from './types';

const API_KEY = 'c610a84f17f4458564b0884aa1b3e902';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = {
  getTrending: async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  },

  getPopular: async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  },

  searchMovies: async (query: string): Promise<Movie[]> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  },

  getMovieDetails: async (id: number): Promise<MovieDetails | null> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  },
};