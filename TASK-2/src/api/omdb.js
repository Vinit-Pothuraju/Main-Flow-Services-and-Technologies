const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL || "https://www.omdbapi.com/";

async function fetchJSON(params) {
  const url = `${BASE_URL}?apikey=${API_KEY}&${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error || "No data found");
  return data;
}

export const omdb = {
  searchMovies: (query, page = 1, type = "", year = "") =>
    fetchJSON(`s=${encodeURIComponent(query)}&page=${page}&type=${type}&y=${year}`),

  getMovieDetails: (imdbID) =>
    fetchJSON(`i=${imdbID}&plot=full`),
};
