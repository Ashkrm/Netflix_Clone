import axios from 'axios';

export default class MovieListService {
  async getMovieList() {
    return await axios.get(`https://demo9576458.mockable.io/movies`)
  }
}
