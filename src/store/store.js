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