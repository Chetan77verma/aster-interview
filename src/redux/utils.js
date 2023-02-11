export const API_KEY = process.env.REACT_APP_API_KEY
export const endPoints = {
    getMovies : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    searchMovies : (searchTerm) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
}