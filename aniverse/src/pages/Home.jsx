import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSeasonalAnime, getTrendingAnime } from "../services/jikanApi";
import AnimeCard from "../components/anime/AnimeCard";
import "../styles/home.css";

function Home() {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [seasonalAnime, setSeasonalAnime] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const trending = await getTrendingAnime();
        const seasonal = await getSeasonalAnime();

        setTrendingAnime(trending);
        setSeasonalAnime(seasonal);
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading) {
    return (
      <div className="container section">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <main className="home">
      <section className="hero">
        <div className="container section hero-content">
          <div className="hero-text">
            <h1>
              Welcome to <span>AniVerse</span>
            </h1>

            <p>
              Discover, explore and organize your favorite anime in one place.
            </p>

            <Link to="/anime" className="btn btn-primary">
              Explore Anime
            </Link>
          </div>
        </div>
      </section>

      <section className="container trending section">
        <h2 className="section-title">Trending Anime</h2>

        <div className="anime-grid">
          {trendingAnime.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>

      <section className="container seasonal section">
        <h2 className="section-title">Seasonal Anime</h2>

        <div className="anime-grid">
          {seasonalAnime.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
