import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import { getAnimeDetails } from "../services/jikanApi";
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

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="details-page section">
      <div className="details-container">
        <div className="details-image">
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        </div>

        <div className="details-content">
          <h1>{anime.title}</h1>

          <div className="genres">
            {anime.genres.map((genre) => (
              <span key={genre.mal_id}>{genre.name}</span>
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
            <strong>Studio :</strong> {anime.studios[0]?.name}
          </p>

          <h3>Synopsis</h3>

          <p>{anime.synopsis}</p>

          {anime.trailer.embed_url && (
            <iframe
              title="Trailer"
              src={anime.trailer.embed_url}
              allowFullScreen
            ></iframe>
          )}

          <div className="details-buttons">
            <button className="btn btn-primary">Add Favorite</button>

            <button className="btn btn-secondary">Add Library</button>

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
