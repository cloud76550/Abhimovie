import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Film } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate('/search');
    }
  };

  return (
    <nav className="bg-black/95 fixed w-full z-50 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Film className="h-8 w-8 text-red-600" />
          <span className="text-white text-2xl font-bold">Abhimovie</span>
        </Link>

        <form onSubmit={handleSubmit} className="flex-1 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </form>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/movies" className="text-gray-300 hover:text-white">Movies</Link>
          <Link to="/trending" className="text-gray-300 hover:text-white">Trending</Link>
        </div>
      </div>
    </nav>
  );
}