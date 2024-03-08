const API_KEY = 'd8c8586eb8f7a3661469948e8589a3ef';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;

// API Read Access Token-

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGM4NTg2ZWI4ZjdhMzY2MTQ2OTk0OGU4NTg5YTNlZiIsInN1YiI6IjY1YWEzODY0YzQzM2VhMDBjZTc0ODhkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J_ExehBDWomI21enxBbH_1NkbHr96_MKQSHxBBppFHc