import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// ================= FAVORITES =================

export const getFavorites = async () => {
  const response = await api.get("/favorites");
  return response.data;
};

export const addFavorite = async (anime) => {
  const response = await api.post("/favorites", anime);
  return response.data;
};

export const deleteFavorite = async (id) => {
  await api.delete(`/favorites/${id}`);
};

// ================= RATINGS =================

export const getRatings = async () => {
  const response = await api.get("/ratings");
  return response.data;
};

export const addRating = async (rating) => {
  const response = await api.post("/ratings", rating);
  return response.data;
};

export const updateRating = async (id, rating) => {
  const response = await api.put(`/ratings/${id}`, rating);
  return response.data;
};

export const deleteRating = async (id) => {
  await api.delete(`/ratings/${id}`);
};

// ================= LIBRARY =================

export const getLibrary = async () => {
  const response = await api.get("/library");
  return response.data;
};

export const addLibrary = async (anime) => {
  const response = await api.post("/library", anime);
  return response.data;
};

export const updateLibrary = async (id, anime) => {
  const response = await api.put(`/library/${id}`, anime);
  return response.data;
};

export const deleteLibrary = async (id) => {
  await api.delete(`/library/${id}`);
};