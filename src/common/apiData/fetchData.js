import { apiKey, apiUrl } from "./dataAPI";

export const getPopularMovies = async (pageNumber) => {
  const response = await fetch(
    `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  );

  const popularMovies = await response.json();

  return popularMovies;
};

export const getGenres = async () => {
  const response = await fetch(
    `${apiUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`
  );

  const genres = await response.json();

  return genres;
};

export const getMovie = async (movieId) => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`
  );

  const movie = await response.json();

  return movie;
};

export const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );

  const movieCredits = await response.json();

  return movieCredits;
};

export const getMoviesSearchResults = async (query, pageNumber) => {
  const response = await fetch(
    `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}`
  );

  const searchResults = await response.json();

  return searchResults;
};

export const getPopularPeople = async (pageNumber) => {
  const response = await fetch(
    `${apiUrl}/person/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  );

  const popularPeople = await response.json();

  return popularPeople;
};

export const getPeopleSearchResults = async (query, pageNumber) => {
  const response = await fetch(
    `${apiUrl}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNumber}`
  );

  const searchResults = await response.json();

  return searchResults;
};

export const getPerson = async (personId) => {
  const response = await fetch(
    `${apiUrl}/person/${personId}?api_key=${apiKey}&language=en-US`
  );

  const person = await response.json();

  return person;
};

export const getPersonCredits = async (personId) => {
  const response = await fetch(
    `${apiUrl}/person/${personId}/movie_credits?api_key=${apiKey}&language=en-US`
  );

  const personCredits = await response.json();

  return personCredits;
};
