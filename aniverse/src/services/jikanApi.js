import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 10000,
});

// ================= HOME =================

export const getTrendingAnime = async () => {
  const response = await api.get("/top/anime");

  return response.data.data.slice(0, 6);
};

export const getSeasonalAnime = async () => {
  const response = await api.get("/seasons/now", {
    params: {
      limit: 6,
    },
  });

  return response.data.data;
};

// ================= ANIME =================

export const getAnimeList = async (page = 1) => {
  const response = await api.get("/top/anime");

  return response.data;
};

export const getAnimeDetails = async (id) => {
  const response = await api.get(`/anime/${id}/full`);

  return response.data.data;
};

export const getAnimeCharacters = async (id) => {
  const response = await api.get(`/anime/${id}/characters`);

  return response.data.data;
};

// ================= CHARACTERS =================

export const getCharacters = async (page = 1) => {
  const response = await api.get("/characters", {
    params: {
      page,
      limit: 12,
    },
  });

  return response.data;
};

export const getCharacterDetails = async (id) => {
  const response = await api.get(`/characters/${id}/full`);

  return response.data.data;
};
