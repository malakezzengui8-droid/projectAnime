import { useEffect, useState } from "react";
import AnimeCard from "../components/anime/AnimeCard";
import SearchBar from "../components/anime/SearchBar";
import Filter from "../components/anime/Filter";
import Pagination from "../components/anime/Pagination";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import { getAnimeList } from "../services/jikanApi";
import "../styles/anime.css";

function Anime() {
  const [animeList, setAnimeList] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAnime();
  }, [page]);

  const fetchAnime = async () => {
    try {
      setLoading(true);

      const data = await getAnimeList(page);

      setAnimeList(data.data);
      setFilteredAnime(data.data);

      setError("");
    } catch (error) {
      setError("Failed to load anime.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let result = animeList;

    if (search !== "") {
      result = result.filter((anime) =>
        anime.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (type !== "") {
      result = result.filter(
        (anime) =>
          anime.type && anime.type.toLowerCase() === type.toLowerCase(),
      );
    }

    setFilteredAnime(result);
  }, [search, type, animeList]);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="page-container section">
      <h1 className="page-title">Explore Anime</h1>

      <div className="controls-bar">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

        <Filter value={type} onChange={(e) => setType(e.target.value)} />
      </div>

      <div className="anime-grid">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))
        ) : (
          <h2>No Anime Found</h2>
        )}
      </div>

      {/* <Pagination
        currentPage={page}
        setCurrentPage={setPage}
      /> */}
    </div>
  );
}

export default Anime;
