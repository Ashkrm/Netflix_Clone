import axios from 'axios';

export default class MovieDetailsService {
  async getMovieDetails(imdbID) {
    return await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=7dfe4eee`)
  }
}
