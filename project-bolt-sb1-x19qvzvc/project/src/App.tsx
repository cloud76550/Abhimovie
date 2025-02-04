import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import TrendingPage from './pages/TrendingPage';
import MoviesPage from './pages/MoviesPage';
import { api } from './api';
import { Movie } from './types';

function App() {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    if (query.trim()) {
      const results = await api.searchMovies(query);
      setSearchResults(results);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar onSearch={handleSearch} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route 
              path="/search" 
              element={<SearchResults results={searchResults} />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App