
import { useState } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '605f350c'; // Replace with your actual OMDb API key

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      console.log(res)
      res.data.Response === 'True' ? setMovies(res.data.Search) : setError(res.data.Error);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') searchMovies();
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
