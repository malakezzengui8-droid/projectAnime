import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

import { getAnimeDetails } from "../services/jikanApi";
import {
  getFavorites,
  addFavorite,
} from "../services/jsonServerApi";

import "../styles/animeDetails.css";

function AnimeDetails() {
  const { id } = useParams();

  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAnime();
  }, [id]);

  const fetchAnime = async () => {
    try {
      setLoading(true);

      const data = await getAnimeDetails(id);

      setAnime(data);
      setError("");
    } catch (error) {
      setError("Failed to load anime.");
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = async () => {
    try {
      const favorites = await getFavorites();

      const exist = favorites.find(
        (item) => item.mal_id === anime.mal_id
      );

      if (exist) {
        alert("Anime already in favorites.");
        return;
      }

      await addFavorite({
        mal_id: anime.mal_id,
        title: anime.title,
        score: anime.score,
        images: anime.images,
      });

      alert("Added to favorites.");
    } catch (error) {
      alert("Failed to add favorite.");
    }
  };

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="details-page section">

      <div className="details-container">

        <div className="details-image">
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
          />
        </div>

        <div className="details-content">

          <h1>{anime.title}</h1>

          <div className="genres">
            {anime.genres.map((genre) => (
              <span key={genre.mal_id}>
                {genre.name}
              </span>
            ))}
          </div>

          <p>
            <strong>Score :</strong> {anime.score}
          </p>

          <p>
            <strong>Episodes :</strong> {anime.episodes}
          </p>

          <p>
            <strong>Status :</strong> {anime.status}
          </p>

          <p>
            <strong>Year :</strong> {anime.year}
          </p>

          <p>
            <strong>Studio :</strong>{" "}
            {anime.studios[0]?.name}
          </p>

          <h3>Synopsis</h3>

          <p>{anime.synopsis}</p>

          {anime.trailer?.embed_url && (
            <iframe
              title="Trailer"
              src={anime.trailer.embed_url}
              allowFullScreen
            />
          )}

          <div className="details-buttons">

            <button
              className="btn btn-primary"
              onClick={handleFavorite}
            >
              Add Favorite
            </button>

            <button className="btn btn-secondary">
              Add Library
            </button>

            <Link
              className="btn btn-primary"
              to={`/anime/${anime.mal_id}/characters`}
            >
              View Characters
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnimeDetails;