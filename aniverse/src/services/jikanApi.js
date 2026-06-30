import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4";

export const getTrendingAnime = async () => {
  const response = await axios.get(`${BASE_URL}/top/anime?limit=6`);
  return response.data.data;
};

export const getSeasonalAnime = async () => {
  const response = await axios.get(`${BASE_URL}/seasons/now?limit=6`);
  return response.data.data;
};

export const getAnimeList = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/anime?page=${page}`
  );

  return response.data;
};

export const getAnimeDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/anime/${id}`
  );

  return response.data.data;
};

export const getAnimeCharacters = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/anime/${id}/characters`
  );

  return response.data.data;
};

export const getCharacters = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/characters?page=${page}`
  );

  return response.data;
};

export const getCharacterDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/characters/${id}/full`
  );

  return response.data.data;
};