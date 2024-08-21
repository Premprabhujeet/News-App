// const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
// const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
// const API_KEY = "8230176f1f8d09296aa0bd1278359bfb";

// export const endpointPath = (country, category) =>
//   `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`;

// export const endpointSearch = (searchQuery) =>
//   `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
// // const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
// // const API_KEY = "8230176f1f8d09296aa0bd1278359bfb";

// // export const endpointSearch = (searchQuery, category) =>
// //   `${API_SEARCH_DOMAIN}${searchQuery} ${category}&lang=en&apikey=${API_KEY}`;

const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "95b3d24caefa4b82c5903036c61df37b";

export const endpointPath = (country, category, language = 'en') =>
  `${API_DOMAIN}${country}&lang=${language}&category=${category}&apikey=${API_KEY}`;

export const endpointSearch = (searchQuery, language = 'en') =>
  `${API_SEARCH_DOMAIN}${searchQuery}&lang=${language}&apikey=${API_KEY}`;

