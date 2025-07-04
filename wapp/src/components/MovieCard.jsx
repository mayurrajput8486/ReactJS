

import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>📅 {movie.Year}</p>
        <p>🎞️ {movie.Type.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
