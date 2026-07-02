import { useEffect, useState } from "react";
import AnimeCard from "../components/anime/AnimeCard";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import { getFavorites, deleteFavorite } from "../services/jsonServerApi";
import "../styles/favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFavorites = async () => {
    try {
      setLoading(true);

      const data = await getFavorites();
      setFavorites(data);

      setError("");
    } catch (err) {
      setError("Failed to load favorites.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleDelete = async (id) => {
    await deleteFavorite(id);
    fetchFavorites();
  };

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="page-container">

      <h1 className="page-title">My Favorites</h1>

      {favorites.length === 0 ? (
        <h2>No favorite anime yet.</h2>
      ) : (
        <div className="anime-grid">
          {favorites.map((anime) => (
            <div key={anime.id} className="favorite-card">

              <AnimeCard anime={anime} />

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(anime.id)}
              >
                Remove
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Favorites;