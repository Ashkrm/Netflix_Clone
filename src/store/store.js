import Vue from 'vue';
import Vuex from 'vuex';
import MovieListService from '../services/MovieListService'

Vue.use(Vuex);

const myMovieList = new MovieListService()

export const store = new Vuex.Store({
  state: {
		movieList: {}
	},
	getters: {
		getShows: state => {
			return state.movieList.shows;
		},
		getTrailer: state => id => {
        	const show = state.movieList.shows.filter((item) => item.imdbID.toLowerCase().indexOf(id) >= 0);
        	return 'https://www.youtube-nocookie.com/embed/' + show[0].trailer
		}
	},
	mutations: {
		setMovieList: (state, responseObj) => {
			state.movieList = responseObj;
		} 
	},
	actions: {
		setMovieList: async({commit}) => {
			const responseObj = await myMovieList.getMovieList()
        .then(response => response.data)
        .catch(err => console.log(err))
			commit("setMovieList", responseObj);	
		}

	}
})